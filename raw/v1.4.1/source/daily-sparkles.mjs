import{DUSTS}from'./dust-data.mjs?v=1.4.1-1d15f0c9';
import{isAway}from'./adventures.mjs?v=1.4.1-1d15f0c9';
export const sparkleDay=now=>Math.floor((now+9*60*60*1000)/86400000);
export function startDailySparkle(d,now=Date.now()){d.sparkleDropDay=sparkleDay(now);}
export function initDailySparkles(s,now=Date.now()){
 if(s.dailySparkles===undefined)s.dailySparkles={version:1,drops:[]};
 const p=s.dailySparkles;
 if(!p||p.version!==1||!Array.isArray(p.drops)||p.drops.length>10000||new Set(p.drops.map(d=>d.uid)).size!==p.drops.length)throw Error('invalid daily sparkles');
 for(const d of s.dusts){if(d.sparkleDropDay===undefined)d.sparkleDropDay=sparkleDay(now)-1;if(!Number.isSafeInteger(d.sparkleDropDay)||d.sparkleDropDay< -1)throw Error('invalid sparkle day');}
 for(const drop of p.drops)if(!Number.isSafeInteger(drop.uid)||drop.uid<1||drop.uid>=s.nextUid||!Number.isSafeInteger(drop.day)||drop.day<0||!DUSTS.some(d=>d.id===drop.dustId)||!['x','y'].every(k=>Number.isFinite(drop[k])&&drop[k]>=5&&drop[k]<=95)||s.dusts.some(d=>d.uid===drop.uid&&d.sparkleDropDay<drop.day))throw Error('invalid sparkle drop');
 return s;
}
export function dropDailySparkles(s,now=Date.now(),positionForDust=()=>({x:50,y:65})){
 const today=sparkleDay(now),pending=new Set(s.dailySparkles.drops.map(d=>d.uid)),created=[];
 s.dusts.forEach((d,i)=>{if(d.stored||isAway(s,d.uid)||pending.has(d.uid)||d.sparkleDropDay>=today)return;const p=positionForDust(d,i),drop={uid:d.uid,dustId:d.id,day:today,x:Math.max(6,Math.min(94,Number.isFinite(p?.x)?p.x+5:50)),y:Math.max(6,Math.min(90,Number.isFinite(p?.y)?p.y+12:65))};s.dailySparkles.drops.push(drop);d.sparkleDropDay=today;created.push(drop);});
 return created;
}
export function collectDailySparkle(s,uid,now=Date.now()){
 const i=s.dailySparkles.drops.findIndex(d=>d.uid===uid);if(i<0)return {ok:false};
 const [drop]=s.dailySparkles.drops.splice(i,1),d=s.dusts.find(d=>d.uid===uid);if(d)d.sparkleDropDay=Math.max(d.sparkleDropDay,sparkleDay(now));s.sparkles++;return {ok:true,amount:1,drop};
}
