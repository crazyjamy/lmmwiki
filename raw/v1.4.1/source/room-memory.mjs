export const ROOM_MEMORY=[
 {title:'아무도 부르지 않던 방',body:'작은 쉼터의 바닥에는 희미한 동그라미가 남아 있었어요. 누군가 오래 기다렸던 자리 같았죠. 꼬물이는 그 안에 앉아 작은 소리를 들었어요. “여기가 누구의 집이었는지, 같이 기억해줄래?” 방은 세 가지 온기를 기다리고 있었어요.',condition:'처음부터 읽을 수 있어요'},
 {title:'첫 숨의 온기',body:'두 먼지가 온기를 나누며 하나로 몽글하게 자랐어요. 몸이 커진 자리만큼 바닥의 동그라미도 환해졌죠. 그제야 먼지는 알았어요. 이 자국은 누가 떠난 흔적이 아니라, 작은 친구가 처음 자랐던 자리였어요. 방은 첫 숨을 기억했어요.',condition:'먼지 한 마리를 Lv.2까지 키우기'},
 {title:'남겨둔 자리',body:'가구를 한 단계 고쳐준 날, 낡은 틈에서 실 한 가닥이 나왔어요. 먼지는 실을 바닥의 동그라미 곁에 놓았어요. 누군가 돌아오면 편히 쉬게 하려고 오래 손질하던 자리였대요. 처음 자란 친구에게, 이제 돌아와 기댈 곳이 생겼어요.',condition:'가구 아무거나 Lv.2로 업그레이드하기'},
 {title:'문밖에서 가져온 바람',body:'모험에서 돌아온 먼지가 선물과 함께 작은 바람을 데려왔어요. 문이 열리자 실 한 가닥이 천천히 흔들렸죠. 바람은 기억하고 있었어요. 이 방에서 자란 친구들이 바깥을 구경하고, 꼭 다시 돌아왔다는 것을요. 동그라미와 실과 바람이 하나의 기억이 되었어요.',condition:'모험을 마치고 루미에게 귀환 보상 받기'},
 {title:'돌아올 집이라는 이름',body:'먼지들은 실 끝에 작은 별을 매달았어요. 문이 열릴 때마다 흔들리는 귀가의 별모빌이 되었죠. 이 방은 잊힌 집이 아니었어요. 누군가 자라고, 자리를 돌보고, 다시 돌아올 때마다 새로 완성되는 집이었어요. 작은 쉼터는 마침내 자기 이름을 떠올렸어요. “너희가 돌아오는 곳.”',condition:'앞의 기억을 모두 읽으면 완성돼요'}
];
export function initRoomMemory(s){
 if(s.roomMemory===undefined)s.roomMemory={version:1,unlocked:[],read:[],claimed:false,placed:false};
 const m=s.roomMemory;
 if(!m||m.version!==1||!Array.isArray(m.unlocked)||!Array.isArray(m.read)||!['claimed','placed'].every(k=>typeof m[k]==='boolean'))throw Error('invalid room memory');
 for(const [key,max]of[['unlocked',3],['read',4]])if(new Set(m[key]).size!==m[key].length||!m[key].every(i=>Number.isInteger(i)&&i>=0&&i<=max))throw Error('invalid memory chapters');
 if(m.read.some((v,i)=>v!==i)||m.read.some(i=>i>0&&i<4&&!m.unlocked.includes(i))||m.claimed!==m.read.includes(4)||m.placed&&!m.claimed)throw Error('invalid memory progress');
 return syncRoomMemory(s);
}
export function syncRoomMemory(s){const m=s.roomMemory;if(!m)return s;const done=[true,s.dusts.some(d=>d.xp>=2),Object.values(s.furnitureLevels||{}).some(l=>l>=2),s.adventureCount>0];done.forEach((yes,i)=>{if(yes&&!m.unlocked.includes(i))m.unlocked.push(i);});m.unlocked.sort();return s;}
export function memoryProgress(s){syncRoomMemory(s);const m=s.roomMemory,next=m.read.length;return {pieces:m.unlocked.filter(i=>i>0).length,read:m.read.length,next,canRead:next===0||next===4?next===0||m.unlocked.length===4:m.unlocked.includes(next),complete:m.claimed};}
export function readRoomMemory(s,index){const p=memoryProgress(s),m=s.roomMemory;if(!Number.isInteger(index)||index<0||index>4)return {ok:false};if(m.read.includes(index))return {ok:true,reward:false,chapter:ROOM_MEMORY[index]};if(index!==p.next||!p.canRead)return {ok:false};m.read.push(index);if(index===4){m.claimed=true;m.placed=true;}return {ok:true,reward:index===4,chapter:ROOM_MEMORY[index]};}
export function toggleMemoryDecor(s){if(!s.roomMemory.claimed)return false;s.roomMemory.placed=!s.roomMemory.placed;return true;}
