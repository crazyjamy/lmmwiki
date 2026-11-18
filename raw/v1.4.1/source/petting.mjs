// Gesture state is temporary. Currency is credited only after real movement inside a dust.
export function withinPetArea(rect,x,y){const rx=Math.max(22,rect.width/2+9),ry=Math.max(22,rect.height/2+9),dx=(x-rect.x-rect.width/2)/rx,dy=(y-rect.y-rect.height/2)/ry;return dx*dx+dy*dy<=1;}
export function trackRub(previous,sample,threshold=48){
 if(!sample.inside)return null;
 const fresh=!previous||previous.uid!==sample.uid||previous.pointerId!==sample.pointerId||sample.time-previous.time>900||sample.time<previous.time;
 if(fresh)return{...sample,distance:0,moved:false,reached:false};
 const delta=Math.hypot(sample.x-previous.x,sample.y-previous.y);
 const moved=delta>=.5,distance=Math.min(threshold,previous.distance+(moved?Math.min(delta,16):0));
 return{...sample,distance,moved,reached:moved&&distance>=threshold};
}
