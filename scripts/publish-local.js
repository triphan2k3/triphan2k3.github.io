// Local stand-in for the Obsidian Digital Garden plugin's "publish" step.
// Compiles notes from a vault folder into src/site/notes and their attachments into
// src/site/img/user, using the same output format the plugin pushes to GitHub.
//
// Only notes with `dg-publish: true` are published; `dg-home: true` marks the home page.
//
// Usage: node scripts/publish-local.js <vault> <folder-in-vault>...

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const slugify = require("@sindresorhus/slugify");

const NOTES_DIR = path.join(__dirname, "..", "src/site/notes");
const IMG_DIR = path.join(__dirname, "..", "src/site/img/user");
const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg)$/i;

function parseArgs() {
  const [vault, ...folders] = process.argv.slice(2);
  if (!vault || folders.length === 0) {
    console.error("usage: publish-local.js <vault> <folder>...");
    process.exit(1);
  }
  return { vault: path.resolve(vault), folders: folders.map((f) => f.replace(/\/$/, "")) };
}

function walk(dir, root, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, root, out);
    else out.push(path.relative(root, full).split(path.sep).join("/"));
  }
  return out;
}

// Mirrors Obsidian's getFirstLinkpathDest: exact path, then shortest-path basename match.
function buildResolver(vaultFiles) {
  const byName = new Map();
  for (const file of vaultFiles) {
    const base = path.posix.basename(file);
    const keys = [base, base.replace(/\.md$/, "")];
    for (const key of keys) {
      if (!byName.has(key)) byName.set(key, []);
      byName.get(key).push(file);
    }
  }
  const fileSet = new Set(vaultFiles);
  return (linkpath, sourcePath) => {
    if (fileSet.has(linkpath)) return linkpath;
    if (fileSet.has(`${linkpath}.md`)) return `${linkpath}.md`;
    const candidates = byName.get(path.posix.basename(linkpath)) || [];
    const matching = candidates.filter((c) => c.endsWith(linkpath) || c.endsWith(`${linkpath}.md`));
    if (matching.length === 0) return null;
    const sourceDir = path.posix.dirname(sourcePath);
    return matching.find((c) => path.posix.dirname(c) === sourceDir) || matching.sort((a, b) => a.length - b.length)[0];
  };
}

// --- Dataview TABLE subset -------------------------------------------------

function dqlToJs(expr) {
  return expr.replace(/(?<![=!<>])=(?![=>])/g, "==");
}

function evaluate(expr, row) {
  const scope = new Proxy(row, {
    has: (_, key) => typeof key === "string" && !(key in globalThis),
    get: (target, key) => (key === Symbol.unscopables ? undefined : target[key] ?? null),
  });
  // eslint-disable-next-line no-new-func
  return new Function("scope", `with (scope) { return (${dqlToJs(expr)}); }`)(scope);
}

function splitTopLevel(text, separator) {
  const parts = [];
  let depth = 0;
  let quote = null;
  let current = "";
  for (const ch of text) {
    if (quote) {
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") quote = ch;
    else if ("([{".includes(ch)) depth++;
    else if (")]}".includes(ch)) depth--;
    else if (ch === separator && depth === 0) {
      parts.push(current.trim());
      current = "";
      continue;
    }
    current += ch;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function parseTableQuery(query) {
  const lines = query.trim().split("\n").map((l) => l.trim());
  const header = lines.findIndex((l) => /^TABLE\b/i.test(l));
  const from = lines.findIndex((l) => /^FROM\b/i.test(l));
  const sort = lines.findIndex((l) => /^SORT\b/i.test(l));
  if (header < 0 || from < 0) throw new Error(`unsupported dataview query:\n${query}`);

  const withoutId = /^TABLE\s+WITHOUT\s+ID/i.test(lines[header]);
  const columnText = [lines[header].replace(/^TABLE(\s+WITHOUT\s+ID)?/i, ""), ...lines.slice(header + 1, from)].join(" ");
  const columns = splitTopLevel(columnText, ",").map((col) => {
    const match = col.match(/^(.*)\s+AS\s+("([^"]+)"|(\S+))$/i);
    return match ? { expr: match[1].trim(), title: match[3] || match[4] } : { expr: col, title: col };
  });
  const source = lines[from].match(/^FROM\s+"([^"]+)"/i)[1];
  let sortExpr = null;
  let sortDir = 1;
  if (sort >= 0) {
    const sortText = lines[sort].replace(/^SORT\s+/i, "");
    sortExpr = splitTopLevel(sortText, ",").map((part) => {
      const m = part.match(/^(.*?)\s+(ASC|DESC)$/i);
      return { expr: m ? m[1] : part, dir: m && m[2].toUpperCase() === "DESC" ? -1 : 1 };
    });
  }
  return { withoutId, columns, source, sortExpr, sortDir };
}

const WIKILINK = (target, display) => `[[${target}${display ? `|${display}` : ""}]]`;

function renderValue(value) {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.map(renderValue).filter(Boolean).join("<br>");
  if (typeof value === "object" && value.__md) return value.__md;
  return String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function linkTarget(value) {
  if (typeof value === "object" && value?.__target) return value.__target;
  return String(value).replace(/^\[\[|\]\]$/g, "").split("|")[0];
}

function rowFor(file, frontmatter) {
  const md = (s) => ({ __md: s });
  return {
    ...frontmatter,
    file: { path: file, name: path.posix.basename(file, ".md"), folder: path.posix.dirname(file) },
    link: (target, display) => ({ ...md(WIKILINK(String(target).replace(/\.md$/, ""), display)), __target: target }),
    elink: (url, display) => (url ? md(`[${display || url}](${url})`) : null),
    embed: (link) => (link ? md(`!${WIKILINK(linkTarget(link))}`) : null),
    choice: (cond, a, b) => (cond ? a : b),
    map: (list, fn) => (list || []).map(fn),
    length: (list) => (list ? list.length : 0),
  };
}

function compileDataviewTable(query, vault, vaultFiles) {
  const q = parseTableQuery(query);
  const rows = vaultFiles
    .filter((f) => f.endsWith(".md") && f.startsWith(`${q.source}/`))
    .map((file) => rowFor(file, matter(fs.readFileSync(path.join(vault, file), "utf8")).data));

  if (q.sortExpr) {
    const keyed = rows.map((row) => ({ row, keys: q.sortExpr.map((s) => evaluate(s.expr, row)) }));
    keyed.sort((a, b) => {
      for (let i = 0; i < q.sortExpr.length; i++) {
        const [x, y] = [a.keys[i], b.keys[i]];
        if (x === y) continue;
        if (x === null) return 1;
        if (y === null) return -1;
        return (x < y ? -1 : 1) * q.sortExpr[i].dir;
      }
      return 0;
    });
    rows.splice(0, rows.length, ...keyed.map((k) => k.row));
  }

  const titles = [...(q.withoutId ? [] : ["File"]), ...q.columns.map((c) => c.title)];
  const body = rows.map((row) => {
    const cells = q.columns.map((c) => renderValue(evaluate(c.expr, row)));
    if (!q.withoutId) cells.unshift(WIKILINK(row.file.path.replace(/\.md$/, ""), row.file.name));
    return `| ${cells.join(" | ")} |`;
  });
  return [`| ${titles.join(" | ")} |`, `| ${titles.map(() => "---").join(" | ")} |`, ...body].join("\n");
}

// --- Note compilation --------------------------------------------------------

function splitFences(text) {
  return text.split(/(^```[^\n]*\n[\s\S]*?^```[ \t]*$)/m);
}

function compileNote(file, vault, vaultFiles, resolve, assets) {
  const raw = fs.readFileSync(path.join(vault, file), "utf8");
  const { data: frontmatter, content } = matter(raw);
  const noteStem = file.replace(/\.md$/, "");

  const withDataview = splitFences(content)
    .map((part) => {
      const fence = part.match(/^```dataview\n([\s\S]*?)```[ \t]*$/);
      return fence ? `${compileDataviewTable(fence[1], vault, vaultFiles)}\n{ .block-language-dataview}` : part;
    })
    .join("");

  const compiled = splitFences(withDataview)
    .map((part, i) => {
      if (i % 2 === 1) return part;
      return part.replace(/(!?)\[\[([^\]]+?)\]\]/g, (whole, bang, inner) => {
        const [targetWithRef, ...displayParts] = inner.replace(/\\\|/g, "|").split("|");
        const display = displayParts.join("|");
        const [target, header] = targetWithRef.split("#");
        const headerPath = header ? `#${header}` : "";

        if (!target) return `${bang}[[${noteStem}${headerPath}\\|${display || targetWithRef}]]`;

        const resolved = resolve(target, file);
        if (bang && resolved && IMAGE_EXT.test(resolved)) {
          assets.add(resolved);
          const name = display ? `${target}\\|${display}` : target;
          return `![${name}](${encodeURI(`/img/user/${resolved}`)})`;
        }
        if (!resolved) return `${bang}[[${targetWithRef}\\|${display || targetWithRef}]]`;
        if (!resolved.endsWith(".md")) return whole;
        return `${bang}[[${resolved.replace(/\.md$/, "")}${headerPath}\\|${display || targetWithRef}]]`;
      });
    })
    .join("");

  const tags = typeof frontmatter.tags === "string" ? frontmatter.tags.split(/,\s*/) : [...(frontmatter.tags || [])];
  if (frontmatter["dg-home"] && !tags.includes("gardenEntry")) tags.push("gardenEntry");

  const published = {
    "dg-publish": true,
    permalink: `/${noteStem.split("/").map((x) => slugify(x)).join("/")}/`,
    ...(frontmatter.title ? { title: frontmatter.title } : {}),
    ...(tags.length ? { tags } : {}),
  };
  const userProperties = Object.fromEntries(
    Object.entries(frontmatter).filter(([key]) => !key.startsWith("dg-") && key !== "position"),
  );
  return `---\n${JSON.stringify({ ...published, "dg-note-properties": userProperties })}\n---\n${compiled}`;
}

function main() {
  const { vault, folders } = parseArgs();
  const vaultFiles = walk(vault, vault);
  const resolve = buildResolver(vaultFiles);
  const notes = vaultFiles.filter(
    (f) =>
      folders.some((folder) => f.startsWith(`${folder}/`)) &&
      f.endsWith(".md") &&
      matter(fs.readFileSync(path.join(vault, f), "utf8")).data["dg-publish"] === true,
  );
  const assets = new Set();

  for (const file of notes) {
    const output = compileNote(file, vault, vaultFiles, resolve, assets);
    const dest = path.join(NOTES_DIR, file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, output);
  }
  for (const asset of assets) {
    const dest = path.join(IMG_DIR, asset);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(path.join(vault, asset), dest);
  }
  console.log(`published ${notes.length} notes and ${assets.size} images from ${folders.join(", ")}`);
}

main();
