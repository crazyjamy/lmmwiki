const shapes={
 dew:'<path d="M26 6C21 16 12 23 12 32A14 14 0 0 0 40 32C40 23 31 16 26 6Z" fill="#b6d9dc"/><path d="M18 31Q17 38 24 40" stroke="#edf8f4"/>',
 ember:'<path d="M27 5Q42 21 39 34Q37 47 25 46Q12 44 13 32Q14 23 21 18Q20 28 25 27Q30 21 27 5Z" fill="#e9b086"/><path d="M26 29Q34 38 27 42Q19 42 23 34Z" fill="#f3d799"/>',
 stardust:'<path d="M24 8L28 20L40 24L28 28L24 40L20 28L8 24L20 20Z" fill="#d4bfdc"/><path d="M42 34L44 40L50 42L44 44L42 50L40 44L34 42L40 40Z" fill="#e9d5a6"/><circle cx="40" cy="11" r="2" fill="#c4bed9"/>',
 bookshelf:'<rect x="7" y="6" width="38" height="41" rx="3" fill="#cbb697"/><path d="M11 25H41M11 42H41" stroke="#9b866d"/><path d="M14 12V24H20V12Z" fill="#a8bfad"/><path d="M24 15L28 13L33 24H28Z" fill="#e0c087"/><path d="M15 31H31V36H15Z" fill="#bea7bf"/>',
 teacup:'<ellipse cx="25" cy="43" rx="21" ry="4" fill="#ded5b8"/><path d="M9 21H37L34 39Q24 45 13 39Z" fill="#bad0bf"/><path d="M37 25Q49 22 45 32Q42 37 36 34"/><ellipse cx="23" cy="22" rx="14" ry="4" fill="#eddfb8"/><path d="M19 15Q14 10 20 5M29 15Q24 10 30 5" stroke="#b7c9ba"/>',
 basket:'<path d="M9 24H43L39 45H13Z" fill="#d7bd91"/><path d="M16 24Q13 4 26 5Q39 4 36 24M9 29H43M12 36H40M19 25L21 44M30 25L29 44" stroke="#ae956d"/><path d="M21 19Q17 9 11 14Q11 22 21 19Z" fill="#b4c599"/>',
 windchime:'<path d="M26 4V12M13 22Q13 10 26 10Q39 10 39 22Z" fill="#bbd5d4"/><path d="M26 22V42M17 23V34M35 23V33"/><ellipse cx="26" cy="43" rx="5" ry="3" fill="#dfc995"/><circle cx="17" cy="36" r="3" fill="#d2b8cb"/><circle cx="35" cy="35" r="3" fill="#c3d2ac"/>',
 hourglass:'<path d="M12 6H40M12 46H40M16 7Q16 20 26 26Q36 32 36 45M36 7Q36 20 26 26Q16 32 16 45" stroke="#a89bb0" stroke-width="3"/><path d="M17 11H35Q33 20 26 23Q19 20 17 11ZM19 42Q22 34 26 32Q30 34 33 42Z" fill="#e4cf9f" stroke="none"/><path d="M26 27V30" stroke="#d4b471"/>',
 musicbox:'<path d="M8 28H44V44Q26 50 8 44Z" fill="#d8b2bd"/><path d="M8 28L15 15H43L44 28Z" fill="#ead0d3"/><path d="M15 17L17 8H43V16" fill="#e4c6cd"/><path d="M44 35H49V41M25 20V31M25 20L34 17V28" stroke="#a391a0"/><ellipse cx="22" cy="31" rx="4" ry="3" fill="#baa6bf"/><ellipse cx="31" cy="28" rx="4" ry="3" fill="#baa6bf"/>',
 fairy:'<g class="fairy-wings" fill="#f1e7c1" stroke="#c5bc8e"><ellipse cx="11" cy="24" rx="9" ry="6" transform="rotate(-25 11 24)"/><ellipse cx="41" cy="24" rx="9" ry="6" transform="rotate(25 41 24)"/></g><path d="M26 6L31 17L43 19L34 28L36 40L26 34L16 40L18 28L9 19L21 17Z" fill="#f2cf6e" stroke="#c4a251"/><g fill="#766b45" stroke="none"><circle cx="22" cy="23" r="1.4"/><circle cx="30" cy="23" r="1.4"/></g><path d="M23 28Q26 31 29 28" stroke="#ac874a"/><path d="M23 34L18 39L26 43L34 39L29 34Z" fill="#a6c9d0" stroke="#7ea5ad"/><path d="M34 32Q43 29 45 39Q44 48 35 47Q29 44 34 36Z" fill="#d7b86b" stroke="#b19758"/><circle cx="38" cy="40" r="3" fill="#f6e0a0" stroke="#bc9e4e"/>',
 keeper:'<g class="fairy-wings" fill="#e1eee6" stroke="#a5bdaf"><path d="M17 22Q1 12 5 30Q10 35 18 28Z"/><path d="M35 22Q51 12 47 30Q42 35 34 28Z"/></g><path d="M17 27Q9 37 13 45Q26 49 39 45Q43 37 35 27Z" fill="#98b9a1" stroke="#789982"/><ellipse cx="26" cy="23" rx="12" ry="12" fill="#e5d9b8" stroke="#a6ae8d"/><path d="M12 18Q16 3 35 9L41 17Q25 14 12 18Z" fill="#91b395" stroke="#749779"/><path d="M28 10Q30 0 40 3Q39 11 28 10Z" fill="#bfd6a5" stroke="#91aa7f"/><g fill="#536b5c" stroke="none"><circle cx="22" cy="23" r="1.5"/><circle cx="30" cy="23" r="1.5"/></g><path d="M24 28Q26 30 28 28M18 34L32 44" stroke="#7e8062"/><path d="M26 34L34 31L43 35V45L34 42L26 45Z" fill="#f1e6c7" stroke="#a3a27d"/><path d="M34 31V42M29 38L32 36L38 39L41 37" stroke="#b5b18a"/>',
 catalog:'<rect x="11" y="7" width="30" height="38" rx="6" fill="#e3dfbf"/><path d="M19 7V45M25 18H34M25 25H34M25 32H31"/>',
 residents:'<path d="M7 24L26 8L45 24V44H7Z" fill="#d4dfc3"/><path d="M21 44V30H32V44"/><path d="M7 24L26 8L45 24" stroke="#8fa17c"/>',
 daily:'<path d="M10 31C5 21 13 11 23 15C26 6 39 9 40 20C50 23 47 38 36 38H18C11 39 6 35 10 31Z" fill="#e9dba1"/><path d="M22 28Q27 33 32 28"/>',
 pop:'<path d="M27 8C34 5 37 11 36 16C47 14 50 25 41 30C49 38 40 47 32 40C28 50 16 46 17 36C6 38 3 26 13 22C6 13 17 5 23 14Z" fill="#e7b0ce"/><circle cx="27" cy="27" r="6" fill="#f7e5a5"/>',
 dream:'<path d="M26 6L31 20L46 26L31 32L26 46L20 32L6 26L20 20Z" fill="#c5b6e1"/><path d="M41 5V13M37 9H45"/>',
 common:'<path d="M17 16H35L40 39H12Z" fill="#d8dcbf"/><path d="M20 16V11Q26 6 32 11V16"/><circle cx="26" cy="28" r="4" fill="#fbfaf7"/>',
 rare:'<path d="M14 17L26 8L38 17L36 40H16Z" fill="#bfd4db"/><path d="M26 18L29 24L36 25L31 30L32 36L26 33L20 36L21 30L16 25L23 24Z" fill="#fcf6da"/>',
 legend:'<path d="M12 18L19 9H33L40 18L26 42Z" fill="#d7b8d8"/><path d="M12 18H40M19 9L23 18L26 42L29 18L33 9M23 18H29"/>',
 leaf:'<path d="M12 36C8 17 27 8 42 10C44 28 31 43 12 36Z" fill="#b6c99c"/><path d="M10 42L33 20M19 33V24M25 27H34"/>',
 spark:'<circle cx="26" cy="26" r="10" fill="#f0d46c"/><path d="M26 5V10M26 42V47M5 26H10M42 26H47M11 11L15 15M37 37L41 41M11 41L15 37M37 15L41 11"/>',
 moon:'<path d="M35 8A19 19 0 1 0 43 37A20 20 0 0 1 35 8Z" fill="#c5c9e3"/><path d="M40 12V20M36 16H44"/>',
 coin:'<circle cx="26" cy="26" r="19" fill="#efd576"/><circle cx="26" cy="26" r="13" stroke="#c4a052"/><path d="M30 20H24Q19 20 19 26Q19 32 26 32H31V26H26"/>',
 rug:'<ellipse cx="26" cy="30" rx="23" ry="13" fill="#dfb0aa"/><ellipse cx="26" cy="30" rx="17" ry="8" stroke="#f8e3ce"/><path d="M8 37L5 41M16 41L14 45M35 41L37 45M43 37L47 41"/>',
 plant:'<path d="M18 31H36L33 46H21Z" fill="#d8b89a"/><path d="M27 32V16"/><path d="M27 23C12 26 11 12 13 10C24 9 30 15 27 23Z" fill="#aabd91"/><path d="M27 18C26 5 37 4 42 7C42 17 36 22 27 18Z" fill="#bdce9f"/>',
 lamp:'<path d="M26 27V44M17 45H35"/><path d="M17 10H35L43 29H9Z" fill="#ead591"/><path d="M26 29V34" stroke="#d4b252"/>',
 cushion:'<path d="M7 20Q10 13 18 17Q26 11 34 17Q44 13 46 23L44 38Q35 43 27 39Q16 43 8 38Z" fill="#bfcfe0"/><path d="M16 24Q26 20 37 24M14 32Q26 37 40 31" stroke="#eaf0f5"/>'
};
export function icon(id,cls=''){return `<svg class="material-icon ${cls}" viewBox="0 0 52 52" fill="none" stroke="#78816f" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[id]||shapes.dream}</svg>`;}

export function furnitureArt(id,level=1){
 const lv=Math.max(1,Math.min(5,level)),trim=['#c7b995','#b3c5a1','#c4adc5','#d7bd84','#b6b5d5'][lv-1];
 const ornaments={
 rug:['<ellipse cx="26" cy="30" rx="13" ry="6" stroke="ACC"/>','<path d="M19 30L22 27L26 30L30 27L33 30L30 33L26 30L22 33Z" fill="ACC" stroke="none"/>','<path d="M6 28L3 25M46 28L49 25M13 40L11 46M40 40L42 46" stroke="ACC"/>','<path d="M26 24L28 28L32 30L28 32L26 36L24 32L20 30L24 28Z" fill="#f8eac4" stroke="ACC"/>'],
 plant:['<path d="M26 27Q35 19 42 24Q40 33 27 30" fill="ACC"/>','<circle cx="15" cy="12" r="4" fill="#e7c5bc"/><circle cx="38" cy="10" r="4" fill="#ead9a3"/>','<path d="M20 37H34M21 42H33" stroke="ACC"/><circle cx="30" cy="15" r="4" fill="#e3b5c4"/>','<path d="M13 9L15 5L17 9L21 11L17 13L15 17L13 13L9 11Z" fill="#f1d78c" stroke="none"/>'],
 lamp:['<path d="M13 26H39M18 14H34" stroke="ACC"/>','<path d="M17 28V34M35 28V34" stroke="ACC"/><circle cx="17" cy="36" r="2" fill="ACC"/><circle cx="35" cy="36" r="2" fill="ACC"/>','<path d="M26 15L28 19L32 20L28 22L26 26L24 22L20 20L24 19Z" fill="#fcf6dd" stroke="none"/>','<path d="M29 5A4 4 0 1 0 32 10A4 4 0 0 1 29 5Z" fill="ACC" stroke="none"/>'],
 cushion:['<path d="M11 20Q26 15 42 20M12 36Q26 41 41 36" stroke="ACC"/>','<circle cx="19" cy="28" r="2" fill="ACC"/><circle cx="34" cy="28" r="2" fill="ACC"/>','<path d="M26 22L29 28L26 34L23 28Z" fill="#f8edd3" stroke="ACC"/>','<path d="M26 36Q16 30 17 36Q16 42 26 38Q36 42 35 36Q36 30 26 36Z" fill="ACC"/>']
 };
 let extra='';for(let i=0;i<lv-1;i++)extra+=(ornaments[id]?.[i]||`<path d="M${9+i*9} ${10+i%2*4}l2 -3l2 3l-2 3Z" fill="ACC" stroke="none"/>`).replaceAll('ACC',trim);
 return icon(id,'furniture-art').replace('</svg>',extra+'</svg>');
}
