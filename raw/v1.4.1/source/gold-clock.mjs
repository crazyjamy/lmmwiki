// A dust keeps at most 30 minutes of complete production cycles.
// Pausing snapshots both earned cycles and the unfinished cycle.
export const GOLD_CAP_MS=30*60*1000;
export function goldClock(d,interval,now,paused=false){
 const banked=d.goldBanked||0,maxCycles=Math.max(banked,Math.floor(GOLD_CAP_MS/interval),1);
 if(paused)return {cycles:banked,remaining:d.goldRemaining,maxCycles,capped:banked>=maxCycles};
 const earned=now>=d.goldAt?Math.floor((now-d.goldAt)/interval)+1:0;
 const cycles=Math.min(maxCycles,banked+earned),capped=cycles>=maxCycles;
 const remaining=capped?interval:earned?interval-((now-d.goldAt)%interval):Math.min(interval,Math.max(1,d.goldAt-now));
 return {cycles,remaining,maxCycles,capped};
}
export function pauseGoldClock(d,interval,now){
 const clock=goldClock(d,interval,now);
 d.goldBanked=clock.cycles;d.goldRemaining=clock.remaining;d.goldAt=now+clock.remaining;
}
export function rescaleGoldClock(d,oldInterval,newInterval,now,paused){
 const clock=goldClock(d,oldInterval,now,paused);
 d.goldBanked=clock.cycles;d.goldRemaining=Math.max(1,Math.round(clock.remaining*newInterval/oldInterval));d.goldAt=now+d.goldRemaining;
}
