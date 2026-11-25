import {QUESTS} from './adventures.mjs';
import {routeUnlocked} from './rooms.mjs';
import {keepPostcard,recordAfterwordReturn} from './dust-life.mjs';
import {activeLevel,basketEssenceBonus} from './furniture.mjs';

function postcardStop(s,pet,random){
 const stops=QUESTS.filter(q=>routeUnlocked(s,q.id)&&!s.life.postcards.some(p=>p.dustId===pet.id&&p.route===q.id));
 if(!stops.length||random()>=0.3)return null;
 return stops[Math.floor(random()*stops.length)].id;
}
export const destinations=[
 {name:'풀잎별',symbol:'leaf',level:1,material:'나뭇가지',furniture:'나무 스툴',art:'woodStool',materialArt:'twig',color:'골드',price:6,gold:5,places:['풀숲','나무 그늘','오솔길'],quests:['떨어진 나뭇가지 모으기','바람에 굴러간 잔가지 찾기']},
 {name:'물방울별',symbol:'dew',level:3,essence:'dew',material:'빛조개',furniture:'조개 조명',art:'shellLamp',materialArt:'glowShell',color:'반짝이',price:2,gold:8,places:['물가','연잎 아래','얕은 여울'],quests:['연못에서 빛나는 조개 찾기','여울에 숨은 조개 줍기']},
 {name:'달빛별',symbol:'moon',level:5,material:'달빛석',furniture:'달빛 선반',art:'moonShelf',materialArt:'moonstone',color:'반짝이',price:3,gold:10,places:['달그늘','분화구','은빛 언덕'],quests:['달빛에 반짝이는 돌 찾기','분화구의 달빛석 모으기']}
];
export const recipeQuantity=3;
export const tripSeconds=[20,45,90];
export function journal(s){
 const j=s.starTrips??={stock:[0,0,0],counts:[0,0,0,0,0,0],crafted:[false,false,false],placed:[false,false,false],trip:null};
 // Earlier saves awarded the design for either quest at a destination.
 j.blueprints??=destinations.map((_,i)=>Boolean(j.crafted[i]||j.counts[2*i]||j.counts[2*i+1]));
 j.levels??=j.crafted.map(owned=>owned?1:0);
 if(!j.returnsCounted){
  s.adventureCount=(s.adventureCount||0)+j.counts.reduce((total,count)=>total+count,0);
  j.returnsCounted=true;
 }
 return j;
}
export function depart(s,pet,lv,essence,random=Math.random,now=Date.now()){
 const j=journal(s);
 if(j.trip||!pet)return false;
 const weighted=items=>items[Math.floor(random()*items.length)];
 const weights=q=>j.counts[q]?1:2;
 const pool=[];
 destinations.forEach((d,i)=>{
  if(lv>=d.level&&(!d.essence||d.essence===essence))pool.push(i);
 });
 if(!pool.length)return false;
 const i=weighted(pool),q=weighted([0,1].flatMap(n=>Array(weights(i*2+n)).fill(i*2+n)));
 const duration=tripSeconds[i]*(1-activeLevel(s,'windchime')*.05);
 j.trip={q,uid:pet.uid,end:now+Math.round(duration*1000),duration,postcardStop:postcardStop(s,pet,random)};return true;
}
export function tripGold(s,i){
 const j=journal(s);
 return destinations[i].gold+(j.placed[i]?Math.max(0,j.levels[i]-1):0);
}
export function tripUpgradePrice(level){return level*40;}
export function collectTrip(s,now=Date.now(),random=Math.random){
 const j=journal(s),t=j.trip;
 if(!t||now<(t.end??0))return false;
 const pet=s.dusts.find(d=>d.uid===t.uid);
 if(pet){
  const stop=t.postcardStop===undefined?postcardStop(s,pet,random):t.postcardStop;
  if(stop&&QUESTS.some(q=>q.id===stop)&&keepPostcard(s,pet,stop,now).isNew)s.sparkles+=activeLevel(s,'postbox');
  const unlocked=QUESTS.filter(q=>routeUnlocked(s,q.id));
  const visited=unlocked.find(q=>q.id===stop)||unlocked[Math.floor(random()*unlocked.length)];
  if(visited)recordAfterwordReturn(s,pet,visited.id,now);
 }
 const i=Math.floor(t.q/2);s.adventureCount++;if(t.q%2===0)j.blueprints[i]=true;
 const essence=['leaf','dew','moon'][i];
 s.materials.essence[essence]+=basketEssenceBonus(activeLevel(s,'basket'));
 s.sparkles+=Math.ceil(activeLevel(s,'blanket')/2);
 j.counts[t.q]++;j.stock[i]++;s.gold+=tripGold(s,i);j.trip=null;return true;
}
export function workshop(s,action,i){
 const d=destinations[i],j=journal(s);
 if(!d)return false;
 if(action==='buy'){const wallet=i?'sparkles':'gold';if(s[wallet]<d.price)return false;s[wallet]-=d.price;j.stock[i]++;}
 else if(action==='craft'){if(!j.blueprints[i]||j.stock[i]<recipeQuantity||j.crafted[i])return false;j.stock[i]-=recipeQuantity;j.crafted[i]=true;j.levels[i]=1;j.placed[i]=true;}
 else if(action==='upgrade'&&j.crafted[i]){
  const lv=j.levels[i],price=tripUpgradePrice(lv);
  if(lv>=10||s.gold<price)return false;
  s.gold-=price;j.levels[i]++;
 }
 else if(action==='place'&&j.crafted[i])j.placed[i]=!j.placed[i];
 else return false;
 return true;
}
