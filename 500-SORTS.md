# 500 Sorting Contestants

500 runnable sorting algorithms and explicitly named parameter variants, across 30 implementation families. This is not a claim of 500 unrelated standard algorithms. The first 100 are preserved. Changing a base, pivot, gap, arity, bucket count or cutoff changes the executable strategy; some settings can produce identical work on a particular small input.

[Open the Chaos Arena](https://lucasli1337unknown.github.io/Algorithm-Olympics/chaos.html)

| # | Contestant | Family | Parameters |
|---|---|---|---|
| 1 | Bubble | Bubble | {} |
| 2 | Bubble · early exit | Bubble | {"early":true} |
| 3 | Bubble · backward | Bubble | {"reverse":true} |
| 4 | Bubble · recursive | Bubble | {"recursive":true} |
| 5 | Cocktail shaker | Cocktail | {} |
| 6 | Cocktail · early exit | Cocktail | {"early":true} |
| 7 | Comb · shrink 1.2 | Comb | {"gap":1.2} |
| 8 | Comb · shrink 1.25 | Comb | {"gap":1.25} |
| 9 | Comb · shrink 1.3 | Comb | {"gap":1.3} |
| 10 | Comb · shrink 1.5 | Comb | {"gap":1.5} |
| 11 | Gnome | Gnome | {} |
| 12 | Gnome · smart restart | Gnome | {"smart":true} |
| 13 | Odd–even | Odd-even | {} |
| 14 | Odd–even · even first | Odd-even | {"even":true} |
| 15 | Selection | Selection | {} |
| 16 | Stable selection | Selection | {"stable":true} |
| 17 | Double selection | Selection | {"double":true} |
| 18 | Cycle | Cycle | {} |
| 19 | Insertion | Insertion | {} |
| 20 | Binary insertion | Insertion | {"binary":true} |
| 21 | Insertion · recursive | Insertion | {"recursive":true} |
| 22 | Insertion · right to left | Insertion | {"reverse":true} |
| 23 | Insertion · adjacent swaps | Insertion | {"swaps":true} |
| 24 | Shell · Shell | Shell | {"sequence":"Shell"} |
| 25 | Shell · Hibbard | Shell | {"sequence":"Hibbard"} |
| 26 | Shell · Knuth | Shell | {"sequence":"Knuth"} |
| 27 | Shell · Ciura | Shell | {"sequence":"Ciura"} |
| 28 | Shell · Tokuda | Shell | {"sequence":"Tokuda"} |
| 29 | Shell · Pratt | Shell | {"sequence":"Pratt"} |
| 30 | Shell · Sedgewick | Shell | {"sequence":"Sedgewick"} |
| 31 | Shell · Powers of 3 | Shell | {"sequence":"Powers of 3"} |
| 32 | Shell · Fibonacci | Shell | {"sequence":"Fibonacci"} |
| 33 | Shell · Odd halves | Shell | {"sequence":"Odd halves"} |
| 34 | Unbalanced tree sort | Tree | {"tree":"Unbalanced"} |
| 35 | AVL tree sort | Tree | {"tree":"AVL"} |
| 36 | Treap tree sort | Tree | {"tree":"Treap"} |
| 37 | Splay tree sort | Tree | {"tree":"Splay"} |
| 38 | Patience | Patience | {} |
| 39 | Quick · Lomuto / First | Quick | {"pivot":"First","partition":"Lomuto"} |
| 40 | Quick · Hoare / First | Quick | {"pivot":"First","partition":"Hoare"} |
| 41 | Quick · Three-way / First | Quick | {"pivot":"First","partition":"Three-way"} |
| 42 | Introsort / First | Quick | {"pivot":"First","partition":"Intro"} |
| 43 | Quick · Lomuto / Last | Quick | {"pivot":"Last","partition":"Lomuto"} |
| 44 | Quick · Hoare / Last | Quick | {"pivot":"Last","partition":"Hoare"} |
| 45 | Quick · Three-way / Last | Quick | {"pivot":"Last","partition":"Three-way"} |
| 46 | Introsort / Last | Quick | {"pivot":"Last","partition":"Intro"} |
| 47 | Quick · Lomuto / Middle | Quick | {"pivot":"Middle","partition":"Lomuto"} |
| 48 | Quick · Hoare / Middle | Quick | {"pivot":"Middle","partition":"Hoare"} |
| 49 | Quick · Three-way / Middle | Quick | {"pivot":"Middle","partition":"Three-way"} |
| 50 | Introsort / Middle | Quick | {"pivot":"Middle","partition":"Intro"} |
| 51 | Quick · Lomuto / Random | Quick | {"pivot":"Random","partition":"Lomuto"} |
| 52 | Quick · Hoare / Random | Quick | {"pivot":"Random","partition":"Hoare"} |
| 53 | Quick · Three-way / Random | Quick | {"pivot":"Random","partition":"Three-way"} |
| 54 | Introsort / Random | Quick | {"pivot":"Random","partition":"Intro"} |
| 55 | Quick · Lomuto / Median of 3 | Quick | {"pivot":"Median of 3","partition":"Lomuto"} |
| 56 | Quick · Hoare / Median of 3 | Quick | {"pivot":"Median of 3","partition":"Hoare"} |
| 57 | Quick · Three-way / Median of 3 | Quick | {"pivot":"Median of 3","partition":"Three-way"} |
| 58 | Introsort / Median of 3 | Quick | {"pivot":"Median of 3","partition":"Intro"} |
| 59 | Merge · top down | Merge | {} |
| 60 | Merge · bottom up | Merge | {"bottom":true} |
| 61 | Natural merge | Merge | {"natural":true} |
| 62 | Merge · skip ordered | Merge | {"skip":true} |
| 63 | Merge · insertion cutoff 8 | Merge | {"cutoff":8} |
| 64 | Merge · insertion cutoff 16 | Merge | {"cutoff":16} |
| 65 | Merge · three way | Merge | {"ways":3} |
| 66 | Merge · four way | Merge | {"ways":4} |
| 67 | Heap · 2-ary / Floyd build | Heap | {"arity":2} |
| 68 | Heap · 2-ary / insertion build | Heap | {"arity":2,"insert":true} |
| 69 | Heap · 3-ary / Floyd build | Heap | {"arity":3} |
| 70 | Heap · 3-ary / insertion build | Heap | {"arity":3,"insert":true} |
| 71 | Heap · 4-ary / Floyd build | Heap | {"arity":4} |
| 72 | Heap · 4-ary / insertion build | Heap | {"arity":4,"insert":true} |
| 73 | Heap · 8-ary / Floyd build | Heap | {"arity":8} |
| 74 | Heap · 8-ary / insertion build | Heap | {"arity":8,"insert":true} |
| 75 | Counting | Counting | {} |
| 76 | Bucket · 2 buckets | Bucket | {"buckets":2} |
| 77 | Bucket · 4 buckets | Bucket | {"buckets":4} |
| 78 | Bucket · 8 buckets | Bucket | {"buckets":8} |
| 79 | Bucket · 16 buckets | Bucket | {"buckets":16} |
| 80 | LSD radix · base 2 | Radix | {"base":2} |
| 81 | MSD radix · base 2 | Radix | {"base":2,"msd":true} |
| 82 | LSD radix · base 4 | Radix | {"base":4} |
| 83 | MSD radix · base 4 | Radix | {"base":4,"msd":true} |
| 84 | LSD radix · base 10 | Radix | {"base":10} |
| 85 | MSD radix · base 10 | Radix | {"base":10,"msd":true} |
| 86 | LSD radix · base 16 | Radix | {"base":16} |
| 87 | MSD radix · base 16 | Radix | {"base":16,"msd":true} |
| 88 | American flag · base 10 | American flag | {"base":10} |
| 89 | Bead | Bead | {} |
| 90 | Bitonic network | Bitonic | {} |
| 91 | Odd–even merge network | Network | {} |
| 92 | Pancake | Pancake | {} |
| 93 | Stooge | Stooge | {} |
| 94 | Slow sort | Slow | {} |
| 95 | Bogo | Bogo | {} |
| 96 | Random swap sort | Random swap | {} |
| 97 | Bogobogo | Bogobogo | {} |
| 98 | Strand | Strand | {} |
| 99 | Pigeonhole | Pigeonhole | {} |
| 100 | Tournament | Tournament | {} |
| 101 | LSD radix · base 3 | Radix | {"base":3} |
| 102 | MSD radix · base 3 | Radix | {"base":3,"msd":true} |
| 103 | LSD radix · base 5 | Radix | {"base":5} |
| 104 | MSD radix · base 5 | Radix | {"base":5,"msd":true} |
| 105 | LSD radix · base 6 | Radix | {"base":6} |
| 106 | MSD radix · base 6 | Radix | {"base":6,"msd":true} |
| 107 | LSD radix · base 7 | Radix | {"base":7} |
| 108 | MSD radix · base 7 | Radix | {"base":7,"msd":true} |
| 109 | LSD radix · base 8 | Radix | {"base":8} |
| 110 | MSD radix · base 8 | Radix | {"base":8,"msd":true} |
| 111 | LSD radix · base 9 | Radix | {"base":9} |
| 112 | MSD radix · base 9 | Radix | {"base":9,"msd":true} |
| 113 | LSD radix · base 11 | Radix | {"base":11} |
| 114 | MSD radix · base 11 | Radix | {"base":11,"msd":true} |
| 115 | LSD radix · base 12 | Radix | {"base":12} |
| 116 | MSD radix · base 12 | Radix | {"base":12,"msd":true} |
| 117 | LSD radix · base 13 | Radix | {"base":13} |
| 118 | MSD radix · base 13 | Radix | {"base":13,"msd":true} |
| 119 | LSD radix · base 14 | Radix | {"base":14} |
| 120 | MSD radix · base 14 | Radix | {"base":14,"msd":true} |
| 121 | LSD radix · base 15 | Radix | {"base":15} |
| 122 | MSD radix · base 15 | Radix | {"base":15,"msd":true} |
| 123 | LSD radix · base 17 | Radix | {"base":17} |
| 124 | MSD radix · base 17 | Radix | {"base":17,"msd":true} |
| 125 | LSD radix · base 18 | Radix | {"base":18} |
| 126 | MSD radix · base 18 | Radix | {"base":18,"msd":true} |
| 127 | LSD radix · base 19 | Radix | {"base":19} |
| 128 | MSD radix · base 19 | Radix | {"base":19,"msd":true} |
| 129 | LSD radix · base 20 | Radix | {"base":20} |
| 130 | MSD radix · base 20 | Radix | {"base":20,"msd":true} |
| 131 | LSD radix · base 21 | Radix | {"base":21} |
| 132 | MSD radix · base 21 | Radix | {"base":21,"msd":true} |
| 133 | LSD radix · base 22 | Radix | {"base":22} |
| 134 | MSD radix · base 22 | Radix | {"base":22,"msd":true} |
| 135 | LSD radix · base 23 | Radix | {"base":23} |
| 136 | MSD radix · base 23 | Radix | {"base":23,"msd":true} |
| 137 | LSD radix · base 24 | Radix | {"base":24} |
| 138 | MSD radix · base 24 | Radix | {"base":24,"msd":true} |
| 139 | LSD radix · base 25 | Radix | {"base":25} |
| 140 | MSD radix · base 25 | Radix | {"base":25,"msd":true} |
| 141 | LSD radix · base 26 | Radix | {"base":26} |
| 142 | MSD radix · base 26 | Radix | {"base":26,"msd":true} |
| 143 | LSD radix · base 27 | Radix | {"base":27} |
| 144 | MSD radix · base 27 | Radix | {"base":27,"msd":true} |
| 145 | LSD radix · base 28 | Radix | {"base":28} |
| 146 | MSD radix · base 28 | Radix | {"base":28,"msd":true} |
| 147 | LSD radix · base 29 | Radix | {"base":29} |
| 148 | MSD radix · base 29 | Radix | {"base":29,"msd":true} |
| 149 | LSD radix · base 30 | Radix | {"base":30} |
| 150 | MSD radix · base 30 | Radix | {"base":30,"msd":true} |
| 151 | LSD radix · base 31 | Radix | {"base":31} |
| 152 | MSD radix · base 31 | Radix | {"base":31,"msd":true} |
| 153 | LSD radix · base 32 | Radix | {"base":32} |
| 154 | MSD radix · base 32 | Radix | {"base":32,"msd":true} |
| 155 | LSD radix · base 33 | Radix | {"base":33} |
| 156 | MSD radix · base 33 | Radix | {"base":33,"msd":true} |
| 157 | LSD radix · base 34 | Radix | {"base":34} |
| 158 | MSD radix · base 34 | Radix | {"base":34,"msd":true} |
| 159 | LSD radix · base 35 | Radix | {"base":35} |
| 160 | MSD radix · base 35 | Radix | {"base":35,"msd":true} |
| 161 | LSD radix · base 36 | Radix | {"base":36} |
| 162 | MSD radix · base 36 | Radix | {"base":36,"msd":true} |
| 163 | LSD radix · base 37 | Radix | {"base":37} |
| 164 | MSD radix · base 37 | Radix | {"base":37,"msd":true} |
| 165 | LSD radix · base 38 | Radix | {"base":38} |
| 166 | MSD radix · base 38 | Radix | {"base":38,"msd":true} |
| 167 | LSD radix · base 39 | Radix | {"base":39} |
| 168 | MSD radix · base 39 | Radix | {"base":39,"msd":true} |
| 169 | LSD radix · base 40 | Radix | {"base":40} |
| 170 | MSD radix · base 40 | Radix | {"base":40,"msd":true} |
| 171 | LSD radix · base 41 | Radix | {"base":41} |
| 172 | MSD radix · base 41 | Radix | {"base":41,"msd":true} |
| 173 | LSD radix · base 42 | Radix | {"base":42} |
| 174 | MSD radix · base 42 | Radix | {"base":42,"msd":true} |
| 175 | LSD radix · base 43 | Radix | {"base":43} |
| 176 | MSD radix · base 43 | Radix | {"base":43,"msd":true} |
| 177 | LSD radix · base 44 | Radix | {"base":44} |
| 178 | MSD radix · base 44 | Radix | {"base":44,"msd":true} |
| 179 | LSD radix · base 45 | Radix | {"base":45} |
| 180 | MSD radix · base 45 | Radix | {"base":45,"msd":true} |
| 181 | LSD radix · base 46 | Radix | {"base":46} |
| 182 | MSD radix · base 46 | Radix | {"base":46,"msd":true} |
| 183 | LSD radix · base 47 | Radix | {"base":47} |
| 184 | MSD radix · base 47 | Radix | {"base":47,"msd":true} |
| 185 | LSD radix · base 48 | Radix | {"base":48} |
| 186 | MSD radix · base 48 | Radix | {"base":48,"msd":true} |
| 187 | LSD radix · base 49 | Radix | {"base":49} |
| 188 | MSD radix · base 49 | Radix | {"base":49,"msd":true} |
| 189 | LSD radix · base 50 | Radix | {"base":50} |
| 190 | MSD radix · base 50 | Radix | {"base":50,"msd":true} |
| 191 | LSD radix · base 51 | Radix | {"base":51} |
| 192 | MSD radix · base 51 | Radix | {"base":51,"msd":true} |
| 193 | LSD radix · base 52 | Radix | {"base":52} |
| 194 | MSD radix · base 52 | Radix | {"base":52,"msd":true} |
| 195 | LSD radix · base 53 | Radix | {"base":53} |
| 196 | MSD radix · base 53 | Radix | {"base":53,"msd":true} |
| 197 | LSD radix · base 54 | Radix | {"base":54} |
| 198 | MSD radix · base 54 | Radix | {"base":54,"msd":true} |
| 199 | LSD radix · base 55 | Radix | {"base":55} |
| 200 | MSD radix · base 55 | Radix | {"base":55,"msd":true} |
| 201 | LSD radix · base 56 | Radix | {"base":56} |
| 202 | MSD radix · base 56 | Radix | {"base":56,"msd":true} |
| 203 | LSD radix · base 57 | Radix | {"base":57} |
| 204 | MSD radix · base 57 | Radix | {"base":57,"msd":true} |
| 205 | LSD radix · base 58 | Radix | {"base":58} |
| 206 | MSD radix · base 58 | Radix | {"base":58,"msd":true} |
| 207 | LSD radix · base 59 | Radix | {"base":59} |
| 208 | MSD radix · base 59 | Radix | {"base":59,"msd":true} |
| 209 | LSD radix · base 60 | Radix | {"base":60} |
| 210 | MSD radix · base 60 | Radix | {"base":60,"msd":true} |
| 211 | LSD radix · base 61 | Radix | {"base":61} |
| 212 | MSD radix · base 61 | Radix | {"base":61,"msd":true} |
| 213 | LSD radix · base 62 | Radix | {"base":62} |
| 214 | MSD radix · base 62 | Radix | {"base":62,"msd":true} |
| 215 | LSD radix · base 63 | Radix | {"base":63} |
| 216 | MSD radix · base 63 | Radix | {"base":63,"msd":true} |
| 217 | LSD radix · base 64 | Radix | {"base":64} |
| 218 | MSD radix · base 64 | Radix | {"base":64,"msd":true} |
| 219 | American flag · base 2 | American flag | {"base":2} |
| 220 | American flag · base 3 | American flag | {"base":3} |
| 221 | American flag · base 4 | American flag | {"base":4} |
| 222 | American flag · base 5 | American flag | {"base":5} |
| 223 | American flag · base 6 | American flag | {"base":6} |
| 224 | American flag · base 7 | American flag | {"base":7} |
| 225 | American flag · base 8 | American flag | {"base":8} |
| 226 | American flag · base 9 | American flag | {"base":9} |
| 227 | American flag · base 11 | American flag | {"base":11} |
| 228 | American flag · base 12 | American flag | {"base":12} |
| 229 | American flag · base 13 | American flag | {"base":13} |
| 230 | American flag · base 14 | American flag | {"base":14} |
| 231 | American flag · base 15 | American flag | {"base":15} |
| 232 | American flag · base 16 | American flag | {"base":16} |
| 233 | American flag · base 17 | American flag | {"base":17} |
| 234 | American flag · base 18 | American flag | {"base":18} |
| 235 | American flag · base 19 | American flag | {"base":19} |
| 236 | American flag · base 20 | American flag | {"base":20} |
| 237 | American flag · base 21 | American flag | {"base":21} |
| 238 | American flag · base 22 | American flag | {"base":22} |
| 239 | American flag · base 23 | American flag | {"base":23} |
| 240 | American flag · base 24 | American flag | {"base":24} |
| 241 | American flag · base 25 | American flag | {"base":25} |
| 242 | American flag · base 26 | American flag | {"base":26} |
| 243 | American flag · base 27 | American flag | {"base":27} |
| 244 | American flag · base 28 | American flag | {"base":28} |
| 245 | American flag · base 29 | American flag | {"base":29} |
| 246 | American flag · base 30 | American flag | {"base":30} |
| 247 | American flag · base 31 | American flag | {"base":31} |
| 248 | American flag · base 32 | American flag | {"base":32} |
| 249 | American flag · base 33 | American flag | {"base":33} |
| 250 | American flag · base 34 | American flag | {"base":34} |
| 251 | American flag · base 35 | American flag | {"base":35} |
| 252 | American flag · base 36 | American flag | {"base":36} |
| 253 | American flag · base 37 | American flag | {"base":37} |
| 254 | American flag · base 38 | American flag | {"base":38} |
| 255 | American flag · base 39 | American flag | {"base":39} |
| 256 | American flag · base 40 | American flag | {"base":40} |
| 257 | American flag · base 41 | American flag | {"base":41} |
| 258 | American flag · base 42 | American flag | {"base":42} |
| 259 | American flag · base 43 | American flag | {"base":43} |
| 260 | American flag · base 44 | American flag | {"base":44} |
| 261 | American flag · base 45 | American flag | {"base":45} |
| 262 | American flag · base 46 | American flag | {"base":46} |
| 263 | American flag · base 47 | American flag | {"base":47} |
| 264 | American flag · base 48 | American flag | {"base":48} |
| 265 | American flag · base 49 | American flag | {"base":49} |
| 266 | American flag · base 50 | American flag | {"base":50} |
| 267 | American flag · base 51 | American flag | {"base":51} |
| 268 | American flag · base 52 | American flag | {"base":52} |
| 269 | American flag · base 53 | American flag | {"base":53} |
| 270 | American flag · base 54 | American flag | {"base":54} |
| 271 | American flag · base 55 | American flag | {"base":55} |
| 272 | American flag · base 56 | American flag | {"base":56} |
| 273 | American flag · base 57 | American flag | {"base":57} |
| 274 | American flag · base 58 | American flag | {"base":58} |
| 275 | American flag · base 59 | American flag | {"base":59} |
| 276 | American flag · base 60 | American flag | {"base":60} |
| 277 | American flag · base 61 | American flag | {"base":61} |
| 278 | American flag · base 62 | American flag | {"base":62} |
| 279 | American flag · base 63 | American flag | {"base":63} |
| 280 | American flag · base 64 | American flag | {"base":64} |
| 281 | Heap · 5-ary / Floyd build | Heap | {"arity":5} |
| 282 | Heap · 5-ary / insertion build | Heap | {"arity":5,"insert":true} |
| 283 | Heap · 6-ary / Floyd build | Heap | {"arity":6} |
| 284 | Heap · 6-ary / insertion build | Heap | {"arity":6,"insert":true} |
| 285 | Heap · 7-ary / Floyd build | Heap | {"arity":7} |
| 286 | Heap · 7-ary / insertion build | Heap | {"arity":7,"insert":true} |
| 287 | Heap · 9-ary / Floyd build | Heap | {"arity":9} |
| 288 | Heap · 9-ary / insertion build | Heap | {"arity":9,"insert":true} |
| 289 | Heap · 10-ary / Floyd build | Heap | {"arity":10} |
| 290 | Heap · 10-ary / insertion build | Heap | {"arity":10,"insert":true} |
| 291 | Heap · 11-ary / Floyd build | Heap | {"arity":11} |
| 292 | Heap · 11-ary / insertion build | Heap | {"arity":11,"insert":true} |
| 293 | Heap · 12-ary / Floyd build | Heap | {"arity":12} |
| 294 | Heap · 12-ary / insertion build | Heap | {"arity":12,"insert":true} |
| 295 | Heap · 13-ary / Floyd build | Heap | {"arity":13} |
| 296 | Heap · 13-ary / insertion build | Heap | {"arity":13,"insert":true} |
| 297 | Heap · 14-ary / Floyd build | Heap | {"arity":14} |
| 298 | Heap · 14-ary / insertion build | Heap | {"arity":14,"insert":true} |
| 299 | Heap · 15-ary / Floyd build | Heap | {"arity":15} |
| 300 | Heap · 15-ary / insertion build | Heap | {"arity":15,"insert":true} |
| 301 | Heap · 16-ary / Floyd build | Heap | {"arity":16} |
| 302 | Heap · 16-ary / insertion build | Heap | {"arity":16,"insert":true} |
| 303 | Heap · 17-ary / Floyd build | Heap | {"arity":17} |
| 304 | Heap · 17-ary / insertion build | Heap | {"arity":17,"insert":true} |
| 305 | Heap · 18-ary / Floyd build | Heap | {"arity":18} |
| 306 | Heap · 18-ary / insertion build | Heap | {"arity":18,"insert":true} |
| 307 | Heap · 19-ary / Floyd build | Heap | {"arity":19} |
| 308 | Heap · 19-ary / insertion build | Heap | {"arity":19,"insert":true} |
| 309 | Heap · 20-ary / Floyd build | Heap | {"arity":20} |
| 310 | Heap · 20-ary / insertion build | Heap | {"arity":20,"insert":true} |
| 311 | Heap · 21-ary / Floyd build | Heap | {"arity":21} |
| 312 | Heap · 21-ary / insertion build | Heap | {"arity":21,"insert":true} |
| 313 | Heap · 22-ary / Floyd build | Heap | {"arity":22} |
| 314 | Heap · 22-ary / insertion build | Heap | {"arity":22,"insert":true} |
| 315 | Heap · 23-ary / Floyd build | Heap | {"arity":23} |
| 316 | Heap · 23-ary / insertion build | Heap | {"arity":23,"insert":true} |
| 317 | Heap · 24-ary / Floyd build | Heap | {"arity":24} |
| 318 | Heap · 24-ary / insertion build | Heap | {"arity":24,"insert":true} |
| 319 | Heap · 25-ary / Floyd build | Heap | {"arity":25} |
| 320 | Heap · 25-ary / insertion build | Heap | {"arity":25,"insert":true} |
| 321 | Heap · 26-ary / Floyd build | Heap | {"arity":26} |
| 322 | Heap · 26-ary / insertion build | Heap | {"arity":26,"insert":true} |
| 323 | Heap · 27-ary / Floyd build | Heap | {"arity":27} |
| 324 | Heap · 27-ary / insertion build | Heap | {"arity":27,"insert":true} |
| 325 | Heap · 28-ary / Floyd build | Heap | {"arity":28} |
| 326 | Heap · 28-ary / insertion build | Heap | {"arity":28,"insert":true} |
| 327 | Heap · 29-ary / Floyd build | Heap | {"arity":29} |
| 328 | Heap · 29-ary / insertion build | Heap | {"arity":29,"insert":true} |
| 329 | Heap · 30-ary / Floyd build | Heap | {"arity":30} |
| 330 | Heap · 30-ary / insertion build | Heap | {"arity":30,"insert":true} |
| 331 | Heap · 31-ary / Floyd build | Heap | {"arity":31} |
| 332 | Heap · 31-ary / insertion build | Heap | {"arity":31,"insert":true} |
| 333 | Heap · 32-ary / Floyd build | Heap | {"arity":32} |
| 334 | Heap · 32-ary / insertion build | Heap | {"arity":32,"insert":true} |
| 335 | Bucket · 3 buckets | Bucket | {"buckets":3} |
| 336 | Bucket · 5 buckets | Bucket | {"buckets":5} |
| 337 | Bucket · 6 buckets | Bucket | {"buckets":6} |
| 338 | Bucket · 7 buckets | Bucket | {"buckets":7} |
| 339 | Bucket · 9 buckets | Bucket | {"buckets":9} |
| 340 | Bucket · 10 buckets | Bucket | {"buckets":10} |
| 341 | Bucket · 11 buckets | Bucket | {"buckets":11} |
| 342 | Bucket · 12 buckets | Bucket | {"buckets":12} |
| 343 | Bucket · 13 buckets | Bucket | {"buckets":13} |
| 344 | Bucket · 14 buckets | Bucket | {"buckets":14} |
| 345 | Bucket · 15 buckets | Bucket | {"buckets":15} |
| 346 | Bucket · 17 buckets | Bucket | {"buckets":17} |
| 347 | Bucket · 18 buckets | Bucket | {"buckets":18} |
| 348 | Bucket · 19 buckets | Bucket | {"buckets":19} |
| 349 | Bucket · 20 buckets | Bucket | {"buckets":20} |
| 350 | Bucket · 21 buckets | Bucket | {"buckets":21} |
| 351 | Bucket · 22 buckets | Bucket | {"buckets":22} |
| 352 | Bucket · 23 buckets | Bucket | {"buckets":23} |
| 353 | Bucket · 24 buckets | Bucket | {"buckets":24} |
| 354 | Bucket · 25 buckets | Bucket | {"buckets":25} |
| 355 | Bucket · 26 buckets | Bucket | {"buckets":26} |
| 356 | Bucket · 27 buckets | Bucket | {"buckets":27} |
| 357 | Bucket · 28 buckets | Bucket | {"buckets":28} |
| 358 | Bucket · 29 buckets | Bucket | {"buckets":29} |
| 359 | Bucket · 30 buckets | Bucket | {"buckets":30} |
| 360 | Bucket · 31 buckets | Bucket | {"buckets":31} |
| 361 | Bucket · 32 buckets | Bucket | {"buckets":32} |
| 362 | Bucket · 33 buckets | Bucket | {"buckets":33} |
| 363 | Bucket · 34 buckets | Bucket | {"buckets":34} |
| 364 | Bucket · 35 buckets | Bucket | {"buckets":35} |
| 365 | Bucket · 36 buckets | Bucket | {"buckets":36} |
| 366 | Bucket · 37 buckets | Bucket | {"buckets":37} |
| 367 | Bucket · 38 buckets | Bucket | {"buckets":38} |
| 368 | Bucket · 39 buckets | Bucket | {"buckets":39} |
| 369 | Bucket · 40 buckets | Bucket | {"buckets":40} |
| 370 | Bucket · 41 buckets | Bucket | {"buckets":41} |
| 371 | Bucket · 42 buckets | Bucket | {"buckets":42} |
| 372 | Bucket · 43 buckets | Bucket | {"buckets":43} |
| 373 | Bucket · 44 buckets | Bucket | {"buckets":44} |
| 374 | Bucket · 45 buckets | Bucket | {"buckets":45} |
| 375 | Bucket · 46 buckets | Bucket | {"buckets":46} |
| 376 | Bucket · 47 buckets | Bucket | {"buckets":47} |
| 377 | Bucket · 48 buckets | Bucket | {"buckets":48} |
| 378 | Bucket · 49 buckets | Bucket | {"buckets":49} |
| 379 | Bucket · 50 buckets | Bucket | {"buckets":50} |
| 380 | Bucket · 51 buckets | Bucket | {"buckets":51} |
| 381 | Bucket · 52 buckets | Bucket | {"buckets":52} |
| 382 | Bucket · 53 buckets | Bucket | {"buckets":53} |
| 383 | Bucket · 54 buckets | Bucket | {"buckets":54} |
| 384 | Bucket · 55 buckets | Bucket | {"buckets":55} |
| 385 | Bucket · 56 buckets | Bucket | {"buckets":56} |
| 386 | Bucket · 57 buckets | Bucket | {"buckets":57} |
| 387 | Bucket · 58 buckets | Bucket | {"buckets":58} |
| 388 | Bucket · 59 buckets | Bucket | {"buckets":59} |
| 389 | Bucket · 60 buckets | Bucket | {"buckets":60} |
| 390 | Bucket · 61 buckets | Bucket | {"buckets":61} |
| 391 | Bucket · 62 buckets | Bucket | {"buckets":62} |
| 392 | Bucket · 63 buckets | Bucket | {"buckets":63} |
| 393 | Bucket · 64 buckets | Bucket | {"buckets":64} |
| 394 | Merge · 5 way | Merge | {"ways":5} |
| 395 | Merge · 6 way | Merge | {"ways":6} |
| 396 | Merge · 7 way | Merge | {"ways":7} |
| 397 | Merge · 8 way | Merge | {"ways":8} |
| 398 | Merge · 9 way | Merge | {"ways":9} |
| 399 | Merge · 10 way | Merge | {"ways":10} |
| 400 | Merge · 11 way | Merge | {"ways":11} |
| 401 | Merge · 12 way | Merge | {"ways":12} |
| 402 | Merge · 13 way | Merge | {"ways":13} |
| 403 | Merge · 14 way | Merge | {"ways":14} |
| 404 | Merge · 15 way | Merge | {"ways":15} |
| 405 | Merge · 16 way | Merge | {"ways":16} |
| 406 | Merge · 17 way | Merge | {"ways":17} |
| 407 | Merge · 18 way | Merge | {"ways":18} |
| 408 | Merge · 19 way | Merge | {"ways":19} |
| 409 | Merge · 20 way | Merge | {"ways":20} |
| 410 | Merge · insertion cutoff 2 | Merge | {"cutoff":2} |
| 411 | Merge · insertion cutoff 3 | Merge | {"cutoff":3} |
| 412 | Merge · insertion cutoff 4 | Merge | {"cutoff":4} |
| 413 | Merge · insertion cutoff 5 | Merge | {"cutoff":5} |
| 414 | Merge · insertion cutoff 6 | Merge | {"cutoff":6} |
| 415 | Merge · insertion cutoff 7 | Merge | {"cutoff":7} |
| 416 | Merge · insertion cutoff 9 | Merge | {"cutoff":9} |
| 417 | Merge · insertion cutoff 10 | Merge | {"cutoff":10} |
| 418 | Merge · insertion cutoff 11 | Merge | {"cutoff":11} |
| 419 | Merge · insertion cutoff 12 | Merge | {"cutoff":12} |
| 420 | Merge · insertion cutoff 13 | Merge | {"cutoff":13} |
| 421 | Merge · insertion cutoff 14 | Merge | {"cutoff":14} |
| 422 | Merge · insertion cutoff 15 | Merge | {"cutoff":15} |
| 423 | Merge · insertion cutoff 17 | Merge | {"cutoff":17} |
| 424 | Merge · insertion cutoff 18 | Merge | {"cutoff":18} |
| 425 | Merge · insertion cutoff 19 | Merge | {"cutoff":19} |
| 426 | Merge · insertion cutoff 20 | Merge | {"cutoff":20} |
| 427 | Merge · insertion cutoff 21 | Merge | {"cutoff":21} |
| 428 | Merge · insertion cutoff 22 | Merge | {"cutoff":22} |
| 429 | Merge · insertion cutoff 23 | Merge | {"cutoff":23} |
| 430 | Merge · insertion cutoff 24 | Merge | {"cutoff":24} |
| 431 | Merge · insertion cutoff 25 | Merge | {"cutoff":25} |
| 432 | Merge · insertion cutoff 26 | Merge | {"cutoff":26} |
| 433 | Merge · insertion cutoff 27 | Merge | {"cutoff":27} |
| 434 | Merge · insertion cutoff 28 | Merge | {"cutoff":28} |
| 435 | Merge · insertion cutoff 29 | Merge | {"cutoff":29} |
| 436 | Merge · insertion cutoff 30 | Merge | {"cutoff":30} |
| 437 | Merge · insertion cutoff 31 | Merge | {"cutoff":31} |
| 438 | Merge · insertion cutoff 32 | Merge | {"cutoff":32} |
| 439 | Introsort / First / cutoff 2 | Quick | {"pivot":"First","partition":"Intro","cutoff":2} |
| 440 | Introsort / First / cutoff 4 | Quick | {"pivot":"First","partition":"Intro","cutoff":4} |
| 441 | Introsort / First / cutoff 8 | Quick | {"pivot":"First","partition":"Intro","cutoff":8} |
| 442 | Introsort / First / cutoff 16 | Quick | {"pivot":"First","partition":"Intro","cutoff":16} |
| 443 | Introsort / First / cutoff 24 | Quick | {"pivot":"First","partition":"Intro","cutoff":24} |
| 444 | Introsort / First / cutoff 32 | Quick | {"pivot":"First","partition":"Intro","cutoff":32} |
| 445 | Introsort / First / cutoff 48 | Quick | {"pivot":"First","partition":"Intro","cutoff":48} |
| 446 | Introsort / First / cutoff 64 | Quick | {"pivot":"First","partition":"Intro","cutoff":64} |
| 447 | Introsort / Last / cutoff 2 | Quick | {"pivot":"Last","partition":"Intro","cutoff":2} |
| 448 | Introsort / Last / cutoff 4 | Quick | {"pivot":"Last","partition":"Intro","cutoff":4} |
| 449 | Introsort / Last / cutoff 8 | Quick | {"pivot":"Last","partition":"Intro","cutoff":8} |
| 450 | Introsort / Last / cutoff 16 | Quick | {"pivot":"Last","partition":"Intro","cutoff":16} |
| 451 | Introsort / Last / cutoff 24 | Quick | {"pivot":"Last","partition":"Intro","cutoff":24} |
| 452 | Introsort / Last / cutoff 32 | Quick | {"pivot":"Last","partition":"Intro","cutoff":32} |
| 453 | Introsort / Last / cutoff 48 | Quick | {"pivot":"Last","partition":"Intro","cutoff":48} |
| 454 | Introsort / Last / cutoff 64 | Quick | {"pivot":"Last","partition":"Intro","cutoff":64} |
| 455 | Introsort / Middle / cutoff 2 | Quick | {"pivot":"Middle","partition":"Intro","cutoff":2} |
| 456 | Introsort / Middle / cutoff 4 | Quick | {"pivot":"Middle","partition":"Intro","cutoff":4} |
| 457 | Introsort / Middle / cutoff 8 | Quick | {"pivot":"Middle","partition":"Intro","cutoff":8} |
| 458 | Introsort / Middle / cutoff 16 | Quick | {"pivot":"Middle","partition":"Intro","cutoff":16} |
| 459 | Introsort / Middle / cutoff 24 | Quick | {"pivot":"Middle","partition":"Intro","cutoff":24} |
| 460 | Introsort / Middle / cutoff 32 | Quick | {"pivot":"Middle","partition":"Intro","cutoff":32} |
| 461 | Introsort / Middle / cutoff 48 | Quick | {"pivot":"Middle","partition":"Intro","cutoff":48} |
| 462 | Introsort / Middle / cutoff 64 | Quick | {"pivot":"Middle","partition":"Intro","cutoff":64} |
| 463 | Introsort / Random / cutoff 2 | Quick | {"pivot":"Random","partition":"Intro","cutoff":2} |
| 464 | Introsort / Random / cutoff 4 | Quick | {"pivot":"Random","partition":"Intro","cutoff":4} |
| 465 | Introsort / Random / cutoff 8 | Quick | {"pivot":"Random","partition":"Intro","cutoff":8} |
| 466 | Introsort / Random / cutoff 16 | Quick | {"pivot":"Random","partition":"Intro","cutoff":16} |
| 467 | Introsort / Random / cutoff 24 | Quick | {"pivot":"Random","partition":"Intro","cutoff":24} |
| 468 | Introsort / Random / cutoff 32 | Quick | {"pivot":"Random","partition":"Intro","cutoff":32} |
| 469 | Introsort / Random / cutoff 48 | Quick | {"pivot":"Random","partition":"Intro","cutoff":48} |
| 470 | Introsort / Random / cutoff 64 | Quick | {"pivot":"Random","partition":"Intro","cutoff":64} |
| 471 | Introsort / Median of 3 / cutoff 2 | Quick | {"pivot":"Median of 3","partition":"Intro","cutoff":2} |
| 472 | Introsort / Median of 3 / cutoff 4 | Quick | {"pivot":"Median of 3","partition":"Intro","cutoff":4} |
| 473 | Introsort / Median of 3 / cutoff 8 | Quick | {"pivot":"Median of 3","partition":"Intro","cutoff":8} |
| 474 | Introsort / Median of 3 / cutoff 16 | Quick | {"pivot":"Median of 3","partition":"Intro","cutoff":16} |
| 475 | Introsort / Median of 3 / cutoff 24 | Quick | {"pivot":"Median of 3","partition":"Intro","cutoff":24} |
| 476 | Introsort / Median of 3 / cutoff 32 | Quick | {"pivot":"Median of 3","partition":"Intro","cutoff":32} |
| 477 | Introsort / Median of 3 / cutoff 48 | Quick | {"pivot":"Median of 3","partition":"Intro","cutoff":48} |
| 478 | Introsort / Median of 3 / cutoff 64 | Quick | {"pivot":"Median of 3","partition":"Intro","cutoff":64} |
| 479 | Comb · shrink 1.1 | Comb | {"gap":1.1} |
| 480 | Comb · shrink 1.15 | Comb | {"gap":1.15} |
| 481 | Comb · shrink 1.35 | Comb | {"gap":1.35} |
| 482 | Comb · shrink 1.4 | Comb | {"gap":1.4} |
| 483 | Comb · shrink 1.45 | Comb | {"gap":1.45} |
| 484 | Comb · shrink 1.55 | Comb | {"gap":1.55} |
| 485 | Comb · shrink 1.6 | Comb | {"gap":1.6} |
| 486 | Comb · shrink 1.65 | Comb | {"gap":1.65} |
| 487 | Comb · shrink 1.7 | Comb | {"gap":1.7} |
| 488 | Comb · shrink 1.75 | Comb | {"gap":1.75} |
| 489 | Comb · shrink 1.8 | Comb | {"gap":1.8} |
| 490 | Comb · shrink 1.85 | Comb | {"gap":1.85} |
| 491 | Comb · shrink 1.9 | Comb | {"gap":1.9} |
| 492 | Comb · shrink 1.95 | Comb | {"gap":1.95} |
| 493 | Comb · shrink 2 | Comb | {"gap":2} |
| 494 | Comb · shrink 2.1 | Comb | {"gap":2.1} |
| 495 | Comb · shrink 2.2 | Comb | {"gap":2.2} |
| 496 | Comb · shrink 2.3 | Comb | {"gap":2.3} |
| 497 | Comb · shrink 2.4 | Comb | {"gap":2.4} |
| 498 | Comb · shrink 2.5 | Comb | {"gap":2.5} |
| 499 | Comb · shrink 2.6 | Comb | {"gap":2.6} |
| 500 | Comb · shrink 2.7 | Comb | {"gap":2.7} |
