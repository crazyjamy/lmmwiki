// One pointer has one purpose. Rubbing permanently cancels its hold timer.
export const HOLD_MS=650;
export const DRAG_DISTANCE=10;
export function beginGesture(x,y,time,placement=false){return {phase:placement?'moving':'holding',x,y,lastX:x,lastY:y,time,path:0,maxDistance:0};}
export function advanceGesture(g,x,y){const step=Math.hypot(x-g.lastX,y-g.lastY),path=g.path+(step>=.5?step:0),maxDistance=Math.max(g.maxDistance,Math.hypot(x-g.x,y-g.y));return {...g,lastX:x,lastY:y,path,maxDistance,phase:g.phase==='holding'&&(maxDistance>6||path>=10)?'rubbing':g.phase};}
export function armGesture(g,now){return g.phase==='holding'&&now-g.time>=HOLD_MS?{...g,phase:'moving'}:g;}
export const shouldPlace=g=>g.phase==='moving'&&g.maxDistance>=DRAG_DISTANCE;
// The centre must be inside the gate, not merely near its outside edge.
export const insideAdventureGate=(box,x,y)=>x>=box.left+10&&x<=box.right-10&&y>=box.top+12&&y<=box.bottom-8;
