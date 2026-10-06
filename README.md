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
