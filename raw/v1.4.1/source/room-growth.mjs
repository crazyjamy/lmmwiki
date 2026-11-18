// 방 레벨에 맞춰 창문·바닥·빛·소품을 조금씩 바꿔 보여주는 장식 레이어.
// 게임 로직과 저장 데이터는 건드리지 않고, 방이 그려질 때마다 겉모습만 덧입혀요.
import{ROOMS,ROOM_TIERS}from'./rooms.mjs?v=1.4.1-1d15f0c9';
const PROPS=[['✦',14,70],['·',30,84],['✧',88,24],['❋',8,40],['✦',92,72],['·',55,10],['✧',40,90],['☾',72,8],['✦',22,16],['❋',60,88]];
function build(level){
 const room=ROOMS[level-1],tier=room.tier,step=room.step,props=PROPS.slice(0,step).map(([g,x,y],i)=>`<i class="rg-prop" style="left:${x}%;top:${y}%;--i:${i}">${g}</i>`).join('');
 const panes=Math.min(4,1+Math.floor((tier-2)/2));
 const windowEl=level>=10?`<div class="rg-window" style="--panes:${panes}"><b></b><b></b><b></b><b></b></div>`:'';
 const attic=level>=50?'<div class="rg-attic"></div>':'';
 const garden=level>=60?'<div class="rg-garden">❋ ✿ ❋</div>':'';
 return `<div class="room-growth" aria-hidden="true" data-tier="${tier}" data-step="${step}" style="--tier-accent:${room.accent};--step:${step}">`+
  `<div class="rg-floor"></div><div class="rg-light"></div>${windowEl}${attic}${garden}${props}</div>`;
}
function decorate(room){
 const m=/room-level-(\d+)/.exec(room.className);if(!m)return;
 const level=Math.max(1,Math.min(ROOMS.length,Number(m[1])));
 room.dataset.tier=String(ROOMS[level-1].tier);
 room.dataset.level=String(level);
 const old=room.querySelector(':scope > .room-growth');
 if(old&&old.dataset.level===String(level))return;
 old?.remove();
 room.insertAdjacentHTML('afterbegin',build(level).replace('<div class="room-growth"',`<div class="room-growth" data-level="${level}"`));
}
function scan(){document.querySelectorAll('.dust-room').forEach(decorate);}
const main=document.getElementById('main');
if(main){new MutationObserver(scan).observe(main,{childList:true});scan();}
