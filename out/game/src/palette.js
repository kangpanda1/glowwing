export const C={ink:'#050c19',deep:'#09152a',rock:'#122943',rock2:'#1b3a57',cyan:'#72faff',blue:'#36bfd6',amber:'#ffc66e',white:'#e8fbff',muted:'#88a8b9',red:'#ff6684',green:'#8affc1'};
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
export const rand=(s)=>{s.value=(s.value*1664525+1013904223)>>>0;return s.value/4294967296};
