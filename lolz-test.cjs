const assert=require('node:assert/strict'),C=require('./lolz-engine');
assert.equal(C.catalog.length,100);assert.equal(new Set(C.catalog.map(e=>e.name)).size,100);assert.equal(new Set(C.catalog.map(e=>JSON.stringify(e.config))).size,100);
let cases=0;
function finish(e,input,budget=500000){const r=C.racer(e,input,1337,budget);for(let i=0;i<=budget+1&&!r.state.done&&!r.state.capped&&!r.state.error;i++)r.step();assert.equal(r.state.error,'',e.name);return r;}
for(const size of [8,16,32,64,128])for(const pattern of ['random','reverse','sorted','almost','duplicates','mountain'])for(const seed of [1,42,1337]){const input=C.input(seed,size,pattern),expected=input.slice().sort((a,b)=>a-b);for(const e of C.catalog){const r=finish(e,input);assert.ok(r.state.done&&!r.state.capped,e.name);assert.deepEqual(r.state.a,expected,e.name);cases++;}}
for(const input of [[],[7],[2,1],[4,4,4,4],[-5,0,3,-5,2,0],Array.from({length:33},(_,i)=>33-i)])for(const e of C.catalog){const r=finish(e,input);assert.ok(r.state.done);assert.deepEqual(r.state.a,input.slice().sort((a,b)=>a-b));cases++;}
for(const e of C.catalog){const a=finish(e,[9,2,7,1,7,3]),b=finish(e,[9,2,7,1,7,3]);assert.equal(a.state.ops,b.state.ops);const capped=finish(e,[9,2,7,1],1);assert.ok(capped.state.capped&&!capped.state.done);}
console.log(`PASS: ${cases} verified full-array results; 100 unique names/recipes; deterministic runs and honest budget stops.`);
