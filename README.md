# Algorithm Olympics

An interactive competition between actual algorithms: create the arena, predict a champion, and watch the race.

- **Maze Sprint:** BFS, DFS, Dijkstra, A*. Seeded arenas, weighted mud, an editable obstacle course, visited nodes and final routes.
- **Sorting Track:** Bubble, Insertion, Quicksort, Merge sort. Shuffled, nearly ordered, reverse, and repeated inputs; comparisons and writes shown live.
- **Resource Rush:** nearest-target, reward-per-distance, cluster-aware, and seeded random-walk strategies. Independent copies of a field and 180 moves to collect points.
- Pause, single step, playback speed, replay an identical arena, local prediction record, and a three-event tournament.

## Run

Open `index.html`, or run `python3 -m http.server 8000` in this directory. No install, account, API, or payment. Static files work on GitHub Pages. Validate with `node test.cjs`.

## Scoring

Maze ranks success, then lowest route cost, then fewest expanded nodes. BFS finds shortest unweighted paths; DFS does not guarantee a shortest path. Dijkstra and A* use tile-entry costs; A* uses Manhattan distance and positive costs. Sorting measures generator operations: one comparison, one swap, or one array write per step, with two writes counted per swap. This deliberately transparent cost model is not a hardware benchmark. Resource strategies are heuristics; none is advertised as optimal. Equal ranks share tournament points. Color teams group athletes across disciplines, rather than implying one algorithm participates in all three.

All simulations are implemented in `engine.js` and advance through JavaScript generators. Every competitor receives the same seeded input. No result is scripted. There are no network requests for the simulation.

## Files

`engine.js`: algorithms and deterministic generators. `app.js`: controls, rendering, standings. `style.css`: responsive interface. `test.cjs`: algorithm invariants across 40 seeds.

Pathfinding background: [Red Blob Games](https://www.redblobgames.com/pathfinding/a-star/introduction.html).

## 500 Sort Chaos Arena

Open `archive-500.html` for 500 simultaneous sorting contestants: independent algorithms and explicitly named implementation variants. This runnable roster differs from the brainstorming list; it does not claim to implement every research sorter in that list. Each uses an independent copy of the same 1–99 integer array. Power-of-two sizes support sorting networks. All generators run cooperatively on the browser thread; they are concurrent simulations, not 500 hardware threads.

Includes algorithm families: bubble, cocktail, comb, gnome, odd-even, selection, cycle, insertion, Shell, search trees (unbalanced/AVL/treap/splay), patience, quick/intro, merge, heap, counting, bucket, radix, American flag, bead, bitonic, odd-even merge network, pancake, stooge, slow, bogo, random swap, bogobogo, strand, pigeonhole and tournament. Variants identify real choices (pivot, partition, gap sequence, arity, build method, radix base, cutoff or traversal), not merely different colors.

Operations include comparisons, main-array swaps/writes and selected auxiliary work; one operation is one generator yield. Rankings are implementation-specific and are not runtime benchmarks. Completion checks order AND equality with a sorted copy of the original input. Budget-stopped racers remain unfinished. The user can inspect any racer, change data distributions, highlight a family, replay, single-step and enter fullscreen.

Run `node chaos-test.cjs` to validate all 500 contestants across 90 input configurations, including duplicate-heavy arrays. Deliberately slow algorithms may reach the explicit budget.

The complete numbered roster is in [500-SORTS.md](500-SORTS.md), with [CSV export](500-sorts.csv). The archived arena can show all 500 contestants or zoom into groups of 100; changing the view does not stop the other racers. Variants change actual engine parameters, though some may perform identical work on a particular input.

## Lucas’s Lolz Arena (current default)

`chaos.html` now races 100 meme-named custom hybrid recipes: ten grouping strategies × ten established local sorting methods, followed by balanced merging. These share components; they are not claimed to be 100 newly discovered algorithms. Each close-up explains its executable recipe and current stage. The default podium shows the best finisher from each crew; switch it to rank all contestants. Full roster: [LOLZ-100.md](LOLZ-100.md). Run `node lolz-test.cjs` to check correctness, duplicates, edge cases, determinism, unique configurations, and budget behavior. The previous 500-variant arena remains at `archive-500.html`.
