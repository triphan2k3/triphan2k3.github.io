---
{"dg-publish":true,"permalink":"/21-application/cube/cube/","dg-note-properties":{}}
---

# Cube

- [[21. Application/Cube/Cube#F2L\|F2L]] (42 cases)
- [[21. Application/Cube/Cube#2-Look OLL\|2-Look OLL]] (10 cases)
- [[21. Application/Cube/Cube#2-Look PLL\|2-Look PLL]] (6 cases)
- [[21. Application/Cube/Cube#OLL\|OLL]] (57 cases)
- [[21. Application/Cube/Cube#PLL\|PLL]] (21 cases)

Other methods: [[21. Application/Cube/ZZ\|ZZ]]

All cases live in `db.csv` (one row per case). In `solutions` and `related_cases`, separate entries with `;` (e.g. `F2L 5;OLL 21`); the first solution is the one shown in the table. Set `status` to Unlearned, Learning or Finished. A row with a `deck` is an Anki card: push it with **Anki CSV Sync: Push CSV to Anki**.

## F2L

F2L (First Two Layers) pairs each corner with its edge and inserts the pair. Numbering follows the speedsolving.com wiki.

| Name   | Image               | Group                           | Algorithm                            | Status   | Finger trick                                         | Related cases  |
| ------ | ------------------- | ------------------------------- | ------------------------------------ | -------- | ---------------------------------------------------- | -------------- |
| F2L 6  | ![[F2L_6.svg\|80]]  | Reposition Edge                 | U' (r U' R' U) (R U r')              | Learning | [Watch](https://www.youtube.com/shorts/MGGET_EiBjE)  |                |
| F2L 7  | ![[F2L_7.svg\|80]]  | Reposition Edge                 | (U' R U2 R')2                        | Learning |                                                      |                |
| F2L 8  | ![[F2L_8.svg\|80]]  | Reposition Edge                 | (r' U2) (R2 U R2 U r)                | Learning |                                                      |                |
| F2L 9  | ![[F2L_9.svg\|80]]  | Reposition Edge and Flip Corner | F (R U R' U') (F' R U' R')           | Learning |                                                      |                |
| F2L 10 | ![[F2L_10.svg\|80]] | Reposition Edge and Flip Corner | U' (R U R' U) (R U R')               | Learning | [Watch](https://www.youtube.com/watch?v=gyyYICRQg5c) |                |
| F2L 11 | ![[F2L_11.svg\|80]] | Reposition Edge and Flip Corner | U' (R U2' R') U (F' U' F)            | Learning |                                                      |                |
| F2L 12 | ![[F2L_12.svg\|80]] | Reposition Edge and Flip Corner | (R U' R' U)2 (R' F R F')             | Learning |                                                      |                |
| F2L 13 | ![[F2L_13.svg\|80]] | Reposition Edge and Flip Corner | (R U' R' U) (R' F R F') (R U' R')    | Learning |                                                      |                |
| F2L 14 | ![[F2L_14.svg\|80]] | Reposition Edge and Flip Corner | U' (R U' R' U) (R U R')              | Learning |                                                      |                |
| F2L 15 | ![[F2L_15.svg\|80]] | Split Pair by Going Over        | R' D' R U' R' D F R F'               | Learning |                                                      |                |
| F2L 16 | ![[F2L_16.svg\|80]] | Split Pair by Going Over        | R U' R' U d R' U' R                  | Learning |                                                      |                |
| F2L 17 | ![[F2L_17.svg\|80]] | Split Pair by Going Over        | R U2 R' U' R U R'                    | Learning |                                                      |                |
| F2L 18 | ![[F2L_18.svg\|80]] | Split Pair by Going Over        | (R U R' U')2 F R' F' R               | Learning |                                                      |                |
| F2L 19 | ![[F2L_19.svg\|80]] | Pair Made on Side               | U (R U2 R') (R' F R F')              | Learning |                                                      |                |
| F2L 20 | ![[F2L_20.svg\|80]] | Pair Made on Side               | U' (R U' R2' F R F') (R U' R')       | Learning |                                                      |                |
| F2L 21 | ![[F2L_21.svg\|80]] | Pair Made on Side               | U2 (R U R' U)(R U' R')               | Learning |                                                      |                |
| F2L 22 | ![[F2L_22.svg\|80]] | Pair Made on Side               | (r U' r') U2 (r U r')                | Learning |                                                      | F2L 42         |
| F2L 23 | ![[F2L_23.svg\|80]] | Pair Made on Side               | U (R U' R' U' R U') R' (R' F R F')   | Learning |                                                      |                |
| F2L 24 | ![[F2L_24.svg\|80]] | Pair Made on Side               | F U (R U' R' F')(R U' R')            | Learning |                                                      |                |
| F2L 26 | ![[F2L_26.svg\|80]] | Corner in Place, Edge in U Face | U (R U' R') (F R' F' R)              | Learning |                                                      |                |
| F2L 27 | ![[F2L_27.svg\|80]] | Corner in Place, Edge in U Face | (R U' R') (R' F R F')                | Learning |                                                      |                |
| F2L 28 | ![[F2L_28.svg\|80]] | Corner in Place, Edge in U Face | (R U R' U') (F R' F' R)              | Learning |                                                      |                |
| F2L 29 | ![[F2L_29.svg\|80]] | Corner in Place, Edge in U Face | (R' F R F')2                         | Learning |                                                      |                |
| F2L 30 | ![[F2L_30.svg\|80]] | Corner in Place, Edge in U Face | (R U R' U')(R U R')                  | Learning |                                                      |                |
| F2L 31 | ![[F2L_31.svg\|80]] | Edge in Place, Corner in U face | U' (R' F R F') (R U' R')             | Learning |                                                      | F2L 25         |
| F2L 32 | ![[F2L_32.svg\|80]] | Edge in Place, Corner in U face | (R U R' U')2 (R U R')                | Learning |                                                      |                |
| F2L 33 | ![[F2L_33.svg\|80]] | Edge in Place, Corner in U face | U' (R U' R') (U R' F R F')           | Learning |                                                      |                |
| F2L 34 | ![[F2L_34.svg\|80]] | Edge in Place, Corner in U face | U (R U R') U2 (R U R')               | Learning |                                                      |                |
| F2L 35 | ![[F2L_35.svg\|80]] | Edge in Place, Corner in U face | U2 (R U R') (F R' F' R)              | Learning |                                                      |                |
| F2L 36 | ![[F2L_36.svg\|80]] | Edge in Place, Corner in U face | U2 (R' F R F') U2 (R U R')           | Learning |                                                      |                |
| F2L 38 | ![[F2L_38.svg\|80]] | Edge and Corner in Place        | (R' F R F') (R U' R' U)2 (R' F R F') | Learning |                                                      | F2L 12         |
| F2L 39 | ![[F2L_39.svg\|80]] | Edge and Corner in Place        | (R U' R') U' (R U R' U) (R' F R F')  | Learning |                                                      | F2L 5          |
| F2L 40 | ![[F2L_40.svg\|80]] | Edge and Corner in Place        | (R U' R') U (R U2 R') (R' F R F')    | Learning |                                                      | F2L 19         |
| F2L 1  | ![[F2L_1.svg\|80]]  | Basic Inserts                   | R' F R F'                            | Finished |                                                      |                |
| F2L 2  | ![[F2L_2.svg\|80]]  | Basic Inserts                   | F R' F' R                            | Finished |                                                      |                |
| F2L 3  | ![[F2L_3.svg\|80]]  | Basic Inserts                   | F' U' F                              | Finished |                                                      |                |
| F2L 4  | ![[F2L_4.svg\|80]]  | Basic Inserts                   | R U R'                               | Finished |                                                      |                |
| F2L 5  | ![[F2L_5.svg\|80]]  | Reposition Edge                 | U' (R U R' U) (R' F R F')            | Finished |                                                      |                |
| F2L 25 | ![[F2L_25.svg\|80]] | Corner in Place, Edge in U Face | U' (R' F R F') (R U R')              | Finished |                                                      | F2L 31         |
| F2L 37 | ![[F2L_37.svg\|80]] | Edge and Corner in Place        | \-                                   | Finished |                                                      |                |
| F2L 41 | ![[F2L_41.svg\|80]] | Edge and Corner in Place        | (r U' r') U2 (r U r') (R U R')       | Finished |                                                      | F2L 42         |
| F2L 42 | ![[F2L_42.svg\|80]] | Edge and Corner in Place        | (R U' R') (r U' r') U2 (r U r')      | Finished |                                                      | F2L 41, F2L 22 |

{ .block-language-dataview}

## 2-Look OLL

2-Look OLL (Orientation of the Last Layer) solves the top color of the last layer in 2 steps. This is part of the CFOP method. To solve the cube after this, use [[21. Application/Cube/Cube#2-Look PLL\|2-Look PLL]]. Advanced: [[21. Application/Cube/Cube#OLL\|OLL]].

| Name      | Image                             | Group      | Algorithm                     | Status    | Finger trick | Related cases |
| --------- | --------------------------------- | ---------- | ----------------------------- | --------- | ------------ | ------------- |
| I-Shape   | ![[2-Look_OLL_I-Shape.svg\|80]]   | 1: Edges   | F R U R' U' F'                | Unlearned |              |               |
| L-Shape   | ![[2-Look_OLL_L-Shape.svg\|80]]   | 1: Edges   | f R U R' U' f'                | Unlearned |              |               |
| Dot Shape | ![[2-Look_OLL_Dot_Shape.svg\|80]] | 1: Edges   | F R U R' U' F' f R U R' U' f' | Unlearned |              |               |
| H         | ![[2-Look_OLL_H.svg\|80]]         | 2: Corners | R U R' U R U' R' U R U2 R'    | Unlearned |              |               |
| Pi        | ![[2-Look_OLL_Pi.svg\|80]]        | 2: Corners | R U2 R2 U' R2 U' R2 U2 R      | Unlearned |              |               |
| U         | ![[2-Look_OLL_U.svg\|80]]         | 2: Corners | R2 D R' U2 R D' R' U2 R'      | Unlearned |              |               |
| T         | ![[2-Look_OLL_T.svg\|80]]         | 2: Corners | r U R' U' r' F R F'           | Unlearned |              |               |
| L         | ![[2-Look_OLL_L.svg\|80]]         | 2: Corners | F R' F' r U R U' r'           | Unlearned |              |               |
| Antisune  | ![[2-Look_OLL_Antisune.svg\|80]]  | 2: Corners | R U2 R' U' R U' R'            | Unlearned |              |               |
| Sune      | ![[2-Look_OLL_Sune.svg\|80]]      | 2: Corners | R U R' U R U2 R'              | Unlearned |              |               |

{ .block-language-dataview}

## 2-Look PLL

2-Look PLL (Permutation of the Last Layer) solves the cube in 2 steps after completing [[21. Application/Cube/Cube#2-Look OLL\|2-Look OLL]]. This is part of the CFOP method. Advanced: [[21. Application/Cube/Cube#PLL\|PLL]].

| Name       | Image                              | Group      | Algorithm                                  | Status    | Finger trick | Related cases |
| ---------- | ---------------------------------- | ---------- | ------------------------------------------ | --------- | ------------ | ------------- |
| Headlights | ![[2-Look_PLL_Headlights.svg\|80]] | 1: Corners | R U R' U' R' F R2 U' R' U' R U R' F'       | Unlearned |              |               |
| Diagonal   | ![[2-Look_PLL_Diagonal.svg\|80]]   | 1: Corners | F R U' R' U' R U R' F' R U R' U' R' F R F' | Unlearned |              |               |
| H Perm     | ![[2-Look_PLL_H.svg\|80]]          | 2: Edges   | M2 U M2 U2 M2 U M2                         | Unlearned |              |               |
| Z Perm     | ![[2-Look_PLL_Z.svg\|80]]          | 2: Edges   | M' U M2 U M2 U M' U2 M2                    | Unlearned |              |               |
| Ua Perm    | ![[2-Look_PLL_Ua.svg\|80]]         | 2: Edges   | R U' R U R U R U' R' U' R2                 | Unlearned |              |               |
| Ub Perm    | ![[2-Look_PLL_Ub.svg\|80]]         | 2: Edges   | R2 U R U R' U' R' U' R' U R'               | Unlearned |              |               |

{ .block-language-dataview}

## OLL

OLL (Orientation of the Last Layer) solves the top color of the last layer. This is the 3rd step of the CFOP method. Beginner: [[21. Application/Cube/Cube#2-Look OLL\|2-Look OLL]] | Advanced: Winter Variation, COLL

| Name   | Image               | Group                | Algorithm                             | Status    | Finger trick | Related cases |
| ------ | ------------------- | -------------------- | ------------------------------------- | --------- | ------------ | ------------- |
| OLL 1  | ![[OLL_1.svg\|80]]  | Dot                  | R U2 R' R' F R F' U2 R' F R F'        | Unlearned |              |               |
| OLL 2  | ![[OLL_2.svg\|80]]  | Dot                  | r U r' U2 r U2 R' U2 R U' r'          | Unlearned |              |               |
| OLL 3  | ![[OLL_3.svg\|80]]  | Dot                  | r' R2 U R' U r U2 r' U M'             | Unlearned |              |               |
| OLL 4  | ![[OLL_4.svg\|80]]  | Dot                  | M U' r U2 r' U' R U' R' M'            | Unlearned |              |               |
| OLL 5  | ![[OLL_5.svg\|80]]  | Square Shape         | l' U2 L U L' U l                      | Unlearned |              |               |
| OLL 6  | ![[OLL_6.svg\|80]]  | Square Shape         | r U2 R' U' R U' r'                    | Unlearned |              |               |
| OLL 7  | ![[OLL_7.svg\|80]]  | Small Lightning Bolt | r U R' U R U2 r'                      | Unlearned |              |               |
| OLL 8  | ![[OLL_8.svg\|80]]  | Small Lightning Bolt | l' U' L U' L' U2 l                    | Unlearned |              |               |
| OLL 9  | ![[OLL_9.svg\|80]]  | Fish Shape           | R U R' U' R' F R2 U R' U' F'          | Unlearned |              |               |
| OLL 10 | ![[OLL_10.svg\|80]] | Fish Shape           | R U R' U R' F R F' R U2 R'            | Unlearned |              |               |
| OLL 11 | ![[OLL_11.svg\|80]] | Small Lightning Bolt | r U R' U R' F R F' R U2 r'            | Unlearned |              |               |
| OLL 12 | ![[OLL_12.svg\|80]] | Small Lightning Bolt | M' R' U' R U' R' U2 R U' R r'         | Unlearned |              |               |
| OLL 13 | ![[OLL_13.svg\|80]] | Knight Move Shape    | F U R U' R2 F' R U R U' R'            | Unlearned |              |               |
| OLL 14 | ![[OLL_14.svg\|80]] | Knight Move Shape    | R' F R U R' F' R F U' F'              | Unlearned |              |               |
| OLL 15 | ![[OLL_15.svg\|80]] | Knight Move Shape    | l' U' l L' U' L U l' U l              | Unlearned |              |               |
| OLL 16 | ![[OLL_16.svg\|80]] | Knight Move Shape    | r U r' R U R' U' r U' r'              | Unlearned |              |               |
| OLL 17 | ![[OLL_17.svg\|80]] | Dot                  | F R' F' R2 r' U R U' R' U' M'         | Unlearned |              |               |
| OLL 18 | ![[OLL_18.svg\|80]] | Dot                  | r U R' U R U2 r' r' U' R U' R' U2 r   | Unlearned |              |               |
| OLL 19 | ![[OLL_19.svg\|80]] | Dot                  | r' R U R U R' U' M' R' F R F'         | Unlearned |              |               |
| OLL 20 | ![[OLL_20.svg\|80]] | Dot                  | r U R' U' M2 U R U' R' U' M'          | Unlearned |              |               |
| OLL 21 | ![[OLL_21.svg\|80]] | Cross                | R U2 R' U' R U R' U' R U' R'          | Unlearned |              |               |
| OLL 22 | ![[OLL_22.svg\|80]] | Cross                | R U2 R2 U' R2 U' R2 U2 R              | Unlearned |              |               |
| OLL 23 | ![[OLL_23.svg\|80]] | Cross                | R2 D' R U2 R' D R U2 R                | Unlearned |              |               |
| OLL 24 | ![[OLL_24.svg\|80]] | Cross                | r U R' U' r' F R F'                   | Unlearned |              |               |
| OLL 25 | ![[OLL_25.svg\|80]] | Cross                | F' r U R' U' r' F R                   | Unlearned |              |               |
| OLL 26 | ![[OLL_26.svg\|80]] | Cross                | R U2 R' U' R U' R'                    | Unlearned |              |               |
| OLL 27 | ![[OLL_27.svg\|80]] | Cross                | R U R' U R U2 R'                      | Unlearned |              |               |
| OLL 28 | ![[OLL_28.svg\|80]] | Corners Oriented     | r U R' U' r' R U R U' R'              | Unlearned |              |               |
| OLL 29 | ![[OLL_29.svg\|80]] | Awkward Shape        | R U R' U' R U' R' F' U' F R U R'      | Unlearned |              |               |
| OLL 30 | ![[OLL_30.svg\|80]] | Awkward Shape        | F R' F R2 U' R' U' R U R' F2          | Unlearned |              |               |
| OLL 31 | ![[OLL_31.svg\|80]] | P Shape              | R' U' F U R U' R' F' R                | Unlearned |              |               |
| OLL 32 | ![[OLL_32.svg\|80]] | P Shape              | L U F' U' L' U L F L'                 | Unlearned |              |               |
| OLL 33 | ![[OLL_33.svg\|80]] | T Shape              | R U R' U' R' F R F'                   | Unlearned |              |               |
| OLL 34 | ![[OLL_34.svg\|80]] | C Shape              | R U R2 U' R' F R U R U' F'            | Unlearned |              |               |
| OLL 35 | ![[OLL_35.svg\|80]] | Fish Shape           | R U2 R' R' F R F' R U2 R'             | Unlearned |              |               |
| OLL 36 | ![[OLL_36.svg\|80]] | W Shape              | L' U' L U' L' U L U L F' L' F         | Unlearned |              |               |
| OLL 37 | ![[OLL_37.svg\|80]] | Fish Shape           | F R' F' R U R U' R'                   | Unlearned |              |               |
| OLL 38 | ![[OLL_38.svg\|80]] | W Shape              | R U R' U R U' R' U' R' F R F'         | Unlearned |              |               |
| OLL 39 | ![[OLL_39.svg\|80]] | Big Lightning Bolt   | L F' L' U' L U F U' L'                | Unlearned |              |               |
| OLL 40 | ![[OLL_40.svg\|80]] | Big Lightning Bolt   | R' F R U R' U' F' U R                 | Unlearned |              |               |
| OLL 41 | ![[OLL_41.svg\|80]] | Awkward Shape        | R U R' U R U2 R' F R U R' U' F'       | Unlearned |              |               |
| OLL 42 | ![[OLL_42.svg\|80]] | Awkward Shape        | R' U' R U' R' U2 R F R U R' U' F'     | Unlearned |              |               |
| OLL 43 | ![[OLL_43.svg\|80]] | P Shape              | F' U' L' U L F                        | Unlearned |              |               |
| OLL 44 | ![[OLL_44.svg\|80]] | P Shape              | F U R U' R' F'                        | Unlearned |              |               |
| OLL 45 | ![[OLL_45.svg\|80]] | T Shape              | F R U R' U' F'                        | Unlearned |              |               |
| OLL 46 | ![[OLL_46.svg\|80]] | C Shape              | R' U' R' F R F' U R                   | Unlearned |              |               |
| OLL 47 | ![[OLL_47.svg\|80]] | Small L Shape        | R' U' R' F R F' R' F R F' U R         | Unlearned |              |               |
| OLL 48 | ![[OLL_48.svg\|80]] | Small L Shape        | F R U R' U' R U R' U' F'              | Unlearned |              |               |
| OLL 49 | ![[OLL_49.svg\|80]] | Small L Shape        | r U' r2 U r2 U r2 U' r                | Unlearned |              |               |
| OLL 50 | ![[OLL_50.svg\|80]] | Small L Shape        | r' U r2 U' r2 U' r2 U r'              | Unlearned |              |               |
| OLL 51 | ![[OLL_51.svg\|80]] | I Shape              | F U R U' R' U R U' R' F'              | Unlearned |              |               |
| OLL 52 | ![[OLL_52.svg\|80]] | I Shape              | R U R' U R U' B U' B' R'              | Unlearned |              |               |
| OLL 53 | ![[OLL_53.svg\|80]] | Small L Shape        | l' U2 L U L' U' L U L' U l            | Unlearned |              |               |
| OLL 54 | ![[OLL_54.svg\|80]] | Small L Shape        | r U2 R' U' R U R' U' R U' r'          | Unlearned |              |               |
| OLL 55 | ![[OLL_55.svg\|80]] | I Shape              | R' F R U R U' R2 F' R2 U' R' U R U R' | Unlearned |              |               |
| OLL 56 | ![[OLL_56.svg\|80]] | I Shape              | r' U' r U' R' U R U' R' U R r' U r    | Unlearned |              |               |
| OLL 57 | ![[OLL_57.svg\|80]] | Corners Oriented     | R U R' U' M' U R U' r'                | Unlearned |              |               |

{ .block-language-dataview}

## PLL

PLL (Permutation of the Last Layer) solves the cube after [[21. Application/Cube/Cube#OLL\|OLL]]. This is the last step of the CFOP method.
Note: Recognize G perms with headlights (solved corners) on the left, and find where the block is.

| Name    | Image               | Group                | Algorithm                                             | Status    | Finger trick | Related cases |
| ------- | ------------------- | -------------------- | ----------------------------------------------------- | --------- | ------------ | ------------- |
| H Perm  | ![[PLL_H.svg\|80]]  | Edges Only           | M2 U M2 U2 M2 U M2                                    | Unlearned |              |               |
| Z Perm  | ![[PLL_Z.svg\|80]]  | Edges Only           | M' U M2 U M2 U M' U2 M2                               | Unlearned |              |               |
| Ua Perm | ![[PLL_Ua.svg\|80]] | Edges Only           | M2 U M U2 M' U M2                                     | Unlearned |              |               |
| Ub Perm | ![[PLL_Ub.svg\|80]] | Edges Only           | M2 U' M U2 M' U' M2                                   | Unlearned |              |               |
| Aa Perm | ![[PLL_Aa.svg\|80]] | Adjacent Corner Swap | x L2 D2 L' U' L D2 L' U L'                            | Unlearned |              |               |
| Ab Perm | ![[PLL_Ab.svg\|80]] | Adjacent Corner Swap | x' L2 D2 L U L' D2 L U' L                             | Unlearned |              |               |
| E Perm  | ![[PLL_E.svg\|80]]  | Diagonal Corner Swap | x' L' U L D' L' U' L D L' U' L D' L' U L D            | Unlearned |              |               |
| F Perm  | ![[PLL_F.svg\|80]]  | Adjacent Corner Swap | R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R        | Unlearned |              |               |
| Ja Perm | ![[PLL_Ja.svg\|80]] | Adjacent Corner Swap | x R2 F R F' R U2 r' U r U2                            | Unlearned |              |               |
| Jb Perm | ![[PLL_Jb.svg\|80]] | Adjacent Corner Swap | R U R' F' R U R' U' R' F R2 U' R'                     | Unlearned |              |               |
| Ra Perm | ![[PLL_Ra.svg\|80]] | Adjacent Corner Swap | R U' R' U' R U R D R' U' R D' R' U2 R'                | Unlearned |              |               |
| Rb Perm | ![[PLL_Rb.svg\|80]] | Adjacent Corner Swap | R2 F R U R U' R' F' R U2 R' U2 R                      | Unlearned |              |               |
| T Perm  | ![[PLL_T.svg\|80]]  | Adjacent Corner Swap | R U R' U' R' F R2 U' R' U' R U R' F'                  | Unlearned |              |               |
| Y Perm  | ![[PLL_Y.svg\|80]]  | Diagonal Corner Swap | F R U' R' U' R U R' F' R U R' U' R' F R F'            | Unlearned |              |               |
| V Perm  | ![[PLL_V.svg\|80]]  | Diagonal Corner Swap | R' U R' U' y R' F' R2 U' R' U R' F R F                | Unlearned |              |               |
| Na Perm | ![[PLL_Na.svg\|80]] | Diagonal Corner Swap | R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R' | Unlearned |              |               |
| Nb Perm | ![[PLL_Nb.svg\|80]] | Diagonal Corner Swap | R' U R U' R' F' U' F R U R' F R' F' R U' R            | Unlearned |              |               |
| Ga Perm | ![[PLL_Ga.svg\|80]] | Adjacent Corner Swap | R2 U R' U R' U' R U' R2 U' D R' U R D'                | Unlearned |              |               |
| Gb Perm | ![[PLL_Gb.svg\|80]] | Adjacent Corner Swap | R' U' R U D' R2 U R' U R U' R U' R2 D                 | Unlearned |              |               |
| Gc Perm | ![[PLL_Gc.svg\|80]] | Adjacent Corner Swap | R2 U' R U' R U R' U R2 U D' R U' R' D                 | Unlearned |              |               |
| Gd Perm | ![[PLL_Gd.svg\|80]] | Adjacent Corner Swap | R U R' U' D R2 U' R U' R' U R' U R2 D'                | Unlearned |              |               |

{ .block-language-dataview}
