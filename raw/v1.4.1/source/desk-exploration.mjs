import{DUSTS}from'./dust-data.mjs?v=1.4.1-1d15f0c9';
import{goldInterval}from'./gold-rates.mjs?v=1.4.1-1d15f0c9';
import{pauseGoldClock}from'./gold-clock.mjs?v=1.4.1-1d15f0c9';
import{activeLevel}from'./furniture.mjs?v=1.4.1-1d15f0c9';
export const DESK={width:20,height:14,tile:48,start:{x:3.5,y:11.5}};
export const DESK_ITEMS=[
 {id:'cotton',x:5.5,y:11.5,key:'group',material:'daily',amount:1,name:'포근한 솜뭉치',label:'포근 재료',color:'#e4d9ae'},
 {id:'leaf',x:14.5,y:10.5,key:'essence',material:'leaf',amount:2,name:'바싹 마른 풀잎',label:'풀잎 정수',color:'#acc780'},
 {id:'dew',x:10.5,y:3.5,key:'essence',material:'dew',amount:3,name:'숨은 이슬방울',label:'이슬 정수',color:'#91c9cf'}
];
export function deskWall(x,y){return x<1||y<1||x>=19||y>=13||x>=3&&x<=5&&y>=2&&y<=5||y===8&&x>=2&&x<=7||x>=8&&x<=17&&y===1||x===8&&y>=2&&y<=6||x===17&&y>=2&&y<=6||y===6&&x>=8&&x<=17&&x!==10||x>=12&&x<=15&&y>=2&&y<=4;}
export const crateTile=r=>({x:r.pushed?11:10,y:7});
export function deskBlocked(r,x,y){const c=crateTile(r);return deskWall(x,y)||x===10&&y===6&&!r.secret||c.x===x&&c.y===y;}
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
export function revealDesk(r){const known=new Set(r.seen),before=known.size;for(let y=0;y<14;y++)for(let x=0;x<20;x++)if(Math.hypot(x+.5-r.x,y+.5-r.y)<=3.15)known.add(y*20+x);r.seen=[...known];let discovered=false;if(r.pushed&&!r.secret&&dist(r,{x:10.5,y:7.5})<2){r.secret=true;discovered=true;for(let y=4;y<=7;y++)known.add(y*20+10);r.seen=[...known];}return {revealed:known.size>before,discovered};}
export function deskProgress(r){const total=Array.from({length:280},(_,i)=>i).filter(i=>!deskWall(i%20,Math.floor(i/20))).length,seen=r.seen.filter(i=>!deskWall(i%20,Math.floor(i/20))).length;return {seen:Math.min(100,Math.round(seen/total*100)),pushed:r.pushed,secret:r.secret,picked:r.picked.length,total:DESK_ITEMS.length,complete:r.pushed&&r.secret&&r.picked.length===3,atExit:dist(r,DESK.start)<=1.25};}
export function initDesk(s){
 if(s.deskRun===undefined)s.deskRun=null;if(s.deskArchive===undefined)s.deskArchive={version:1,clears:0,records:[]};const a=s.deskArchive;
 if(!a||a.version!==1||!Number.isSafeInteger(a.clears)||a.clears<0||!Array.isArray(a.records)||a.records.length>12)throw Error('invalid exploration archive');
 for(const e of a.records)if(!DUSTS.some(d=>d.id===e.dustId)||typeof e.name!=='string'||e.name.length>100||typeof e.complete!=='boolean'||!Number.isFinite(e.at)||e.at<0||!Array.isArray(e.items)||new Set(e.items).size!==e.items.length||!e.items.every(id=>DESK_ITEMS.some(i=>i.id===id)))throw Error('invalid exploration record');
 const r=s.deskRun;if(r===null)return s;
 if(!r||r.version!==1||!s.dusts.some(d=>d.uid===r.uid&&!d.stored)||s.adventures.some(q=>q.uid===r.uid)||!Number.isFinite(r.x)||!Number.isFinite(r.y)||r.x<1||r.y<1||r.x>=19||r.y>=13||typeof r.pushed!=='boolean'||typeof r.secret!=='boolean'||r.secret&&!r.pushed||!Number.isFinite(r.startedAt)||r.startedAt<0||!Array.isArray(r.picked)||new Set(r.picked).size!==r.picked.length||!r.picked.every(id=>DESK_ITEMS.some(i=>i.id===id))||!Array.isArray(r.seen)||r.seen.length>280||new Set(r.seen).size!==r.seen.length||!r.seen.every(i=>Number.isInteger(i)&&i>=0&&i<280)||deskBlocked(r,Math.floor(r.x),Math.floor(r.y)))throw Error('invalid exploration');
 if(r.picked.includes('dew')&&!r.secret)throw Error('locked exploration reward');return s;
}
export function startDesk(s,uid,now=Date.now()){
 initDesk(s);if(s.deskRun)return {ok:false,message:'진행 중인 책상 아래 탐험을 먼저 이어가 주세요.'};const d=s.dusts.find(d=>d.uid===uid&&!d.stored&&!s.adventures.some(q=>q.uid===uid));if(!d)return {ok:false,message:'방에서 함께하는 먼지를 골라주세요.'};
 pauseGoldClock(d,goldInterval(s,d),now);s.deskRun={version:1,uid,x:3.5,y:11.5,seen:[],picked:[],pushed:false,secret:false,startedAt:now};revealDesk(s.deskRun);s.selectedUid=s.dusts.find(x=>x.uid!==uid&&!x.stored&&!s.adventures.some(q=>q.uid===x.uid))?.uid??null;return {ok:true};
}
export function deskPath(r,tx,ty){
 tx=Math.floor(tx);ty=Math.floor(ty);if(tx<1||ty<1||tx>=19||ty>=13||deskBlocked(r,tx,ty))return [];
 const start=Math.floor(r.y)*20+Math.floor(r.x),end=ty*20+tx,queue=[start],previous=new Map([[start,null]]);
 for(let i=0;i<queue.length;i++){const at=queue[i];if(at===end)break;const x=at%20,y=Math.floor(at/20);for(const [dx,dy]of[[1,0],[0,-1],[-1,0],[0,1]]){const nx=x+dx,ny=y+dy,n=ny*20+nx;if(!previous.has(n)&&!deskBlocked(r,nx,ny)){previous.set(n,at);queue.push(n);}}}
 if(!previous.has(end))return [];const path=[];for(let n=end;n!==null;n=previous.get(n))path.push({x:n%20+.5,y:Math.floor(n/20)+.5});path.reverse();
 // Align with the current tile's centre before turning; this prevents corner clipping.
 if(dist(r,path[0])<.015)path.shift();return path;
}
export function pickDesk(r,radius=.68){const picked=[];for(const i of DESK_ITEMS)if(!r.picked.includes(i.id)&&(i.id!=='dew'||r.secret)&&r.seen.includes(Math.floor(i.y)*20+Math.floor(i.x))&&dist(r,i)<=radius){r.picked.push(i.id);picked.push(i);}return picked;}
export function stepDesk(s,path,seconds){const r=s.deskRun;if(!r||!path.length)return {moving:false,picked:[]};const target=path[0];if(deskBlocked(r,Math.floor(target.x),Math.floor(target.y))){path.length=0;return {moving:false,picked:[]};}const distance=dist(r,target),step=3.2*Math.max(0,Math.min(seconds,.05));if(distance<=step){r.x=target.x;r.y=target.y;path.shift();}else{r.x+=(target.x-r.x)/distance*step;r.y+=(target.y-r.y)/distance*step;}return {moving:true,...revealDesk(r),picked:pickDesk(r)};}
export function canPushDesk(r){return !r.pushed&&dist(r,{x:9.5,y:7.5})<=1.15;}
export function pushDesk(r){if(!canPushDesk(r))return {ok:false};r.pushed=true;const reveal=revealDesk(r);return {ok:true,...reveal};}
export function finishDesk(s,now=Date.now()){
 const r=s.deskRun;if(!r||!deskProgress(r).atExit)return {ok:false,message:'집으로 이어지는 종이 표지판까지 돌아와 주세요.'};const d=s.dusts.find(d=>d.uid===r.uid),complete=deskProgress(r).complete,rewards=[];
 for(const id of r.picked){const item=DESK_ITEMS.find(i=>i.id===id),amount=item.amount+(item.key==='essence'?activeLevel(s,'basket'):0);s.materials[item.key][item.material]+=amount;rewards.push({...item,amount});}
 const record={dustId:d.id,name:d.nickname||DUSTS.find(x=>x.id===d.id).name,at:now,complete,items:[...r.picked]};s.deskArchive.records.unshift(record);s.deskArchive.records=s.deskArchive.records.slice(0,12);if(complete){s.deskArchive.clears++;s.adventureCount++;}d.goldAt=now+d.goldRemaining;s.selectedUid=d.uid;s.deskRun=null;return {ok:true,complete,rewards,record};
}
