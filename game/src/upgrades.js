export function applyUpgrade(s,index){if(index===0)s.stats.power++;if(index===1)s.stats.reach+=.35;if(index===2)s.stats.speed+=.22;s.mode='play';s.upgrades=[]}
