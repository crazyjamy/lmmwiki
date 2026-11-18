import{mergeCandidates}from'./dust-engine.mjs?v=1.4.1-1d15f0c9';
import{DUSTS}from'./dust-data.mjs?v=1.4.1-1d15f0c9';
import{ROOMS,ROOM_CHAPTERS}from'./rooms.mjs?v=1.4.1-1d15f0c9';
import{isAway}from'./adventures.mjs?v=1.4.1-1d15f0c9';
import{goldProduction,FURNITURE,FAIRY_PRICE}from'./economy.mjs?v=1.4.1-1d15f0c9';

export function firstSteps(s){return [
 {id:'birth',label:'먼지 탄생',done:s.nextUid>2||s.dusts.some(d=>d.xp>0)||s.ownedFurniture.length>0||s.roomLevel>1},
 {id:'story',label:'첫 이야기',done:s.dusts.some(d=>d.readStories.length>0)},
 {id:'furniture',label:'첫 가구',done:s.ownedFurniture.length>0}
];}
export function goldOverview(s,now=Date.now()){
 const entries=s.dusts.filter(d=>!d.stored&&!isAway(s,d.uid)).map(d=>({dust:d,...goldProduction(s,d,now)}));
 return {entries,ready:entries.reduce((sum,p)=>sum+p.amount,0),capped:entries.filter(p=>p.capped).length};
}
export function nextGoal(s,now=Date.now()){
 const steps=firstSteps(s),missing=steps.find(x=>!x.done),available=s.dusts.filter(d=>!d.stored&&!isAway(s,d.uid));
 const sparkleGoal=(goal,cost)=>({...goal,currency:'sparkles',cost,have:s.sparkles,missing:Math.max(0,cost-s.sparkles)});
 const goldGoal=(goal,cost)=>({...goal,currency:'gold',cost,have:s.gold,missing:Math.max(0,cost-s.gold)});
 if(missing?.id==='birth')return {id:'birth',title:'작은 빛에서 새 친구 만나기',description:'방에는 꼬물이가 먼저 와 있어요. 빛나는 곳에서 두 번째 친구의 탄생을 함께해요.',reward:'새 먼지 1마리 · 같은 종류여도 따로 자라요',action:'birth',cta:s.pending?'탄생 기다리기':'무료로 먼지 만나기',currency:'free',cost:0,have:0,missing:0};
 if(missing?.id==='story'){
  const opened=s.dusts.find(d=>d.xp>=2);
  if(opened)return {id:'story',title:'첫 이야기가 열렸어요',description:'레벨이 오를 때마다 먼지의 이야기가 한 편씩 열려요. 첫 장을 펼쳐볼까요?',reward:'먼지의 첫 이야기 · 언제든 다시 읽기',action:'story',uid:opened.uid,cta:'첫 이야기 읽기',currency:'free',cost:0,have:0,missing:0};
  const d=[...available].sort((a,b)=>mergeCandidates(s,b.uid).length-mergeCandidates(s,a.uid).length||b.uid-a.uid)[0];
  if(!d)return {id:'story',title:'함께 자랄 먼지를 데려와요',description:'보관함에서 꺼내거나 모험에서 돌아온 뒤 합칠 수 있어요.',reward:'같은 친구 두 마리 → Lv.2 · 첫 이야기',action:s.adventures.length||s.deskRun?'adventure':'storage',cta:s.adventures.length||s.deskRun?'모험 소식 보기':'보관함 열기',currency:'free',cost:0,have:0,missing:0};
  const matches=mergeCandidates(s,d.uid),name=DUSTS.find(x=>x.id===d.id).name;
  return {id:'story',title:matches.length?`${name} 두 마리를 합쳐 첫 이야기 열기`:`${name}의 같은 레벨 친구 만나기`,description:matches.length?'같은 종류·같은 레벨 두 마리를 한 마리로 합쳐요. 남을 친구를 확인한 뒤 레벨을 올려요.':'작은 빛에서 같은 종류의 친구를 만나세요. 보관함에 있다면 꺼내고, 모험 중이라면 귀환을 기다려요.',reward:'Lv.2 한 마리 · 첫 이야기 1편',action:matches.length?'merge':'duplicate',uid:d.uid,cta:matches.length?'합칠 친구 고르기':'같은 친구 탄생 준비하기',currency:'dust',cost:1,have:matches.length?1:0,missing:matches.length?0:1};
 }
 if(missing?.id==='furniture'){const price=FURNITURE.find(f=>f.id==='rug').price;return goldGoal({id:'furniture',title:'우리 방의 첫 포근함, 러그',description:'새 게임의 시작 골드로 바로 살 수 있어요. 놓는 순간 효과와 가구 이야기가 함께 열려요.',reward:'폭신한 러그 Lv.1 · 합치기 반짝이 +1',action:'rug',cta:s.gold>=price?`${price} 골드로 러그 사서 놓기`:'골드 모으러 가기'},price);}
 const chapter=ROOM_CHAPTERS.find(c=>c.level<=s.roomLevel&&!s.roomGrowth.claimed.includes(c.level));if(chapter)return {id:'room-memory',title:'새 방의 이야기 · '+chapter.title,description:'함께 키운 방이 새 기억을 들려줘요. 이야기를 읽고 보상 장식을 받아요.',reward:chapter.reward,action:'room-chapter',chapter:chapter.level,cta:'방 이야기와 보상 보기',currency:'free',cost:0,have:0,missing:0};
 if(s.adventureCount===0&&s.adventures.length){const ready=s.adventures.some(q=>now>=q.end);return {id:'adventure',title:ready?'돌아온 친구의 선물 받기':'첫 모험을 다녀오는 중이에요',description:ready?'루미가 친구와 함께 기다려요. 귀환 보상을 받으면 첫 엽서가 모은 먼지에 보관돼요.':'창을 닫아도 모험은 이어져요. 돌아오면 루미를 눌러 친구를 맞이하고 선물을 받아요.',reward:'첫 모험 엽서 · 조합 재료 · 반짝이',action:'adventure',cta:ready?'루미에게 귀환 보상 받기':'모험 소식 보기',currency:'free',cost:0,have:0,missing:0};}
 if(s.adventureCount===0)return {id:'adventure',title:'루미와 첫 모험 준비하기',description:'먼지를 루미 앞으로 옮긴 뒤 출발을 확인해요. 자동으로 떠나지 않아요.',reward:'첫 모험 엽서 · 조합 재료 · 반짝이',action:'adventure',cta:'루미에게 목적지 알아보기',currency:'free',cost:0,have:0,missing:0};
 if(s.roomLevel>=2&&!s.fairyOwned)return sparkleGoal({id:'fairy',title:'골드 모으는 요정 모아 만나기',description:'방에 찾아온 모아를 누르면 준비된 골드를 한 번에 받아요.',reward:'요정 모아 · 골드 모두 받기',action:'shop',cta:s.sparkles>=FAIRY_PRICE?'작은 상점으로':'반짝이 모으러 가기'},FAIRY_PRICE);
 if(s.roomLevel<ROOMS.length){const next=ROOMS[s.roomLevel],chapter=ROOM_CHAPTERS.find(c=>c.level>s.roomLevel);return sparkleGoal({id:'room',title:`방 Lv.${next.level} · ${next.capacity}마리의 자리`,description:`두 자리를 더 내어줘요. ${chapter?'Lv.'+chapter.level+'에 '+chapter.name+'의 이야기가 열려요.':'마지막 방을 완성해요.'}`,reward:`방 +2자리 · ${chapter?chapter.reward:'200자리 완성'}`,action:'room',cta:s.sparkles>=next.cost?'다음 방 살펴보기':'반짝이 모으러 가기'},next.cost);}
 if(!s.fairyOwned)return sparkleGoal({id:'fairy',title:'골드 모으는 요정 모아 만나기',description:'방에 찾아온 모아를 누르면 준비된 골드를 한 번에 받아요.',reward:'요정 모아 · 골드 모두 받기',action:'shop',cta:s.sparkles>=FAIRY_PRICE?'작은 상점으로':'반짝이 모으러 가기'},FAIRY_PRICE);
 return {id:'collection',title:'아직 모르는 친구의 단서 찾기',description:'모은 먼지에서 실루엣과 조합 힌트를 살펴보세요. 무료 랜덤 탄생도 계속할 수 있어요.',reward:'먼지 50종 · 각자의 이야기와 모험 엽서',action:'collection',cta:'모은 먼지 보기',currency:'free',cost:0,have:0,missing:0};
}
