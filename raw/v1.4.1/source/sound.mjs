// Small synthesized effect sounds; no music, downloads, or autoplay.
export function createSound(getPreferences,Context){
 let context=null;
 function unlock(){const p=getPreferences();if(!p.sound||!p.volume||!Context)return false;try{context??=new Context();if(context.state==='suspended')context.resume().catch(()=>{});return true;}catch{return false;}}
 function play(kind='tap'){const p=getPreferences();if(!p.sound||!p.volume||!unlock())return false;try{const t=context.currentTime,notes={pet:[659],feed:[523,659],gold:[784,1047],birth:[523,659,784],test:[523,659,784]}[kind]||[659];notes.forEach((frequency,i)=>{const o=context.createOscillator(),g=context.createGain(),start=t+i*.085;o.type='sine';o.frequency.value=frequency;g.gain.setValueAtTime(0,start);g.gain.linearRampToValueAtTime(p.volume/100*.13,start+.012);g.gain.exponentialRampToValueAtTime(.0001,start+.19);o.connect(g);g.connect(context.destination);o.start(start);o.stop(start+.22);});return true;}catch{return false;}}
 return {play,unlock};
}
