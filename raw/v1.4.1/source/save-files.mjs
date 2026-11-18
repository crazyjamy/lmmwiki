import{restore}from'./dust-engine.mjs?v=1.4.1-1d15f0c9';
import{APP_VERSION,validatePreferences,PREFS_KEY,BACKUP_KEY}from'./player-settings.mjs?v=1.4.1-1d15f0c9';
export const MAX_SAVE_BYTES=5*1024*1024;
export function encodeSave(state,preferences,now=Date.now()){return JSON.stringify({format:'tiny-dust-save',schemaVersion:3,appVersion:APP_VERSION,exportedAt:new Date(now).toISOString(),data:state,preferences:validatePreferences(preferences)},null,2);}
export function decodeSave(raw,now=Date.now()){
 if(typeof raw!=='string'||new TextEncoder().encode(raw).length>MAX_SAVE_BYTES)throw Error('5MB 이하의 게임 기록 파일을 골라주세요.');
 let value;try{value=JSON.parse(raw);}catch{throw Error('JSON 기록 파일을 읽을 수 없어요. 현재 기록은 바뀌지 않았어요.');}
 if(value?.format==='tiny-dust-save'){
  if(![2,3].includes(value.schemaVersion))throw Error('지원하지 않는 저장 버전이에요. 현재 기록은 유지돼요.');
  return {state:restore(JSON.stringify(value.data),now),preferences:validatePreferences(value.preferences)};
 }
 return {state:restore(raw,now),preferences:null};
}
export function saveSummary(s){return {dusts:s.dusts.length,types:s.collectionBook.discovered.length,gold:s.gold,room:s.roomLevel,furniture:s.ownedFurniture.length,stories:s.dusts.reduce((n,d)=>n+d.readStories.length,0),postcards:s.life.postcards.length};}
// Commit both files together; keep the current game untouched when a write fails.
export function commitImport(storage,key,next,preferences,currentBackup){
 const oldGame=storage.getItem(key),oldPrefs=storage.getItem(PREFS_KEY),oldBackup=storage.getItem(BACKUP_KEY);
 try{storage.setItem(BACKUP_KEY,currentBackup);storage.setItem(key,JSON.stringify(next));storage.setItem(PREFS_KEY,JSON.stringify(preferences));}
 catch(error){for(const [k,v]of[[key,oldGame],[PREFS_KEY,oldPrefs],[BACKUP_KEY,oldBackup]])try{if(v===null)storage.removeItem(k);else storage.setItem(k,v);}catch{}throw error;}
}
