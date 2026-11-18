import{DUSTS,RARITIES}from'./dust-data.mjs?v=1.4.1-1d15f0c9';
export const THEMES=[
 {id:'neighbors',name:'작은 이웃들',description:'서로 다른 버릇을 가진 첫 다섯 친구가 한집에 모여요.',members:['crumb','soot','pink','puff','violet'],reward:'다섯 친구 액자',color:'#e6c58c'},
 {id:'forest',name:'풀잎 산책',description:'풀잎 정수에서 태어난 친구들과 작은 숲을 완성해요.',members:DUSTS.filter(d=>d.essence==='leaf').map(d=>d.id),reward:'풀잎 가랜드',color:'#b8ce9c'},
 {id:'moon',name:'달빛 친구들',description:'달빛 정수의 친구들이 모이면 방에도 작은 달이 떠요.',members:DUSTS.filter(d=>d.essence==='moon').map(d=>d.id),reward:'달조각 벽등',color:'#c5b8dc'}
];
export const knownDust=(s,id)=>s.collectionBook.discovered.includes(id);
export const essenceRoute=id=>({leaf:'bookshelf',dew:'bookshelf',spark:'window',ember:'window',moon:'moonpath',stardust:'moonpath'}[id]);
export function syncCollection(s){const b=s.collectionBook;if(!b)return s;for(const id of [...s.dusts.map(d=>d.id),...(s.life?.postcards||[]).map(p=>p.dustId)])if(!b.discovered.includes(id))b.discovered.push(id);return s;}
export function themeProgress(s,id){syncCollection(s);const theme=THEMES.find(t=>t.id===id);if(!theme)return null;const found=theme.members.filter(id=>knownDust(s,id));return {theme,found,missing:theme.members.filter(id=>!knownDust(s,id)),complete:found.length===theme.members.length,claimed:s.collectionBook.claimed.includes(id)};}
export function initCollection(s){
 if(s.collectionBook===undefined)s.collectionBook={version:1,discovered:[],target:null,claimed:[],placed:[]};const b=s.collectionBook;
 if(!b||b.version!==1)throw Error('invalid collection');
 for(const key of['discovered','claimed','placed'])if(!Array.isArray(b[key])||new Set(b[key]).size!==b[key].length||!b[key].every(id=>key==='discovered'?DUSTS.some(d=>d.id===id):THEMES.some(t=>t.id===id)))throw Error('invalid collection list');
 if(b.target!==null&&!DUSTS.some(d=>d.id===b.target)||b.placed.some(id=>!b.claimed.includes(id)))throw Error('invalid collection target');
 syncCollection(s);if(b.claimed.some(id=>!themeProgress(s,id).complete))throw Error('unearned collection reward');return s;
}
export function setCollectionTarget(s,id){if(id!==null&&!DUSTS.some(d=>d.id===id))return false;s.collectionBook.target=id;return true;}
export function targetDust(s){return DUSTS.find(d=>d.id===s.collectionBook.target)||DUSTS.find(d=>d.id===THEMES.flatMap(t=>t.members).find(id=>!knownDust(s,id)))||DUSTS.find(d=>!knownDust(s,d.id))||null;}
export function materialNeeds(s,id){const d=DUSTS.find(d=>d.id===id);if(!d)return [];const cost=RARITIES.find(r=>r.id===d.rarity).cost;return [['group',d.group,1],['rarity',d.rarity,1],['essence',d.essence,cost]].map(([key,id,need])=>({key,id,need,have:s.materials[key][id],missing:Math.max(0,need-s.materials[key][id])}));}
export function claimTheme(s,id){const p=themeProgress(s,id);if(!p||!p.complete||p.claimed)return {ok:false};s.collectionBook.claimed.push(id);s.collectionBook.placed.push(id);return {ok:true,theme:p.theme};}
export function toggleThemeDecor(s,id){if(!s.collectionBook.claimed.includes(id))return false;const b=s.collectionBook;b.placed=b.placed.includes(id)?b.placed.filter(x=>x!==id):[...b.placed,id];return true;}
export function routeCollection(s,route){const letters=(s.life?.postcards||[]).filter(p=>p.route===route),sent=new Set(letters.map(p=>p.dustId));return {letters,missing:DUSTS.filter(d=>!sent.has(d.id)),candidates:s.dusts.filter(d=>!d.stored&&!s.adventures.some(q=>q.uid===d.uid)&&s.deskRun?.uid!==d.uid&&!sent.has(d.id)).filter((d,i,a)=>a.findIndex(x=>x.id===d.id)===i)};}
