// A deliberate drop must reach the centre of a compatible dust, not just brush its label.
// Candidate compatibility is supplied by mergeCandidates; this helper handles geometry only.
export function pickMergeDropTarget(point,targets){
 if(!point||!Number.isFinite(point.x)||!Number.isFinite(point.y))return null;
 return targets.map(t=>{const b=t.rect,cx=b.left+b.width/2,cy=b.top+b.height/2,rx=b.width>0?Math.max(18,b.width*.48):0,ry=b.height>0?Math.max(18,b.height*.48):0;return {...t,score:rx>0&&ry>0?((point.x-cx)/rx)**2+((point.y-cy)/ry)**2:Infinity};}).filter(t=>t.score<=1).sort((a,b)=>a.score-b.score||a.uid-b.uid)[0]||null;
}
