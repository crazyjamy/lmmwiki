export const LEGACY_ROOMS=[
 {name:'작은 쉼터',cost:0,bonus:0,color:'#f2f2e9',capacity:6,storage:20,storyTitle:'바닥의 작은 동그라미',story:'처음에는 아무것도 없는 바닥이었어요. 먼지 하나가 앉고, 다른 먼지가 그 옆에 몸을 누였어요. 둘 사이에 생긴 작은 빈틈을 두고 누군가 집이라고 불렀어요. 가장 작은 쉼터의 이야기는 그렇게 시작되었어요.'},
 {name:'햇살이 드는 방',cost:80,bonus:10,color:'#f7f0dc',capacity:9,storage:40,storyTitle:'문틈으로 온 아침',story:'닫힌 줄 알았던 문틈으로 아침 햇살이 들어왔어요. 먼지들은 빛이 닿는 곳을 조금씩 넓혀가며 앉았어요. 혼자만 따뜻한 자리에 있지 않아도 된다는 걸 알게 된 날, 이 방에는 창문이 생겼어요.'},
 {name:'초록빛 아지트',cost:220,bonus:20,color:'#eaf0df',capacity:12,storage:70,storyTitle:'잎사귀가 들려준 주소',story:'모험을 다녀온 먼지가 작은 잎사귀를 문 옆에 놓았어요. 뒤따라온 친구들은 그 잎을 이정표 삼아 방을 찾았어요. 새로 온 친구에게 자리를 내줄 때마다 벽에 초록빛이 한 겹씩 더해졌어요.'},
 {name:'별빛 다락방',cost:480,bonus:35,color:'#ebe8f4',capacity:18,storage:120,storyTitle:'낮은 천장의 별자리',story:'다락방 천장에 반짝이가 하나 붙었어요. 먼지들이 저마다 소중한 기억을 얹어놓자 빛들은 별자리처럼 이어졌어요. 길고 멀었던 모험도 이 천장 아래에서는 조용히 쉬어가는 이야기가 되었어요.'},
 {name:'바람의 온실',cost:900,bonus:50,color:'#e3eee6',capacity:24,storage:180,storyTitle:'멀리 가지 않는 바람',story:'한때 먼지를 멀리 데려가던 바람이 이번에는 창가에서 멈췄어요. 밖을 궁금해하는 친구에게는 길을, 돌아오는 친구에게는 향기를 전해주고 싶었대요. 열린 창이 있어도 아무도 외롭지 않은 온실이 되었어요.'},
 {name:'달구름의 집',cost:1500,bonus:70,color:'#e7e5f1',capacity:30,storage:250,storyTitle:'돌아올 자리가 있는 우주',story:'먼지들은 달구름 위에 집을 세웠어요. 더 멀리 보려는 집이 아니라 더 많은 친구의 귀가를 기다리는 집이었어요. 오늘도 문 앞의 루미는 작은 지도를 펴고, 모아는 돌아온 반짝임을 세어요. 누구에게나 돌아올 자리가 있는 우주예요.'}
];

export const MAX_ROOM_LEVEL=100;
export const ROOM_TIERS=[
 {name:'작은 쉼터',color:'#f2f2e9',accent:'#cfd3bd',storyTitle:'바닥의 작은 동그라미',story:'처음에는 아무것도 없는 바닥이었어요. 먼지 하나가 앉고, 다른 먼지가 그 옆에 몸을 누였어요. 둘 사이에 생긴 작은 빈틈을 두고 누군가 집이라고 불렀어요. 가장 작은 쉼터의 이야기는 그렇게 시작되었어요.'},
 {name:'햇살이 드는 방',color:'#f7f0dc',accent:'#ecd9a0',storyTitle:'문틈으로 온 아침',story:'닫힌 줄 알았던 문틈으로 아침 햇살이 들어왔어요. 먼지들은 빛이 닿는 곳을 조금씩 넓혀가며 앉았어요. 혼자만 따뜻한 자리에 있지 않아도 된다는 걸 알게 된 날, 이 방에는 창문이 생겼어요.'},
 {name:'초록빛 아지트',color:'#eaf0df',accent:'#b9d09a',storyTitle:'잎사귀가 들려준 주소',story:'모험을 다녀온 먼지가 작은 잎사귀를 문 옆에 놓았어요. 뒤따라온 친구들은 그 잎을 이정표 삼아 방을 찾았어요. 새로 온 친구에게 자리를 내줄 때마다 벽에 초록빛이 한 겹씩 더해졌어요.'},
 {name:'별빛 다락방',color:'#ebe8f4',accent:'#c4b9e0',storyTitle:'낮은 천장의 별자리',story:'다락방 천장에 반짝이가 하나 붙었어요. 먼지들이 저마다 소중한 기억을 얹어놓자 빛들은 별자리처럼 이어졌어요. 길고 멀었던 모험도 이 천장 아래에서는 조용히 쉬어가는 이야기가 되었어요.'},
 {name:'바람의 온실',color:'#e3eee6',accent:'#a8d2bd',storyTitle:'멀리 가지 않는 바람',story:'한때 먼지를 멀리 데려가던 바람이 이번에는 창가에서 멈췄어요. 밖을 궁금해하는 친구에게는 길을, 돌아오는 친구에게는 향기를 전해주고 싶었대요. 열린 창이 있어도 아무도 외롭지 않은 온실이 되었어요.'},
 {name:'달구름의 집',color:'#e7e5f1',accent:'#bdb6e0',storyTitle:'돌아올 자리가 있는 우주',story:'먼지들은 달구름 위에 집을 세웠어요. 더 멀리 보려는 집이 아니라 더 많은 친구의 귀가를 기다리는 집이었어요. 오늘도 문 앞의 루미는 작은 지도를 펴고, 모아는 돌아온 반짝임을 세어요. 누구에게나 돌아올 자리가 있는 우주예요.'},
 {name:'꿈결 정원',color:'#f1e6ee',accent:'#e3b8cf',storyTitle:'밤에만 피는 꽃밭',story:'낮에는 보이지 않던 꽃밭이 밤마다 방 한쪽에서 피어났어요. 먼지들은 꿈에서 가져온 씨앗을 조심스럽게 심었어요. 아침이 와도 시들지 않는 꽃은, 함께 잠든 친구들의 숨결을 먹고 자랐대요.'},
 {name:'하늘 테라스',color:'#e0edf3',accent:'#9fcbe0',storyTitle:'구름 위의 난간',story:'방이 점점 높아져 어느새 구름과 같은 높이가 되었어요. 먼지들은 난간에 나란히 기대어 아래의 작은 불빛들을 내려다보았어요. 멀리 보아도 돌아갈 곳이 보이는 건, 이 방이 가장 밝게 빛나기 때문이에요.'},
 {name:'별무리 서재',color:'#e9e6f0',accent:'#aaa6d6',storyTitle:'별이 쌓인 책장',story:'지난 이야기들이 책이 되어 서재의 벽을 채웠어요. 먼지들은 읽은 이야기마다 작은 별을 꽂아 두었죠. 어느 날 가장 높은 칸의 책이 스스로 펼쳐지며 말했어요. “아직 쓰지 않은 페이지가 남았어.”'},
 {name:'먼지들의 마을',color:'#f4efdd',accent:'#e6cd85',storyTitle:'모두가 돌아오는 저녁',story:'방은 이제 방이 아니라 마을이 되었어요. 골목마다 작은 불이 켜지고, 모험에서 돌아온 먼지들이 서로의 이름을 불러요. 가장 처음 이곳에 앉았던 꼬물이가 창가에서 속삭였어요. “여기가 우리가 돌아오는 곳이야.”'}
];

export const ROOM_CHAPTERS=[
 {level:10,name:'햇살이 드는 방',color:'#f7f0dc',title:'처음 열린 창문',body:'먼지들이 나란히 기대자 닫혀 있던 창문이 조금 열렸어요. 바닥의 따뜻한 선은 밖으로 이어지는 길이었죠. 창가에서 주운 햇살을 작은 주머니에 담았어요.',reward:'햇살 정수 3개 · 열린 창 장식',essence:'spark',decor:'window'},
 {level:20,name:'초록빛 아지트',color:'#eaf0df',title:'잎사귀가 가리킨 길',body:'창문으로 날아온 잎사귀가 루미의 지도에 내려앉았어요. 잎맥을 따라가니 햇살 창가로 가는 두 번째 길이 나타났죠. 새 길에서 돌아올 친구를 위해 초록빛 표식을 달았어요.',reward:'햇살 창가 모험 · 잎사귀 표식',decor:'leaf'},
 {level:30,name:'바람이 머무는 방',color:'#e4eee8',title:'문을 두드린 작은 손님',body:'똑똑. 낯선 먼지가 문틈에서 인사했어요. 떠돌며 모은 작은 정수 하나를 나누어주고 싶었대요. 먼지들은 문 앞에 쉬어갈 자리를 만들었어요. 하루에 한 번 다른 손님이 안부를 전해요.',reward:'하루 한 번 손님 · 안부 정수 1개',decor:'welcome'},
 {level:40,name:'꽃그늘 쉼터',color:'#f2e8e9',title:'빈 벽에 피어난 잎',body:'먼지들이 모험에서 본 색을 하나씩 벽에 옮겼어요. 화분 잎의 초록, 분홍 친구의 볼, 돌아오는 저녁빛이 작은 그림이 되었죠. 멀리 다녀오지 않은 날에도 방 안에서 봄을 만날 수 있어요.',reward:'꽃그늘 액자 장식',decor:'flower'},
 {level:50,name:'별빛 다락방',color:'#ebe8f4',title:'낮은 천장 너머의 별',body:'천장에서 반짝이가 떨어졌어요. 루미가 올려다본 곳에는 작은 다락문이 있었죠. 친구들이 서로의 등을 기대어 문을 열자 별들을 바라보는 아늑한 자리가 나타났어요. 밤에도 돌아올 집의 빛은 꺼지지 않아요.',reward:'다락 공간 외형 · 다락 별자리',decor:'stars'},
 {level:60,name:'등불의 서재',color:'#efe5d9',title:'기다리는 빛의 자리',body:'책장을 읽던 친구가 늦게 돌아오는 이들을 생각했어요. 길 끝에 작고 따뜻한 등을 걸어주었죠. 먼저 잠든 먼지 곁에서도 등불은 조용히 숨 쉬었어요. 기다림도 누군가를 돌보는 방법이었어요.',reward:'귀가의 등불 장식',decor:'lantern'},
 {level:70,name:'바람의 온실',color:'#e3eee6',title:'모두 다른 잎사귀',body:'같은 햇살을 받아도 화분의 잎은 모두 다른 방향으로 자랐어요. 먼지들은 그 모습을 오래 바라보았죠. 서로 다른 취향으로도 한 방을 채울 수 있다는 걸, 온실은 잎사귀로 말해주었어요. 잎 그늘 너머로 달빛 다락길이 이어졌어요.',reward:'달빛 다락길 모험 · 온실 리스 · 조합 단서',decor:'wreath'},
 {level:80,name:'노을 우체국',color:'#f4e5d9',title:'엽서가 머무는 벽',body:'먼지들이 가져온 엽서를 한 줄로 걸었어요. 누군가의 모험이 다른 친구에게는 다음 여행의 시작이 되었죠. 방 안을 한 바퀴 돌면 서로의 하루를 여행할 수 있었어요.',reward:'안부 엽서 줄 장식',decor:'letters'},
 {level:90,name:'달구름의 집',color:'#e7e5f1',title:'돌아올 자리가 있는 우주',body:'처음의 작은 동그라미는 어느새 수많은 귀가를 기다리는 집이 되었어요. 먼지들은 구름 모양의 문패를 달았죠. 어디까지 멀리 가더라도, 우리에게는 다시 부를 이름이 있어요.',reward:'달구름 문패 장식',decor:'moon'},
 {level:100,name:'우리들의 작은 우주',color:'#e6e8f3',title:'집은 매일 새로 태어나요',body:'마지막 문이 열렸지만 이야기는 끝나지 않았어요. 처음 앉았던 먼지와 오늘 찾아온 친구가 같은 빛 아래 몸을 기댔죠. 이백 개의 자리는 숫자가 아니라, 함께할 하루의 약속이었어요. 집은 돌아오는 친구마다 매일 새로 태어나요.',reward:'완성 이야기 · 귀가의 은하수 특별 장식',decor:'galaxy'}
];
export const ROOMS=Array.from({length:100},(_,i)=>{const level=i+1,t=Math.min(9,Math.floor(level/10)),tier=ROOM_TIERS[t],step=level%10;return {level,name:tier.name,cost:level<=6?LEGACY_ROOMS[level-1].cost:Math.round(1500*(1+(level-6)*.15)),bonus:level<=6?LEGACY_ROOMS[level-1].bonus:Math.round(70+(level-6)*.5),color:tier.color,accent:tier.accent,capacity:level*2,storage:level<=6?LEGACY_ROOMS[level-1].storage:250+(level-6)*10,theme:t,tier:t+1,step,detail:step,storyTitle:tier.storyTitle,story:tier.story};});
for(const c of ROOM_CHAPTERS){const r=ROOMS[c.level-1];c.name=r.name;c.color=r.color;}
export function initRoomGrowth(s){
 if(s.roomGrowth===undefined){
  const priorLevel=s.roomLevel,legacy=LEGACY_ROOMS[(priorLevel||1)-1];
  if(priorLevel!==undefined&&(!Number.isInteger(priorLevel)||priorLevel<1||priorLevel>100))throw Error('invalid prior room');
  s.roomLevel=priorLevel||1;
  s.roomGrowth={version:1,legacyTheme:priorLevel!==undefined&&legacy?LEGACY_ROOMS.indexOf(legacy):-1,legacyBonus:priorLevel!==undefined&&legacy?legacy.bonus:0,legacyStorage:priorLevel!==undefined&&legacy?legacy.storage:0,legacyRoutes:priorLevel!==undefined,read:[],claimed:[],decor:0,guestDay:-1};
 }
 const p=s.roomGrowth;
 if(!p||p.version!==1||!Number.isInteger(s.roomLevel)||s.roomLevel<1||s.roomLevel>100||!Number.isInteger(p.legacyTheme)||p.legacyTheme< -1||p.legacyTheme>5||!Number.isInteger(p.legacyBonus)||p.legacyBonus<0||p.legacyBonus>70||!Number.isInteger(p.legacyStorage)||p.legacyStorage<0||p.legacyStorage>250||typeof p.legacyRoutes!=='boolean'||!Number.isSafeInteger(p.guestDay)||p.guestDay< -1)throw Error('invalid room growth');
 for(const k of ['read','claimed'])if(!Array.isArray(p[k])||new Set(p[k]).size!==p[k].length||!p[k].every(n=>ROOM_CHAPTERS.some(c=>c.level===n)&&n<=s.roomLevel))throw Error('invalid room rewards');
 if(!Number.isInteger(p.decor)||p.decor!==0&&!p.claimed.includes(p.decor)||p.claimed.some(n=>!p.read.includes(n)))throw Error('invalid room decor');
 return s;
}
export function currentRoom(s){const base=ROOMS[s.roomLevel-1],p=s.roomGrowth,legacy=LEGACY_ROOMS[p?.legacyTheme],preserve=legacy&&base.theme<p.legacyTheme;return {...base,name:preserve?legacy.name:base.name,color:preserve?legacy.color:base.color,bonus:Math.max(base.bonus,p?.legacyBonus||0),storage:Math.max(base.storage,p?.legacyStorage||0)};}
export const roomCapacity=s=>ROOMS[s.roomLevel-1].capacity;
export const storageCapacity=s=>currentRoom(s).storage;
export const homeCount=s=>s.dusts.filter(d=>!d.stored).length;
export const storedCount=s=>s.dusts.filter(d=>d.stored).length;
export const hasHomeSpace=s=>homeCount(s)<roomCapacity(s);
export const hasStorageSpace=s=>storedCount(s)<storageCapacity(s);
export const routeUnlockLevel=id=>({bookshelf:1,window:20,moonpath:70}[id]||1);
export const routeUnlocked=(s,id)=>!!s.roomGrowth?.legacyRoutes||s.roomLevel>=routeUnlockLevel(id);
export function readRoomChapter(s,n){if(!ROOM_CHAPTERS.some(c=>c.level===n)||s.roomLevel<n)return false;if(!s.roomGrowth.read.includes(n))s.roomGrowth.read.push(n);return true;}
export function claimRoomChapter(s,n){const c=ROOM_CHAPTERS.find(c=>c.level===n);if(!c||s.roomLevel<n||!s.roomGrowth.read.includes(n)||s.roomGrowth.claimed.includes(n))return {ok:false};if(c.essence)s.materials.essence[c.essence]+=3;s.roomGrowth.claimed.push(n);s.roomGrowth.decor=n;return {ok:true,chapter:c};}
export function equipRoomDecor(s,n){if(n!==0&&!s.roomGrowth.claimed.includes(n))return false;s.roomGrowth.decor=n;return true;}
export function roomGuest(s,now=Date.now()){if(s.roomLevel<30)return null;const day=Math.floor((now+9*3600000)/86400000);return {day,index:day%5,ready:s.roomGrowth.guestDay!==day};}
export function claimRoomGuest(s,now=Date.now()){const v=roomGuest(s,now);if(!v?.ready)return {ok:false};const essence=['leaf','spark','moon','dew','ember'][v.index];s.materials.essence[essence]++;s.roomGrowth.guestDay=v.day;return {ok:true,essence};}
