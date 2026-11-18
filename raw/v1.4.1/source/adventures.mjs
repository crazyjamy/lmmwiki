import{routeUnlocked,routeUnlockLevel}from'./rooms.mjs?v=1.4.1-1d15f0c9';
import{initDesk}from'./desk-exploration.mjs?v=1.4.1-1d15f0c9';
import{pauseGoldClock}from'./gold-clock.mjs?v=1.4.1-1d15f0c9';
import{keepPostcard}from'./dust-life.mjs?v=1.4.1-1d15f0c9';
import{activeLevel}from'./furniture.mjs?v=1.4.1-1d15f0c9';
import{goldInterval}from'./gold-rates.mjs?v=1.4.1-1d15f0c9';
export const QUESTS=[
 {id:'bookshelf',name:'책장 아래 숲',duration:20000,description:'작은 풀잎 사이로 첫 모험을 떠나요.',color:'#c6d7ae',rewards:[['group','daily',1],['rarity','common',1],['essence','leaf',3],['essence','dew',2]],sparkles:2},
 {id:'window',name:'햇살 창가',duration:45000,description:'바람을 타고 반짝이는 햇살을 찾아요.',color:'#efdc9e',rewards:[['group','pop',1],['rarity','rare',1],['essence','spark',5],['essence','ember',2]],sparkles:3},
 {id:'moonpath',name:'달빛 다락길',duration:90000,description:'조용한 밤길 끝에 희귀한 재료가 기다려요.',color:'#d0c5e4',rewards:[['group','dream',1],['rarity','legend',1],['essence','moon',8],['essence','stardust',2]],sparkles:5}
];
export const isAway=(s,uid)=>(s.adventures?.some(q=>q.uid===uid)||s.deskRun?.uid===uid)||false;
export function initAdventures(s){
 if(s.adventures===undefined)s.adventures=[];
 if(s.keeperRoute===undefined)s.keeperRoute='bookshelf';if(!QUESTS.some(q=>q.id===s.keeperRoute))throw Error('invalid keeper route');
 if(s.adventureCount===undefined)s.adventureCount=0;
 if(!Number.isSafeInteger(s.adventureCount)||s.adventureCount<0||!Array.isArray(s.adventures)||new Set(s.adventures.map(q=>q.uid)).size!==s.adventures.length)throw Error('invalid adventures');
 for(const q of s.adventures){const route=QUESTS.find(x=>x.id===q.route),d=s.dusts.find(x=>x.uid===q.uid);if(!route||!d||d.stored||!Number.isFinite(q.start)||q.start<0||!Number.isFinite(q.duration??route.duration)||(q.duration??route.duration)<route.duration*.75||(q.duration??route.duration)>route.duration||q.end!==q.start+(q.duration??route.duration))throw Error('invalid quest');}
 return initDesk(s);
}
export function startAdventure(s,uid,routeId,now=Date.now()){
 const d=s.dusts.find(x=>x.uid===uid),route=QUESTS.find(x=>x.id===routeId);
 if(!d||d.stored||isAway(s,uid)||!route)return {ok:false,message:'방에서 쉬고 있는 먼지를 골라주세요.'};
 if(!routeUnlocked(s,routeId))return {ok:false,message:'방 Lv.'+routeUnlockLevel(routeId)+'에서 열리는 길이에요.'};
 pauseGoldClock(d,goldInterval(s,d),now);const duration=Math.round(route.duration*(1-activeLevel(s,'windchime')*.05));s.adventures.push({uid,route:route.id,start:now,end:now+duration,duration});
 if(s.selectedUid===uid)s.selectedUid=s.dusts.find(x=>!x.stored&&!isAway(s,x.uid))?.uid??null;
 return {ok:true,quest:s.adventures.at(-1)};
}
export function claimAdventure(s,uid,now=Date.now()){
 const q=s.adventures.find(x=>x.uid===uid);if(!q||now<q.end)return {ok:false,message:'아직 모험 중이에요. 조금만 기다려주세요.'};
 const d=s.dusts.find(x=>x.uid===uid),route=QUESTS.find(x=>x.id===q.route);
 for(const [key,id,amount]of route.rewards)s.materials[key][id]+=amount+(key==='essence'?activeLevel(s,'basket'):0);
 s.sparkles+=route.sparkles;s.adventureCount++;s.adventures=s.adventures.filter(x=>x.uid!==uid);d.goldAt=now+d.goldRemaining;s.selectedUid=uid;
 const letter=keepPostcard(s,d,route.id,now);return {ok:true,dust:d,route,...letter};
}

// A click changes the selection, never the individual, its species or its position.
export function selectDust(s,uid){const d=s.dusts.find(x=>x.uid===uid&&!x.stored&&!isAway(s,uid));if(!d)return false;s.selectedUid=uid;return true;}
export function roomResidents(s){return s.dusts.filter(d=>!d.stored&&!isAway(s,d.uid));}

export function chooseKeeperRoute(s,route){if(!QUESTS.some(q=>q.id===route)||!routeUnlocked(s,route))return {ok:false};s.keeperRoute=route;return {ok:true};}
