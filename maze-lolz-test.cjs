const assert=require('node:assert/strict'),C=require('./maze-lolz-engine');
assert.equal(C.catalog.length,20);assert.equal(new Set(C.catalog.map(e=>e.kind)).size,20);
let mazes=0,finishes=0,stops=0,minStretch=Infinity;
for(const n of[15,25,35,45])for(let seed=0;seed<25;seed++){
const m=C.generate(seed,n),a=C.analyze(m);assert.ok(a.connected&&a.unique);assert.equal(a.edgeCount,n*n-1);assert.ok(a.deadEnds>n);assert.ok(a.turns>n/2);assert.ok(a.pathLength>2*(n-1));minStretch=Math.min(minStretch,a.pathLength/(2*(n-1)));mazes++;
for(const e of C.catalog){const budget=e.kind==='iddfs'||e.kind==='walk'?2000:n*n*5+10,r=C.racer(e,m,seed,budget);for(let k=0;k<budget+2&&!r.state.done&&!r.state.capped&&!r.state.error;k++)r.step();assert.equal(r.state.error,'',e.name+' '+n+' '+seed);assert.ok(r.state.done||r.state.capped);if(r.state.done){assert.deepEqual(r.state.path,a.path,e.name);finishes++;}else{assert.ok(['iddfs','walk'].includes(e.kind),e.name+' unexpectedly capped');stops++;}}
}
const m=C.generate(1337,25),one=C.racer(C.catalog[0],m,1337,2000),two=C.racer(C.catalog[4],m,1337,2000);while(!one.state.done&&!one.state.capped)one.step();while(!two.state.done&&!two.state.capped)two.step();assert.equal(one.state.actions,two.state.actions);
for(const e of C.catalog){const a=C.racer(e,m,42,1000),b=C.racer(e,m,42,1000);for(let k=0;k<1001;k++){a.step();b.step();}assert.equal(a.state.actions,b.state.actions);assert.deepEqual([...a.state.visited],[...b.state.visited]);const capped=C.racer(e,m,1,1);capped.step();assert.ok(capped.state.capped&&!capped.state.done);}
console.log(`PASS: ${mazes} connected tree mazes; ${finishes} verified routes; ${stops} explicit budget stops; minimum route stretch ${minStretch.toFixed(2)}×; BFS/Dijkstra equality, deterministic runs and caps.`);
