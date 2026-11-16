---
{"dg-publish":true,"permalink":"/21-application/cube/zz/","dg-note-properties":{}}
---
# ZZ

ZZ is a speedsolving method invented by Zbigniew Zborowski in 2006. Its key idea is to **orient every edge first**. After that, the whole first two layers can be solved turning only R, U and L, with no cube rotations and no F or B moves. The last layer then has no flipped edges, which cuts its case count a lot.

Compared with [[21. Application/Cube/Cube#F2L\|CFOP]]: you spend more thinking during inspection, but F2L turns smoothly and you never see an OLL with flipped edges.

## Steps

The pictures are unfolded cubes (yellow on top, green in front). Coloured stickers are solved pieces; grey ones aren't solved yet.

1. **EOLine**: orient all 12 edges and place the DF and DB edges, so a line runs across the bottom. (Pieces are named by the faces they touch: DF is the edge between Down and Front, the white-green edge; DB is between Down and Back, the white-blue edge.) It takes about 6 moves on average and at most 9.

   ![ZZ_EOLine.svg\|260](/img/user/97.%20Attachments/Cube/ZZ_EOLine.svg)

   - **EOCross** is the modern alternative: orient the edges and solve the whole cross. It's harder to plan in inspection but makes F2L easier. Most fast ZZ solvers use it now.

   ![ZZ_EOCross.svg\|260](/img/user/97.%20Attachments/Cube/ZZ_EOCross.svg)

2. **ZZF2L**: build the left 1x2x3 block, then the right one, turning only `R U L`. With EOCross this is plain pair-by-pair F2L, still `<R, U, L>` only.

   | Left block | Both blocks (F2L done) |
   |---|---|
   | ![ZZ_Left_Block.svg\|220](/img/user/97.%20Attachments/Cube/ZZ_Left_Block.svg) | ![ZZ_F2L.svg\|220](/img/user/97.%20Attachments/Cube/ZZ_F2L.svg) |

3. **Last layer**: every edge is already oriented, so the top always shows a yellow cross. Only corners and permutation are left (see the options below).

   ![ZZ_LL.svg\|260](/img/user/97.%20Attachments/Cube/ZZ_LL.svg)

   This example is solved by Sune, then T perm.

## Edge orientation

An edge is **good** when it can be solved with `R L U D` turns alone, and **bad** when it needs an F or B quarter turn. Bad edges always come in an even number: 0, 2, 4, … 12.

To check an edge, hold the cube with F and B fixed and look at its sticker on the U/D face. For an edge in the middle layer, look at its F/B sticker instead.

- If that sticker is **U or D coloured**, the edge is good.
- If it's **L or R coloured**, the edge is bad.
- If it's **F or B coloured**, look at the edge's other sticker. If that one is U or D coloured, the edge is bad; otherwise it's good.

In this scramble, the dots mark the 6 bad edges (each edge has a dot on both of its stickers):

![ZZ_EO.svg\|260](/img/user/97.%20Attachments/Cube/ZZ_EO.svg)

Scramble: `R2 D' F U2 L' B R' U F' D2 L U' B2 R`

To fix bad edges, bring them to the F or B face and turn that face a quarter turn (F, F', B or B'). Each quarter turn flips the 4 edges on that face. Typical cases:

Because a quarter turn flips good edges to bad too, with `k` bad edges on F, doing F changes the bad count by `4 - 2k`. With `k = 2` nothing improves. Move edges onto F with `U`, `D`, `R`, `L` turns (these never change orientation):

- **4 bad edges**: put all four on F, then do F. Now 0 bad.
- **2 bad edges**: put exactly one on F, then do F. Now 4 bad; continue as the 4-edge case.
- **6 bad edges**: put three on F, then do F. Now 4 bad; continue as the 4-edge case.
- **8 or more bad edges**: put four bad edges on F and four on B, then do F B. With 10 or 12, first put four bad edges on F and do F, which leaves 6 or 8.

## Last layer options

Because edges are oriented, the last layer is a subset of the CFOP last layer:

| Option | Steps | Algorithms | Notes |
|---|---|---|---|
| OCLL + 2-Look PLL | 3 | 7 + 6 | Beginner. [[21. Application/Cube/Cube#2-Look OLL\|2-Look OLL]] without the edge step, then [[21. Application/Cube/Cube#2-Look PLL\|2-Look PLL]] |
| OCLL + PLL | 2 | 7 + 21 | Same as CFOP's full PLL step; OLL is only its 7 corner cases ([[21. Application/Cube/Cube#OLL\|OLL]] 21 to 27) |
| COLL + EPLL | 2 | 42 + 4 | Solve corners fully, then one of 4 edge cycles (Ua, Ub, H, Z) |
| ZBLL | 1 | 472 | One look for the whole last layer: [[21. Application/Cube/Cube#PLL\|PLL]] is part of it, 493 cases in all |
| Winter Variation + PLL | 1 + 1 | 27 + 21 | Orient corners while inserting the last pair (when it inserts as `R U R'`) |

The 7 OCLL cases are already in this vault: [[21. Application/Cube/2-Look OLL/2-Look OLL Sune\|2-Look OLL Sune]], [[21. Application/Cube/2-Look OLL/2-Look OLL Antisune\|2-Look OLL Antisune]], [[21. Application/Cube/2-Look OLL/2-Look OLL H\|2-Look OLL H]], [[21. Application/Cube/2-Look OLL/2-Look OLL Pi\|2-Look OLL Pi]], [[21. Application/Cube/2-Look OLL/2-Look OLL U\|2-Look OLL U]], [[21. Application/Cube/2-Look OLL/2-Look OLL T\|2-Look OLL T]], [[21. Application/Cube/2-Look OLL/2-Look OLL L\|2-Look OLL L]]. EPLL is the edge step of 2-Look PLL: [[21. Application/Cube/2-Look PLL/2-Look PLL Ua\|2-Look PLL Ua]], [[21. Application/Cube/2-Look PLL/2-Look PLL Ub\|2-Look PLL Ub]], [[21. Application/Cube/2-Look PLL/2-Look PLL H\|2-Look PLL H]], [[21. Application/Cube/2-Look PLL/2-Look PLL Z\|2-Look PLL Z]].

## Suggested learning path

1. EOLine, then the blocks, until you can plan EOLine in the 15 seconds of inspection.
2. Last layer: OCLL + 2-Look PLL. You already know these from CFOP.
3. Full PLL, so the last layer takes 2 looks.
4. Switch EOLine to EOCross.
5. COLL + EPLL, then ZBLL subsets one at a time (T, U, L, then H, Pi, Sune, Antisune).

## Pros and cons

**Pros**
- F2L uses only `R U L`, with no rotations, so it flows well and suits one-handed solving.
- No OLL cases with flipped edges, and ZBLL can be learned bit by bit.
- Fewer algorithms than CFOP for the same number of looks.

**Cons**
- EOLine or EOCross is hard to plan in inspection at first.
- Block building is less intuitive than CFOP's pair-by-pair F2L.
- Most top solvers and learning resources use CFOP.
