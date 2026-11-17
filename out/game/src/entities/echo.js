import {damageEnemies} from './enemies.js';
export function castEcho(s){const p=s.player;s.echoes.push({x:p.x,y:p.y,r:8,life:44,max:44});damageEnemies(s,p.x,p.y,118*s.stats.reach,s.stats.power);for(const e of s.enemies){const dx=e.x-p.x,dy=e.y-p.y,d=Math.hypot(dx,dy)||1;if(d<180){e.x+=dx/d*28;e.y+=dy/d*28}}s.flash=10}
export function updateEchoes(s){for(const e of s.echoes){e.r+=5.4;e.life--}s.echoes=s.echoes.filter(e=>e.life>0)}
