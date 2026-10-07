'use strict';
const MazeLolz=(()=>{
function rng(seed){let x=seed>>>0;return()=>{x+=0x6D2B79F5;let t=Math.imul(x^x>>>15,x|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
const catalog=[
['BFS','Classic','planner','bfs','Explore the oldest frontier cell first: breadth-first search.'],
['DFS','Classic','planner','dfs','Explore the newest frontier cell first, going deep before returning to other branches.'],
['A*','Classic','planner','astar','Choose minimum g + Manhattan h, breaking ties toward the goal. g is travelled path length, h estimates remaining distance.'],
['Greedy best-first','Classic','planner','greedy','Choose minimum Manhattan distance to the exit, ignoring distance already travelled.'],
['Dijkstra','Classic','planner','dijkstra','Choose minimum travelled distance g. Every passage costs one here, so its ordering matches BFS.'],
['Bidirectional BFS','Classic','planner','bidir','Breadth-first searches from entrance and exit, expanding the smaller frontier until they meet.'],
['Random frontier','Classic','planner','random','Choose a random discovered frontier cell, with memory to avoid expanding cells twice.'],
['Iterative deepening DFS','Classic','planner','iddfs','Repeat depth-limited DFS with limits 0, 1, 2…; repeated visits count as actions.'],
['Random walk','Classic','walker','walk','Take a random legal neighboring passage each move. Can revisit cells and hit the budget.'],
['Right-hand rule','Classic','walker','wall','Try right, forward, left, then backward relative to the current heading. This maze has a tree of passages.'],
['Fork Courtroom','Lucas Lolz','planner','fork','Alternate between the frontier cell nearest the exit and the one farthest away. The prosecution and defence take turns.'],
['Keyboard Heatwave','Lucas Lolz','planner','heat','Every fourth expansion visits the oldest frontier cell; other expansions prefer the deepest discovered path. Deep dives with scheduled rescue checks.'],
['Bro Council','Lucas Lolz','planner','council','Prioritize frontier cells whose local open neighbors have the lowest average distance to the exit. Break ties toward deeper paths.'],
['不服气 Navigator','Lucas Lolz','planner','stubborn','Score g + h + 3 × path turns. Prefer routes that turn less, even when that misses useful branches.'],
['Pigeon Hotel','Lucas Lolz','planner','hotel','Put frontier cells in four geographic quadrant queues. Cycle between quadrants, taking the oldest guest in each.'],
['Sock Custody Battle','Lucas Lolz','planner','sock','Alternate even-coordinate and odd-coordinate frontier groups; choose the nearest-to-exit cell within the active group.'],
['Main Character Arc','Lucas Lolz','planner','star','Stay with one entrance branch until its frontier empties. Within that branch, choose the closest cell to the exit. Then audition another branch.'],
['Goblin Immigration','Lucas Lolz','planner','goblin','Sample up to three frontier candidates randomly; choose the one with most currently undiscovered open neighbors.'],
['Mood Swing GPS','Lucas Lolz','planner','mood','Switch between FIFO breadth-first and LIFO depth-first every eight expansions.'],
['Forkidy Flippidy','Lucas Lolz','walker','flip','At each move prefer the least-used directed passage. Alternate left-turn and right-turn preferences to break ties.']
].map(([name,team,mode,kind,note],id)=>({id,name,team,mode,kind,note}));
function adjacent(n,u){const x=u%n,y=Math.floor(u/n);return[[x+1,y],[x,y+1],[x-1,y],[x,y-1]].filter(([x,y])=>x>=0&&y>=0&&x<n&&y<n).map(([x,y])=>y*n+x);}
function direction(n,a,b){return b===a+1?0:b===a+n?1:b===a-1?2:3;}
function route(parent,end){const p=[];for(let u=end;u!==-1;u=parent[u]){p.push(u);if(p.length>parent.length)throw Error('Parent cycle');}return p.reverse();}
function analyze(m){const parent=Array(m.n*m.n).fill(-1),q=[m.start],seen=new Set(q);for(let k=0;k<q.length;k++)for(const v of m.edges[q[k]])if(!seen.has(v)){seen.add(v);parent[v]=q[k];q.push(v);}const path=route(parent,m.goal);let turns=0;for(let k=2;k<path.length;k++)if(direction(m.n,path[k-2],path[k-1])!==direction(m.n,path[k-1],path[k]))turns++;const deadEnds=m.edges.filter(e=>e.length===1).length,edgeCount=m.edges.reduce((s,e)=>s+e.length,0)/2;return{path,pathLength:path.length-1,turns,deadEnds,connected:seen.size===m.n*m.n,edgeCount,unique:seen.size===m.n*m.n&&edgeCount===m.n*m.n-1};}
function generate(seed,n=25){
if(!Number.isInteger(n)||n<5||n>45)throw Error('Maze size must be 5–45 logical cells per side');
let best=null,score=-Infinity;
for(let attempt=0;attempt<16;attempt++){const r=rng((seed+Math.imul(attempt+1,2654435761))>>>0),edges=Array.from({length:n*n},()=>[]),seen=new Set([0]),active=[0];
while(active.length){const at=r()<(attempt%2?.97:1)?active.length-1:Math.floor(r()*active.length),u=active[at],options=adjacent(n,u).filter(v=>!seen.has(v));if(!options.length){active.splice(at,1);continue;}const v=options[Math.floor(r()*options.length)];edges[u].push(v);edges[v].push(u);seen.add(v);active.push(v);}
const m={n,seed:seed>>>0,start:0,goal:n*n-1,edges},stats=analyze(m),s=stats.pathLength+stats.turns*.7+stats.deadEnds*.2;if(s>score){best={...m,stats};score=s;}}
return best;
}
function racer(entry,m,seed=m.seed,budget=20000){
const n=m.n,N=n*n,r=rng((seed+Math.imul(entry.id+1,7919))>>>0),s={entry,actions:0,visited:new Set(),frontier:new Set(),parent:Array(N).fill(-1),path:[],position:m.start,done:false,capped:false,error:'',phase:'Ready',visits:new Uint32Array(N)};
const h=u=>Math.abs(u%n-m.goal%n)+Math.abs(Math.floor(u/n)-Math.floor(m.goal/n));
function* visit(u,phase){s.position=u;s.visited.add(u);s.visits[u]++;s.actions++;s.phase=phase;yield;}
function finish(path){s.path=path;s.done=true;s.phase='Exit found';s.frontier.clear();}
function* plan(){
const seen=new Set([m.start]),front=[m.start],g=Array(N).fill(Infinity),turns=Array(N).fill(0),heading=Array(N).fill(-1),branch=Array(N).fill(-1);g[m.start]=0;s.frontier.add(m.start);let hotel=0,sock=0,star=-1;
function pick(){const k=entry.kind;if(k==='bfs')return 0;if(k==='dfs')return front.length-1;if(k==='random')return Math.floor(r()*front.length);if(k==='heat')return s.actions%4===3?0:best(u=>-g[u]);if(k==='mood')return Math.floor(s.actions/8)%2?front.length-1:0;if(k==='hotel'){for(let tries=0;tries<4;tries++){const quadrant=hotel;hotel=(hotel+1)%4;const i=front.findIndex(u=>(u%n>=n/2?1:0)+(Math.floor(u/n)>=n/2?2:0)===quadrant);if(i!==-1)return i;}return 0;}if(k==='sock'){const wanted=sock;sock=1-sock;const group=front.map((u,i)=>({u,i})).filter(({u})=>(u%n+Math.floor(u/n))%2===wanted);if(!group.length)return best(h);return group.reduce((a,b)=>h(b.u)<h(a.u)?b:a).i;}if(k==='star'){if(!front.some(u=>branch[u]===star))star=branch[front[0]];return best(u=>(branch[u]===star?0:100000)+h(u));}if(k==='goblin'){const sample=new Set();while(sample.size<Math.min(3,front.length))sample.add(Math.floor(r()*front.length));return[...sample].reduce((a,b)=>unknown(front[b])>unknown(front[a])?b:a);}if(k==='fork')return best(u=>s.actions%2?-h(u):h(u));if(k==='council')return best(u=>m.edges[u].reduce((a,v)=>a+h(v),0)/Math.max(1,m.edges[u].length)-g[u]/(N+1));if(k==='stubborn')return best(u=>g[u]+h(u)+turns[u]*3);if(k==='astar')return best(u=>g[u]+h(u)+h(u)/(N+1));if(k==='dijkstra')return best(u=>g[u]);return best(h);}
function unknown(u){return m.edges[u].filter(v=>!seen.has(v)).length;}
function best(score){let at=0,value=score(front[0]);for(let i=1;i<front.length;i++){const v=score(front[i]);if(v<value){at=i;value=v;}}return at;}
while(front.length){const at=pick(),u=front.splice(at,1)[0];s.frontier.delete(u);yield* visit(u,entry.name);if(u===m.goal){finish(route(s.parent,u));return;}for(const v of m.edges[u])if(!seen.has(v)){seen.add(v);s.parent[v]=u;g[v]=g[u]+1;heading[v]=direction(n,u,v);turns[v]=turns[u]+(heading[u]!==-1&&heading[u]!==heading[v]?1:0);branch[v]=u===m.start?v:branch[u];front.push(v);s.frontier.add(v);}}
s.error='Frontier exhausted';}
function* bidirectional(){const q=[[m.start],[m.goal]],seen=[new Set(q[0]),new Set(q[1])],parent=[Array(N).fill(-1),Array(N).fill(-1)];s.frontier=new Set([m.start,m.goal]);while(q[0].length&&q[1].length){const side=q[0].length<=q[1].length?0:1,u=q[side].shift();s.frontier.delete(u);yield* visit(u,side?'Searching from exit':'Searching from entrance');let meet=seen[1-side].has(u)?u:-1;if(meet===-1)for(const v of m.edges[u])if(!seen[side].has(v)){seen[side].add(v);parent[side][v]=u;q[side].push(v);s.frontier.add(v);if(seen[1-side].has(v)){meet=v;break;}}if(meet!==-1){const left=route(parent[0],meet),right=route(parent[1],meet).reverse();finish(left.concat(right.slice(1)));return;}}s.error='Search exhausted';}
function* deepen(){for(let limit=0;limit<N;limit++){const stack=[{u:m.start,depth:0,entered:false,next:0}],onPath=new Set([m.start]);while(stack.length){const t=stack[stack.length-1];if(!t.entered){t.entered=true;s.frontier=new Set(stack.map(x=>x.u));yield* visit(t.u,'Depth limit '+limit);if(t.u===m.goal){finish(stack.map(x=>x.u));return;}}if(t.depth===limit||t.next>=m.edges[t.u].length){onPath.delete(t.u);stack.pop();continue;}const v=m.edges[t.u][t.next++];if(!onPath.has(v)){onPath.add(v);stack.push({u:v,depth:t.depth+1,entered:false,next:0});}}}s.error='Search exhausted';}
function* walk(){let u=m.start,head=0,flip=0;const edgeVisits=new Map(),seen=new Set([u]);while(true){yield* visit(u,entry.kind==='flip'?'Left/right fork patrol':entry.name);if(u===m.goal){finish(route(s.parent,u));return;}let v;
if(entry.kind==='walk')v=m.edges[u][Math.floor(r()*m.edges[u].length)];else{const order=entry.kind==='wall'?[(head+1)%4,head,(head+3)%4,(head+2)%4]:flip%2?[(head+1)%4,head,(head+3)%4,(head+2)%4]:[(head+3)%4,head,(head+1)%4,(head+2)%4];v=m.edges[u].reduce((a,b)=>{const ca=entry.kind==='flip'?(edgeVisits.get(u+':'+a)||0):0,cb=entry.kind==='flip'?(edgeVisits.get(u+':'+b)||0):0;return cb<ca||cb===ca&&order.indexOf(direction(n,u,b))<order.indexOf(direction(n,u,a))?b:a;});}if(!seen.has(v)){seen.add(v);s.parent[v]=u;}edgeVisits.set(u+':'+v,(edgeVisits.get(u+':'+v)||0)+1);head=direction(n,u,v);u=v;flip++;}}
const iterator=entry.kind==='bidir'?bidirectional():entry.kind==='iddfs'?deepen():entry.mode==='walker'?walk():plan();
return{entry,state:s,step(){if(s.done||s.capped||s.error)return;try{iterator.next();if(!s.done&&s.actions>=budget){s.capped=true;s.phase='Budget stop';s.frontier.clear();}}catch(e){s.error=e.message;s.phase='Error';}}};
}
return{catalog,rng,generate,analyze,racer,direction};})();
if(typeof module!=='undefined')module.exports=MazeLolz;
