'use strict';
const LolzSort=(()=>{
const formations=[
['Lunchbox','Cut the input into consecutive blocks of ceil(sqrt(n)) values.'],
['Bro Council','Deal values round-robin into four queues.'],
['Keyboard Heat','Deal values across four queues, reversing direction after each row.'],
['Pigeon Hotel','Group values into four equal numeric-range bands.'],
['Odd Sock','Separate odd-valued numbers from even-valued numbers.'],
['Main Character','Use the first value as a pivot: less, equal, and greater groups.'],
['Binary Goblin','Group positive values by their binary digit length.'],
['Forkidy Fork','Alternate taking values from the left and right ends, dealing into three queues.'],
['Record Breaker','Start a new run whenever a value exceeds every earlier value.'],
['Mood Swing','Start a new run whenever the direction between neighbors changes.']
];
const methods=['Bubble','Selection','Insertion','Cocktail','Comb','Gnome','Heap','Three-way quick','Pancake','Odd–even'];
const explanations=['Sweep neighboring pairs until a pass makes no swaps.','Repeatedly find the minimum remaining value and swap it to the front.','Insert each value into a sorted prefix by shifting larger values.','Sweep neighboring pairs alternately forward and backward.','Shrink a comparison gap by 1.3, then repeat adjacent passes until ordered.','Step forward on ordered neighbors and backward after a swap.','Build a binary max-heap, then repeatedly extract its maximum.','Recursively partition into less, equal, and greater groups around the middle value.','Find each remaining maximum and move it using prefix reversals.','Alternate odd and even neighboring compare-exchange passes.'];
const names=[
['Lunchbox Bubbles','Cafeteria Election','Sandwich Queue','Juice Box Shaker','Noodle Untangler','Snack Patrol','Lunch Mountain','Split Pea Drama','Pancake Lunch','Alternating Fries'],
['Bro Bubble Bath','Council of Minimums','Bro Waiting Room','Back-and-Forth Bro','Bro Comb Salon','Tiny Bro Patrol','Bro Mountain King','Three Bro Tribunal','Bro Flipping Out','Odd Bro Even Bro'],
['Keyboard Jacuzzi','Caps Lock Election','Typo Repair Queue','Keyboard Windshield','COKKING Comb','Backspace Goblin','CPU Heapwave','Keyboard Civil War','Spacebar Acrobat','Shift Key Shuffle'],
['Pigeon Bubble Spa','Hotel Minimum Wage','Check-in Insertion','Lobby Cocktail','Feather Detangler','Pigeon Bellhop','Penthouse Heap','Three-Star Tribunal','Room Service Flip','Odd-Floor Elevator'],
['Sock Bubble Laundry','Missing Sock Search','Laundry Queue','Washing Machine','Sock Detangler','Laundry Gnome','Clothes Mountain','Sock Custody Battle','Inside-Out Laundry','Left Sock Right Sock'],
['Protagonist Bubble','Casting Call Sort','Main Character Queue','Plot Twist Shaker','Hair of Destiny','Side Quest Gnome','Final Boss Heap','Three Act Drama','Anime Pancake Arc','Alternating Spotlight'],
['Goblin Bubble Potion','Goblin Treasure Hunt','Goblin Immigration','Potion Shaker','Goblin Hairbrush','Goblin Night Shift','Dragon Loot Heap','Three Kingdom Goblins','Goblin Gravity Flip','Binary Disco'],
['Fork Bubble Trouble','Double-Ended Election','Fork Waiting List','Forktail Shaker','Fork Untangler','Fork Patrol','Fork Mountain','Fork Courtroom','Forkidy Flippidy','Fork Left Fork Right'],
['World Record Bubbles','Medal Minimum Hunt','Champion Queue','Victory Lap Shaker','Record Comb Remix','Podium Gnome','Trophy Mountain','Three-Way Photo Finish','Olympic Pancake','Relay Lane Switch'],
['Mood Bubble Therapy','Least Angry Election','Emotional Queue','Mood Cocktail','Bad Hair Mood','Drama Patrol','Emotional Baggage Heap','Three-Way Mood Split','Flipping My Mood','Mood Ping-Pong']
];
const catalog=[];
for(let formation=0;formation<10;formation++)for(let method=0;method<10;method++)catalog.push({id:catalog.length,name:names[formation][method],family:formations[formation][0],config:{formation,method},note:`CUSTOM HYBRID • ${formations[formation][1]} Sort every group using ${methods[method]}: ${explanations[method]} Finally merge adjacent sorted groups in balanced rounds.`});
function random(seed){let n=seed>>>0;return()=>{n+=0x6D2B79F5;let t=n;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296;};}
function input(seed,size,pattern){const r=random(seed);let a=Array.from({length:size},()=>1+Math.floor(r()*99));if(pattern==='reverse')a.sort((a,b)=>b-a);if(pattern==='sorted')a.sort((a,b)=>a-b);if(pattern==='almost'){a.sort((a,b)=>a-b);for(let i=0;i<Math.max(1,size/16);i++){const x=Math.floor(r()*size),y=Math.floor(r()*size);[a[x],a[y]]=[a[y],a[x]];}}if(pattern==='duplicates')a=a.map(v=>1+v%5*20);if(pattern==='mountain'){a.sort((a,b)=>a-b);a=a.filter((_,i)=>i%2===0).concat(a.filter((_,i)=>i%2===1).reverse());}return a;}
function racer(entry,values,seed=1337,limit=100000){
const a=values.slice(),s={a,active:[],ops:0,comparisons:0,writes:0,done:false,capped:false,error:'',finish:null,phase:'Gathering',groups:0};
function* op(active=[]){s.active=active;s.ops++;yield;}
function* cmp(i,j){s.comparisons++;yield* op([i,j]);return a[i]-a[j];}
function* valueCmp(x,y,active=[]){s.comparisons++;yield* op(active);return x-y;}
function* write(i,v){a[i]=v;s.writes++;yield* op([i]);}
function* swap(i,j){if(i===j)return;const t=a[i];a[i]=a[j];a[j]=t;s.writes+=2;yield* op([i,j]);}
function* local(lo,hi,m){
if(m===0){for(let end=hi-1;end>lo;end--){let moved=false;for(let i=lo;i<end;i++)if((yield* cmp(i,i+1))>0){yield* swap(i,i+1);moved=true;}if(!moved)break;}}
if(m===1){for(let i=lo;i<hi-1;i++){let min=i;for(let j=i+1;j<hi;j++)if((yield* cmp(j,min))<0)min=j;yield* swap(i,min);}}
if(m===2){for(let i=lo+1;i<hi;i++){const v=a[i];let j=i-1;while(j>=lo){if((yield* valueCmp(a[j],v,[j,i]))<=0)break;yield* write(j+1,a[j]);j--;}yield* write(j+1,v);}}
if(m===3){let left=lo,right=hi-1,moved=true;while(left<right&&moved){moved=false;for(let i=left;i<right;i++)if((yield* cmp(i,i+1))>0){yield* swap(i,i+1);moved=true;}right--;for(let i=right;i>left;i--)if((yield* cmp(i-1,i))>0){yield* swap(i-1,i);moved=true;}left++;}}
if(m===4){let gap=hi-lo,moved=true;while(gap>1||moved){gap=Math.max(1,Math.floor(gap/1.3));moved=false;for(let i=lo;i+gap<hi;i++)if((yield* cmp(i,i+gap))>0){yield* swap(i,i+gap);moved=true;}}}
if(m===5){let i=lo+1;while(i<hi){if(i===lo||(yield* cmp(i-1,i))<=0)i++;else{yield* swap(i-1,i);i--;}}}
if(m===6){function* sift(root,size){while(root*2+1<size){let child=root*2+1;if(child+1<size&&(yield* cmp(lo+child,lo+child+1))<0)child++;if((yield* cmp(lo+root,lo+child))>=0)break;yield* swap(lo+root,lo+child);root=child;}}const n=hi-lo;for(let i=Math.floor(n/2)-1;i>=0;i--)yield* sift(i,n);for(let end=n-1;end>0;end--){yield* swap(lo,lo+end);yield* sift(0,end);}}
if(m===7){function* quick(l,h){if(h-l<2)return;const p=a[Math.floor((l+h)/2)];let lt=l,i=l,gt=h-1;while(i<=gt){const c=yield* valueCmp(a[i],p,[i]);if(c<0){yield* swap(i++,lt++);}else if(c>0){yield* swap(i,gt--);}else i++;}yield* quick(l,lt);yield* quick(gt+1,h);}yield* quick(lo,hi);}
if(m===8){function* flip(end){for(let i=lo,j=end;i<j;i++,j--)yield* swap(i,j);}for(let end=hi-1;end>lo;end--){let max=lo;for(let i=lo+1;i<=end;i++)if((yield* cmp(i,max))>0)max=i;if(max!==end){yield* flip(max);yield* flip(end);}}}
if(m===9){let moved=true;while(moved){moved=false;for(let parity=0;parity<2;parity++)for(let i=lo+parity;i+1<hi;i+=2)if((yield* cmp(i,i+1))>0){yield* swap(i,i+1);moved=true;}}}
}
function* run(){
const f=entry.config.formation,source=values.slice(),n=source.length,bins=[];let max=-Infinity,runId=0,lastDir=0;
let low=Infinity,high=-Infinity;
if(f===3)for(let i=0;i<n;i++){if((yield* valueCmp(source[i],low,[i]))<0)low=source[i];if((yield* valueCmp(source[i],high,[i]))>0)high=source[i];}
for(let k=0;k<n;k++){
let i=k,key=0,v=source[i];
if(f===0)key=Math.floor(k/Math.max(1,Math.ceil(Math.sqrt(n))));
if(f===1)key=k%4;
if(f===2)key=Math.floor(k/4)%2?3-k%4:k%4;
if(f===3){key=high===low?0:Math.min(3,Math.floor((v-low)/(high-low+1)*4));yield* op([i]);}
if(f===4){key=Math.abs(v%2);yield* op([i]);}
if(f===5){const c=yield* valueCmp(v,source[0],[i,0]);key=c<0?0:c===0?1:2;}
if(f===6){key=Math.floor(Math.log2(Math.max(1,Math.abs(v))));yield* op([i]);}
if(f===7){i=k%2?n-1-Math.floor(k/2):Math.floor(k/2);v=source[i];key=k%3;}
if(f===8){if((yield* valueCmp(v,max,[i]))>0){if(k)runId++;max=v;}key=runId;}
if(f===9){if(k){const c=yield* valueCmp(v,source[k-1],[i,i-1]);const dir=Math.sign(c);if(dir&&lastDir&&dir!==lastDir)runId++;if(dir)lastDir=dir;}key=runId;}
if(!bins[key]){bins[key]=[];yield* op([i]);}bins[key].push(v);yield* op([i]);
}
s.phase='Arrange groups';const ranges=[];let cursor=0;
for(const bin of bins)if(bin&&bin.length){const lo=cursor;for(const v of bin)yield* write(cursor++,v);ranges.push([lo,cursor]);}
s.groups=ranges.length;s.phase='Local '+methods[entry.config.method];for(const [lo,hi]of ranges)yield* local(lo,hi,entry.config.method);
s.phase='Merge groups';let current=ranges;
while(current.length>1){const next=[];for(let k=0;k<current.length;k+=2){if(k+1===current.length){next.push(current[k]);continue;}const [lo,mid]=current[k],hi=current[k+1][1],out=[];let i=lo,j=mid;while(i<mid&&j<hi){out.push((yield* cmp(i,j))<=0?a[i++]:a[j++]);yield* op();}while(i<mid){out.push(a[i++]);yield* op();}while(j<hi){out.push(a[j++]);yield* op();}for(let p=0;p<out.length;p++)yield* write(lo+p,out[p]);next.push([lo,hi]);}current=next;}
s.done=true;s.phase='Finished';s.active=[];
}
const iterator=run();return{entry,state:s,step(){if(s.done||s.capped||s.error)return;try{const next=iterator.next();if(next.done){s.done=true;s.active=[];}else if(s.ops>=limit){s.capped=true;s.active=[];}}catch(e){s.error=e.message;s.active=[];}},iterator};
}
return{catalog,input,racer,random,formations,methods};})();
if(typeof module!=='undefined')module.exports=LolzSort;
