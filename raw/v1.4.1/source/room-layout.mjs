import{FURNITURE_SPOTS}from'./dust-life.mjs?v=1.4.1-1d15f0c9';
import {isAway} from './adventures.mjs?v=1.4.1-1d15f0c9';
export const DEFAULT_DECOR=FURNITURE_SPOTS;
export const insideKeeper=(box,x,y)=>x>=box.left-12&&x<=box.right+12&&y>=box.top-12&&y<=box.bottom+12;
export function initRoomLayout(s){
 if(s.roomPositions===undefined)s.roomPositions={dust:{},furniture:{}};
 for(const type of ['dust','furniture']){
  const map=s.roomPositions?.[type];if(!map||typeof map!=='object'||Array.isArray(map))throw Error('invalid room positions');
  for(const [id,p]of Object.entries(map)){
   const exists=type==='dust'?s.dusts.some(d=>String(d.uid)===id):s.ownedFurniture.includes(id);
   if(!exists||!p||!Number.isFinite(p.x)||!Number.isFinite(p.y)||p.x<5||p.x>95||p.y<5||p.y>95)throw Error('invalid room position');
  }
 }
 return s;
}
export function moveRoomItem(s,type,id,x,y){
 if(!['dust','furniture'].includes(type)||!Number.isFinite(x)||!Number.isFinite(y))return {ok:false};
 const exists=type==='dust'?s.dusts.some(d=>d.uid===Number(id)&&!d.stored&&!isAway(s,d.uid)):s.decorations.includes(id);
 if(!exists)return {ok:false};
 const p={x:Math.round(Math.max(5,Math.min(95,x))*10)/10,y:Math.round(Math.max(5,Math.min(95,y))*10)/10};
 s.roomPositions[type][id]=p;return {ok:true,position:p};
}
