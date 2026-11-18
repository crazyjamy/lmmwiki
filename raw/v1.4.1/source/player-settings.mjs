export const APP_VERSION='1.4.1';
export const PREFS_KEY='tiny-dust-settings-v1';
export const BACKUP_KEY='tiny-dust-before-import-v1';
export function defaultPreferences(existing=false){return {version:1,sound:false,volume:35,motionReduced:false,visualEffects:true,introSeen:existing};}
export function validatePreferences(p){if(!p||p.version!==1||!['sound','motionReduced','visualEffects','introSeen'].every(k=>typeof p[k]==='boolean')||!Number.isInteger(p.volume)||p.volume<0||p.volume>100)throw Error('소리·효과 설정을 확인해주세요.');return {version:1,sound:p.sound,volume:p.volume,motionReduced:p.motionReduced,visualEffects:p.visualEffects,introSeen:p.introSeen};}
export function loadPreferences(raw,existing=false){try{return validatePreferences(JSON.parse(raw));}catch{return defaultPreferences(existing);}}
