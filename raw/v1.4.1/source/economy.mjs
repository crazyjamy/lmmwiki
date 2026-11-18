import{initDailySparkles,startDailySparkle}from'./daily-sparkles.mjs?v=1.4.1-1d15f0c9';
import{initDesk}from'./desk-exploration.mjs?v=1.4.1-1d15f0c9';
import{initCollection}from'./collection-book.mjs?v=1.4.1-1d15f0c9';
import{initNicknames}from'./dust-character.mjs?v=1.4.1-1d15f0c9';
import{initRoomMemory}from'./room-memory.mjs?v=1.4.1-1d15f0c9';
import{goldInterval}from'./gold-rates.mjs?v=1.4.1-1d15f0c9';
export{goldInterval,baseGoldInterval}from'./gold-rates.mjs?v=1.4.1-1d15f0c9';
import{GOLD_CAP_MS,goldClock,pauseGoldClock,rescaleGoldClock}from'./gold-clock.mjs?v=1.4.1-1d15f0c9';
export{GOLD_CAP_MS}from'./gold-clock.mjs?v=1.4.1-1d15f0c9';
import{MORE_FURNITURE}from'./furniture-extra.mjs?v=1.4.1-1d15f0c9';
import{ROOMS,currentRoom,initRoomGrowth}from'./rooms.mjs?v=1.4.1-1d15f0c9';
export{ROOMS}from'./rooms.mjs?v=1.4.1-1d15f0c9';
import{initFurniture,activeLevel,furnitureLevel,upgradeCost,lampFactor,cushionBonus}from'./furniture.mjs?v=1.4.1-1d15f0c9';
import{isAway}from'./adventures.mjs?v=1.4.1-1d15f0c9';
import{initRoomLayout}from'./room-layout.mjs?v=1.4.1-1d15f0c9';
import {DUSTS,GROUPS,RARITIES,ESSENCES} from './dust-data.mjs?v=1.4.1-1d15f0c9';

export const FURNITURE=[
 {id:'rug',name:'폭신한 러그',price:60,description:'먼지를 합쳐 레벨업하면 반짝이를 1개 받아요.',effect:'합치기 반짝이 +1',color:'#dfb0aa'},
 {id:'plant',name:'작은 화분',price:80,description:'쓰다듬기로 얻는 반짝이가 1개에서 2개로 늘어요.',effect:'쓰다듬기 +1',color:'#aabd91'},
 {id:'lamp',name:'달빛 조명',price:100,description:'방에 있는 모든 먼지의 골드 대기 시간이 20% 줄어요.',effect:'골드 시간 −20%',color:'#ead591'},
 {id:'cushion',name:'구름 쿠션',price:120,description:'모든 먼지의 골드 보상이 25% 늘어요.',effect:'골드 보상 +25%',color:'#bfcfe0'}
];
FURNITURE.push(...MORE_FURNITURE);
const lists={group:GROUPS,rarity:RARITIES,essence:ESSENCES};
export const materialPrice=(key,id)=>key==='group'?8:key==='essence'?3:({common:10,rare:18,legend:30}[id]||0);
export const installed=(s,id)=>s.decorations.includes(id);
export const FAIRY_PRICE=120;
export function goldAmount(s,d){const data=DUSTS.find(x=>x.id===d.id),base={common:6,rare:10,legend:16}[data.rarity]+Math.floor(d.xp/2);return Math.floor(base*(1+currentRoom(s).bonus/100+cushionBonus(s)))+activeLevel(s,'hourglass')*2;}
export function startClock(s,d,now=Date.now()){if(d.sparkleDropDay===undefined)startDailySparkle(d,now);d.goldAt=now+goldInterval(s,d);d.goldRemaining=goldInterval(s,d);d.goldBanked=0;}
export function initEconomy(s,now=Date.now()){
 if(s.gold===undefined)s.gold=180;
 initRoomGrowth(s);
 if(s.ownedFurniture===undefined)s.ownedFurniture=[];
 if(s.decorations===undefined)s.decorations=[];
 if(s.feedCount===undefined)s.feedCount=0;
 if(s.fairyOwned===undefined)s.fairyOwned=false;
 if(typeof s.fairyOwned!=='boolean')throw Error('invalid fairy');
 if(!Number.isSafeInteger(s.gold)||s.gold<0||!Number.isInteger(s.roomLevel)||s.roomLevel<1||s.roomLevel>ROOMS.length||!Number.isSafeInteger(s.feedCount)||s.feedCount<0)throw Error('invalid economy');
 for(const key of ['ownedFurniture','decorations'])if(!Array.isArray(s[key])||new Set(s[key]).size!==s[key].length||!s[key].every(id=>FURNITURE.some(f=>f.id===id)))throw Error('invalid furniture');
 if(!s.decorations.every(id=>s.ownedFurniture.includes(id)))throw Error('unowned decoration');
 initFurniture(s);
 if(s.goldClockVersion!==undefined&&s.goldClockVersion!==2)throw Error('invalid clock version');
 const migrating=s.goldClockVersion===undefined;
 for(const d of s.dusts){
  const fresh=d.goldAt===undefined,i=DUSTS.findIndex(x=>x.id===d.id),oldInterval=Math.round((20+i*3)*1000*lampFactor(s));if(fresh)startClock(s,d,now);
  if(!Number.isFinite(d.goldAt)||d.goldAt<0||!Number.isFinite(d.goldRemaining)||d.goldRemaining<0)throw Error('invalid clock');
  if(d.goldBanked===undefined){d.goldBanked=(d.stored||isAway(s,d.uid))&&d.goldRemaining===0?1:0;if(d.goldRemaining===0)d.goldRemaining=migrating&&!fresh?oldInterval:goldInterval(s,d);}
  if(!Number.isSafeInteger(d.goldBanked)||d.goldBanked<0||d.goldBanked>10000)throw Error('invalid gold bank');
  if(d.goldRemaining<=0)throw Error('invalid remaining clock');
  if(migrating&&!fresh)rescaleGoldClock(d,oldInterval,goldInterval(s,d),now,d.stored||isAway(s,d.uid));
 }
 s.goldClockVersion=2;
 initDesk(s);initNicknames(s);initRoomMemory(s);initCollection(s);initDailySparkles(s,now);return initRoomLayout(s);
}
export function goldProduction(s,d,now=Date.now()){const paused=d.stored||isAway(s,d.uid),clock=goldClock(d,goldInterval(s,d),now,paused);return {...clock,paused,amount:clock.cycles*goldAmount(s,d)};}
export function goldReady(s,d,now=Date.now()){const p=goldProduction(s,d,now);return !p.paused&&p.cycles>0;}
export function pauseGold(s,d,now=Date.now()){pauseGoldClock(d,goldInterval(s,d),now);}
export function collectGold(s,uid,now=Date.now()){
 const d=s.dusts.find(x=>x.uid===uid);if(!d||!goldReady(s,d,now))return {ok:false,message:'골드가 모일 때까지 조금 기다려주세요.'};
 const clock=goldProduction(s,d,now),amount=clock.amount;s.gold+=amount;d.goldBanked=0;d.goldRemaining=clock.remaining;d.goldAt=now+clock.remaining;const sparkles=activeLevel(s,'musicbox');s.sparkles+=sparkles;return {ok:true,amount,sparkles};
}
export function collectAllGold(s,now=Date.now()){if(!s.fairyOwned)return {ok:false,amount:0,message:'골드 모으는 요정을 먼저 데려와 주세요.'};let amount=0,sparkles=0;for(const d of s.dusts){const r=collectGold(s,d.uid,now);if(r.ok){amount+=r.amount;sparkles+=r.sparkles;}}return {ok:amount>0,amount,sparkles};}
export function buyFairy(s){if(s.fairyOwned)return {ok:false,message:'이미 요정과 함께하고 있어요.'};if(s.sparkles<FAIRY_PRICE)return {ok:false,message:'반짝이가 조금 더 필요해요.'};s.sparkles-=FAIRY_PRICE;s.fairyOwned=true;return {ok:true};}
export function buyMaterial(s,key,id,quantity=1){
 if(!lists[key]?.some(x=>x.id===id)||!Number.isInteger(quantity)||quantity<1||quantity>99)return {ok:false,message:'구매할 재료를 확인해주세요.'};
 const price=materialPrice(key,id)*quantity;if(s.sparkles<price)return {ok:false,message:'반짝이가 조금 더 필요해요. 먼지를 쓰다듬어 모아주세요.'};
 s.sparkles-=price;s.materials[key][id]+=quantity;return {ok:true,price};
}
export function upgradeRoom(s){const next=ROOMS[s.roomLevel];if(!next)return {ok:false,message:'가장 포근한 방이에요.'};if(s.sparkles<next.cost)return {ok:false,message:'반짝이가 조금 더 필요해요.'};s.sparkles-=next.cost;s.roomLevel++;return {ok:true};}
export function toggleFurniture(s,id,now=Date.now()){
 const f=FURNITURE.find(x=>x.id===id);if(!f)return {ok:false,message:'가구를 확인해주세요.'};
 if(!s.ownedFurniture.includes(id)){if(s.gold<f.price)return {ok:false,message:'골드가 조금 더 필요해요.'};s.gold-=f.price;s.ownedFurniture.push(id);s.furnitureLevels[id]=1;}
 const old=s.dusts.map(d=>goldInterval(s,d)),on=installed(s,id);if(on)s.decorations=s.decorations.filter(x=>x!==id);else s.decorations.push(id);
 if(id==='lamp')s.dusts.forEach((d,i)=>{rescaleGoldClock(d,old[i],goldInterval(s,d),now,d.stored||isAway(s,d.uid));});
 return {ok:true,placed:!on};
}

export function upgradeFurniture(s,id,now=Date.now()){
 const price=upgradeCost(s,id);if(price===null)return {ok:false,message:furnitureLevel(s,id)===5?'가장 포근한 가구예요.':'가구를 먼저 데려와 주세요.'};if(s.gold<price)return {ok:false,message:'골드가 조금 더 필요해요.'};
 const old=s.dusts.map(d=>goldInterval(s,d));s.gold-=price;s.furnitureLevels[id]=furnitureLevel(s,id)+1;
 if(id==='lamp'&&installed(s,id))s.dusts.forEach((d,i)=>{rescaleGoldClock(d,old[i],goldInterval(s,d),now,d.stored||isAway(s,d.uid));});
 return {ok:true,level:s.furnitureLevels[id],price};
}
