import{DUSTS}from'./dust-data.mjs?v=1.4.1-1d15f0c9';
export const CHARACTERS={
 crumb:{favorite:'rug',motion:'knead',face:'content',action:'앞발을 번갈아 꾹꾹 누르며 몸을 납작하게 만들어요.',words:'여기, 내 모양으로 폭신해졌어.',cue:'번갈아 꾹꾹 · 반달 눈'},
 soot:{favorite:'cushion',motion:'roll',face:'wink',action:'쿠션을 발견하면 한 바퀴 데굴 구르고 씩 웃어요.',words:'한 바퀴만 더! 진짜 마지막이야.',cue:'한 바퀴 데굴 · 윙크'},
 pink:{favorite:'bookshelf',motion:'peek',face:'blush',action:'작은 손으로 얼굴을 가렸다가 책장 너머를 빼꼼 봐요.',words:'나… 다음 장도 같이 봐도 돼?',cue:'가렸다 빼꼼 · 발그레'},
 puff:{favorite:'windchime',motion:'dance',face:'joy',action:'종소리를 따라 꽃잎처럼 활짝 펴졌다 오므라들며 춤춰요.',words:'딩동! 바람이랑 나랑 합주 중이야.',cue:'활짝 피는 춤 · 웃는 눈'},
 violet:{favorite:'lamp',motion:'sleep',face:'sleep',action:'달빛 아래 몸을 길게 늘였다 웅크리며 새근새근 잠들어요.',words:'불은 조금만… 꿈이 도망가지 않게.',cue:'길게 숨쉬기 · 잠든 눈'}
};
export const characterProfile=id=>CHARACTERS[id]||null;
export const dustName=d=>d.nickname||DUSTS.find(x=>x.id===d.id)?.name||'먼지';
export function initNicknames(s){for(const d of s.dusts){if(d.nickname===undefined)d.nickname='';if(typeof d.nickname!=='string'||Array.from(d.nickname).length>12||/[\u0000-\u001f\u007f<>]/u.test(d.nickname))throw Error('invalid nickname');}return s;}
export function renameDust(s,uid,value){const d=s.dusts.find(d=>d.uid===uid);if(!d||typeof value!=='string')return {ok:false,message:'별명을 확인해주세요.'};const name=value.trim();if(Array.from(name).length>12||/[\u0000-\u001f\u007f<>]/u.test(name))return {ok:false,message:'별명은 12자 이내로, 꺾쇠나 줄바꿈 없이 적어주세요.'};d.nickname=name;return {ok:true,name:dustName(d)};}
