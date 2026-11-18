import{personalPostcard}from'./postcard-voices.mjs?v=1.4.1-1d15f0c9';
import{characterProfile}from'./dust-character.mjs?v=1.4.1-1d15f0c9';
import {DUSTS} from './dust-data.mjs?v=1.4.1-1d15f0c9';

export const FAVORITES=[
 {id:'rug',name:'폭신한 러그',action:'러그 위에서 몸을 동그랗게 말아요.',words:'폭신한 곳에 있으면 마음도 느긋해져.',memory:'처음에는 가장자리만 밟았어요. 오래된 러그의 자수가 늘어날수록 조금씩 가운데로 들어왔고, 이제는 옆자리를 친구에게 내어줘요.'},
 {id:'bookshelf',name:'이야기 책장',action:'책장 앞에서 종이 넘기는 소리를 들어요.',words:'읽지 못하는 글자도 좋은 이야기가 될까?',memory:'책장에 책이 쌓일 때마다 빈칸 하나를 남겼어요. 오늘은 그 빈칸에 자기 이름을 적은 종이를 꽂았어요. 이 방의 이야기에 처음으로 자기 자리가 생겼어요.'},
 {id:'plant',name:'작은 화분',action:'잎사귀가 흔들리는 쪽으로 고개를 기울여요.',words:'오늘은 새잎이 조금 더 커졌어.',memory:'화분이 자라는 동안 매일 잎사귀 하나와 인사했어요. 어느 날 새잎 뒤에 숨은 작은 물방울에서 자기 얼굴을 보았어요. 함께 자라고 있었다는 걸 그제야 알았어요.'},
 {id:'cushion',name:'구름 쿠션',action:'쿠션에 기대어 조용히 낮잠을 자요.',words:'구름을 만지면 이런 느낌일까.',memory:'쿠션의 무늬가 늘어날수록 꿈도 길어졌어요. 혼자 날던 꿈에 친구들이 하나씩 나타났고, 잠에서 깨어도 그 온기는 옆에 남아 있었어요.'},
 {id:'lamp',name:'달빛 조명',action:'조명 아래에서 자기 그림자를 따라가요.',words:'어두운 날에도 내 그림자는 여기 있네.',memory:'처음 켜진 불빛 앞에서는 그림자가 무서웠어요. 조명이 조금씩 달라지는 동안 그림자와 인사하는 법을 배웠어요. 이제는 어두워지는 저녁을 먼저 기다려요.'},
 {id:'teacup',name:'따뜻한 찻잔',action:'찻잔 옆에서 따뜻한 김을 쬐어요.',words:'아무 말 없이 따뜻해도 괜찮아.',memory:'찻잔에 새 무늬가 생긴 날, 오래 품고 있던 말을 하나 꺼냈어요. 아주 작은 목소리였지만 아무도 재촉하지 않았어요. 김이 사라진 뒤에도 그 말은 방에 남았어요.'},
 {id:'basket',name:'모험 바구니',action:'바구니 속 작은 물건을 하나씩 살펴봐요.',words:'다음 모험에는 무엇을 담아올까?',memory:'빈 바구니에서 시작한 작은 수집은 길 위의 잎, 돌, 편지로 늘어났어요. 가장 깊은 곳에는 아무것도 담지 않았어요. 다음에 함께 갈 친구의 자리를 남겨둔 거예요.'},
 {id:'windchime',name:'바람 종',action:'종소리에 맞춰 몸을 살짝 흔들어요.',words:'바람이 우리 이름을 부르고 있어.',memory:'처음에는 바람이 불 때만 종을 바라봤어요. 장식이 늘어난 뒤에는 바람이 없는 날에도 그 아래에 앉았어요. 다시 들릴 소리를 기다리는 시간도 좋아졌어요.'},
 {id:'hourglass',name:'별 모래시계',action:'떨어지는 모래를 하나씩 세어봐요.',words:'천천히 지나가는 시간도 좋아.',memory:'처음에는 모래가 다 떨어질까 봐 마음을 졸였어요. 시계가 자랄수록 기다림 사이의 작은 일들을 보게 됐어요. 모래가 멈춘 뒤에도 함께할 시간은 남아 있었어요.'},
 {id:'musicbox',name:'작은 오르골',action:'오르골 가락에 맞춰 작게 춤을 춰요.',words:'다음 소절은 네가 불러줄래?',memory:'처음에는 혼자 흥얼거렸어요. 오르골의 장식이 늘 때마다 음 하나에 친구의 이름을 붙였어요. 이제 끝나지 않는 노래에는 이 방의 친구들이 모두 들어 있어요.'}
];
const MOODS=[
 {name:'조용한 관찰자',idle:'창문을 따라 움직이는 빛을 한참 바라봤어요.'},
 {name:'수줍은 다정함',idle:'친구에게 건넬 작은 인사를 연습했어요.'},
 {name:'호기심 수집가',idle:'바닥 틈에서 처음 보는 무늬를 발견했어요.'},
 {name:'느긋한 꿈꾸미',idle:'동그란 그림자 안에서 짧은 낮잠을 잤어요.'},
 {name:'장난꾸러기',idle:'자기 그림자와 누가 더 멀리 뛰나 시합했어요.'}
];
const favoriteOrder=[0,3,1,7,4,8,5,5,2,2,3,1,6,9,2,4,6,5,8,9];
export function personality(id){const i=DUSTS.findIndex(d=>d.id===id);if(i<0)throw Error('unknown dust');const favorite=FAVORITES[favoriteOrder[i]??((i*7+3)%10)],mood=MOODS[(i*3)%5];const c=characterProfile(id);return {favorite:c?{...favorite,action:c.action,words:c.words}:favorite,mood,index:i};}
export const DEFAULT_SPOTS=[[45,40],[22,52],[66,54],[36,62],[58,23],[15,26],[76,29],[49,65],[72,68]];
export const FURNITURE_SPOTS={rug:{x:50,y:66},plant:{x:9,y:52},lamp:{x:89,y:45},cushion:{x:80,y:84},bookshelf:{x:20,y:27},teacup:{x:28,y:78},basket:{x:84,y:60},windchime:{x:45,y:18},hourglass:{x:76,y:40},musicbox:{x:65,y:86}};
const residents=s=>s.dusts.filter(d=>!d.stored&&!s.adventures.some(q=>q.uid===d.uid)&&s.deskRun?.uid!==d.uid);
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const lookup=id=>DUSTS.find(d=>d.id===id);
const topic=id=>{const name=lookup(id).name;return name+((name.charCodeAt(name.length-1)-44032)%28?'은':'는');};
export function roomSpot(s,d,index=residents(s).findIndex(x=>x.uid===d.uid)){
 const saved=s.roomPositions.dust[d.uid];if(saved)return saved;
 const like=personality(d.id).favorite.id;if(residents(s).length<=9&&s.decorations.includes(like)){const p=s.roomPositions.furniture[like]||FURNITURE_SPOTS[like];return {x:Math.max(8,Math.min(92,p.x+(d.uid%2?8:-8))),y:Math.min(90,p.y+7)};}
 const count=residents(s).length,cols=Math.ceil(Math.sqrt(count*1.25)),rows=Math.ceil(count/cols),p=count>9?[9+(index%cols)*80/Math.max(1,cols-1),24+Math.floor(index/cols)*65/Math.max(1,rows-1)]:DEFAULT_SPOTS[index]||[50,50];return {x:p[0],y:p[1]};
}
export function nearFavorite(s,d){if(!residents(s).some(x=>x.uid===d.uid))return false;const id=personality(d.id).favorite.id;return s.decorations.includes(id)&&dist(roomSpot(s,d),s.roomPositions.furniture[id]||FURNITURE_SPOTS[id])<=18;}
export function companionship(s,d){if(!residents(s).some(x=>x.uid===d.uid))return null;const other=residents(s).find(x=>x.uid!==d.uid&&dist(roomSpot(s,d),roomSpot(s,x))<=14);if(!other)return null;const nap=personality(d.id).favorite.id===personality(other.id).favorite.id||[d,other].some(x=>personality(x.id).mood.name==='느긋한 꿈꾸미');return {other,kind:nap?'nap':'play',label:nap?'나란히 낮잠 중':'그림자 놀이 중'};}
export function recipeHint(id){const d=lookup(id);const essence={leaf:'풀잎이 흔들리는 틈',spark:'따뜻한 햇살 한 조각',moon:'조용한 달빛 아래',dew:'새벽 이슬이 맺힌 자리',ember:'꺼지지 않은 작은 온기',stardust:'밤하늘에서 떨어진 별가루'}[d.essence];return `${essence}에서 ${d.group==='daily'?'포근한':d.group==='pop'?'몽글한':'반짝이는'} 기운을 모아보세요. ${d.rarity==='common'?'평범한 순간':d.rarity==='rare'?'조금 특별한 순간':'아주 드문 순간'}을 기다리는 친구예요.`;}
export function initLife(s,now=Date.now()){
 if(s.life===undefined)s.life={version:1,lastSeen:now,nextId:1,journal:[],postcards:[],memories:[],pairs:[],requests:{},welcome:null};
 const l=s.life;
 if(l.version!==1||!Number.isFinite(l.lastSeen)||l.lastSeen<0||!Number.isSafeInteger(l.nextId)||l.nextId<1)throw Error('invalid life');
 for(const key of ['journal','postcards','memories','pairs'])if(!Array.isArray(l[key])||l[key].length>(key==='journal'?120:key==='postcards'?200:10000))throw Error('invalid life list');
 for(const e of l.journal)if(!Number.isSafeInteger(e.id)||e.id<1||e.id>=l.nextId||!Number.isFinite(e.at)||typeof e.seen!=='boolean'||!['offline','favorite','friend','wish','postcard'].includes(e.kind)||typeof e.title!=='string'||e.title.length>200||typeof e.text!=='string'||e.text.length>2000)throw Error('invalid life entry');
 for(const p of l.postcards)if(!lookup(p.dustId)||!['bookshelf','window','moonpath'].includes(p.route)||p.id!==p.dustId+':'+p.route||typeof p.title!=='string'||p.title.length>200||typeof p.text!=='string'||p.text.length>2000||!Number.isFinite(p.at))throw Error('invalid postcard');
 for(const key of ['memories','pairs'])if(l[key].some(x=>typeof x!=='string'||x.length>100)||new Set(l[key]).size!==l[key].length)throw Error('invalid discoveries');
 if(new Set(l.postcards.map(x=>x.id)).size!==l.postcards.length||new Set(l.journal.map(x=>x.id)).size!==l.journal.length||!l.requests||typeof l.requests!=='object'||Array.isArray(l.requests)||Object.entries(l.requests).some(([k,v])=>!/^\d+$/.test(k)||!Number.isSafeInteger(v)||v<0))throw Error('invalid life claims');
 if(l.welcome!==null&&(!Number.isSafeInteger(l.welcome)||!l.journal.some(x=>x.id===l.welcome)))l.welcome=null;
 return s;
}
function record(s,kind,title,text,now){const e={id:s.life.nextId++,kind,title,text,at:now,seen:false};s.life.journal.unshift(e);s.life.journal=s.life.journal.slice(0,120);return e;}
export function observeLife(s,now=Date.now()){
 initLife(s,now);const events=[];
 for(const d of residents(s)){
  const p=personality(d.id),key=String(d.uid);
  if(nearFavorite(s,d)&&(s.furnitureLevels[p.favorite.id]||1)>=3&&!s.life.memories.includes(key)){s.life.memories.push(key);events.push(record(s,'favorite',lookup(d.id).name+'의 오래된 자리',p.favorite.memory,now));}
  const pair=companionship(s,d);if(pair){const key=[d.uid,pair.other.uid].sort((a,b)=>a-b).join(':');if(!s.life.pairs.includes(key)){s.life.pairs.push(key);events.push(record(s,'friend','둘이 함께한 첫 순간',`${lookup(d.id).name}와 ${lookup(pair.other.id).name}, ${pair.kind==='nap'?'서로의 온기에 기대어 나란히 잠들었어요.':'서로의 그림자를 따라 빙글빙글 놀았어요.'}`,now));}}
 }
 return events;
}
export const localDay=now=>Math.floor((now+9*3600000)/86400000);
export function smallWish(s,d,now=Date.now()){
 const day=localDay(now),p=personality(d.id);let kind=(day+d.uid)%3;if(kind===2&&residents(s).length<2)kind=1;
 const text=kind===0?`${p.favorite.name} 곁에 있고 싶어.`:kind===1?'오늘은 햇살이 드는 창가에 있고 싶어.':'다른 친구와 가까이 있고 싶어.';
 const ready=kind===0?nearFavorite(s,d):kind===1?residents(s).some(x=>x.uid===d.uid)&&dist(roomSpot(s,d),{x:68,y:22})<=14:!!companionship(s,d);
 return {day,kind,text,ready,done:s.life.requests[d.uid]===day,reward:3};
}
export function claimWish(s,uid,now=Date.now()){
 initLife(s,now);const d=residents(s).find(x=>x.uid===uid);if(!d)return {ok:false,message:'방에서 함께하는 먼지의 부탁을 들어주세요.'};const w=smallWish(s,d,now);if(w.done||!w.ready)return {ok:false,message:w.done?'오늘의 고마움은 이미 받았어요.':'원하는 자리로 옮겨주면 고마움을 전할 거예요.'};
 s.life.requests[uid]=w.day;s.sparkles+=w.reward;record(s,'wish',lookup(d.id).name+'의 작은 고마움','“'+w.text+'” 그 작은 마음을 알아주었어요. 반짝이 3개를 나누었어요.',now);return {ok:true,amount:w.reward};
}
const LETTERS={
 bookshelf:[['잎맥 사이의 길','풀잎의 줄을 따라 한참 걸었어요. 길의 끝보다 길 위에서 들리던 사각거림이 오래 기억날 것 같아요.'],['먼저 건넨 인사','잎 아래 숨어 있던 친구에게 조심스럽게 인사했어요. 대답 대신 작은 풀잎을 건네받았어요. 말이 없어도 반가운 마음은 전해졌어요.'],['주머니 속 지도','잎 뒷면에 길을 그려왔어요. 모퉁이마다 다른 무늬가 있었어요. 다음번에는 아직 그리지 못한 빈칸도 찾아보고 싶어요.'],['숲의 베개','나뭇잎 위에 누웠더니 바람이 천천히 흔들어줬어요. 짧게 잤는데도 아주 긴 여행을 다녀온 기분이에요.'],['풀잎과 숨바꼭질','잎 뒤에 숨었다가 내 그림자에게 먼저 들켰어요. 숲이 사각사각 웃는 것 같아서 나도 소리 없이 웃었어요.']],
 window:[['빛이 지나간 자리','창틀을 따라 움직이는 빛을 기다렸어요. 아무 일도 없는 줄 알았는데 돌아볼 때마다 바닥의 색이 달라져 있었어요.'],['유리 너머의 안부','유리에 비친 나에게 먼저 손을 흔들었어요. 바깥의 새도 고개를 기울였어요. 집에 오면 너에게도 먼저 인사하고 싶었어요.'],['바람을 담는 방법','바람을 주머니에 담아오려 했어요. 아무것도 남지 않았지만, 대신 창가 냄새를 오래 기억하고 있어요.'],['오후의 눈꺼풀','햇살이 눈꺼풀을 덮어줬어요. 밖으로 가지 않아도 멀리 다녀온 꿈을 꿀 수 있다는 걸 알았어요.'],['햇살 꼬리잡기','창틀 위 햇살을 쫓았어요. 잡을 때마다 한 칸 옆으로 도망갔지만 집으로 가는 길까지 밝게 비춰줬어요.']],
 moonpath:[['조용한 별의 대답','작은 별을 보며 한참 서 있었어요. 아무 말도 듣지 못했는데 묻고 싶던 마음이 조금 가벼워졌어요.'],['밤에 보내는 편지','달에게 너의 안부를 전했어요. 달이 조금 밝아진 것 같았어요. 혹시 창문으로 대답이 오면 알려줘요.'],['이름 없는 별자리','아직 이름 없는 별들을 이어봤어요. 우리 방 모양과 닮아서 혼자만 아는 귀갓길 지도를 만들었어요.'],['달구름의 담요','달구름 위에서 잠깐 쉬었어요. 손에 잡히지 않는 담요였지만 집의 쿠션처럼 포근했어요. 다음에는 함께 쉬고 싶어요.'],['별과 작은 시합','별과 누가 먼저 눈을 깜박이나 시합했어요. 내가 졌지만 별이 반짝이를 조금 나눠줬어요. 다음엔 꼭 이겨볼 거예요.']]
};
export function keepPostcard(s,d,route,now=Date.now()){
 initLife(s,now);const id=d.id+':'+route;if(s.life.postcards.some(p=>p.id===id))return {postcard:s.life.postcards.find(p=>p.id===id),isNew:false};
 const p=personality(d.id),[title,text]=LETTERS[route][(p.index*3)%5];const memory=s.life.memories.includes(String(d.uid))?` 돌아오면 ${p.favorite.name} 곁에서 이 이야기를 들려줄게요.`:'';
 const postcard={id,dustId:d.id,route,title,text:personalPostcard(d.id,route,text)+memory,at:now};s.life.postcards.unshift(postcard);record(s,'postcard',lookup(d.id).name+'에게서 온 엽서',title,now);return {postcard,isNew:true};
}
export function resumeLife(s,now=Date.now()){
 initLife(s,now);const gap=now-s.life.lastSeen;s.life.lastSeen=now;if(gap<60000)return null;
 const friends=residents(s).slice(0,3),parts=friends.map(d=>{const p=personality(d.id),pair=companionship(s,d);return topic(d.id)+(pair?` ${lookup(pair.other.id).name} 곁에서 ${pair.kind==='nap'?'나란히 잠을 잤어요.':'그림자 놀이를 했어요.'}`:nearFavorite(s,d)?` ${p.favorite.action}`:` ${p.mood.idle}`);});
 if(!parts.length)parts.push(s.adventures.length?'루미가 작은 지도를 펴고 모험을 떠난 친구들의 귀갓길을 살폈어요.':'보관함의 친구들이 각자의 꿈을 꾸며 다음 만남을 기다렸어요.');
 const entry=record(s,'offline','네가 없는 동안에도',parts.join('\n'),now);s.life.welcome=entry.id;return entry;
}
export function readLife(s){for(const e of s.life.journal)e.seen=true;s.life.welcome=null;}
