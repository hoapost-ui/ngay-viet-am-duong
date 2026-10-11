import {solarToLunar,lunarToSolar} from './worker/index.js';
const cases=[[10,2,2024,1,1,2024],[29,1,2025,1,1,2025],[17,2,2026,1,1,2026]];
for(const [d,m,y,ld,lm,ly] of cases){const a=solarToLunar(d,m,y);if(a.day!==ld||a.month!==lm||a.year!==ly)throw Error(`solar mismatch ${d}/${m}/${y}: ${JSON.stringify(a)}`);const s=lunarToSolar(ld,lm,ly,false);if(s.day!==d||s.month!==m||s.year!==y)throw Error(`lunar mismatch ${ly}`)}
const req=new Request('https://example.com/');const res=await (await import('./worker/index.js')).default.fetch(req);const page=await res.text();if(res.status!==200||page.length<5000)throw Error('Page failed');
if(!page.includes('<input id="month" type="number"')||page.includes('<select id="month"'))throw Error('Month must allow direct numeric entry');
if(!page.includes('[hidden]{display:none!important}')||res.headers.get('cache-control')!=='no-store, max-age=0')throw Error('Visibility or cache regression');
new Function(page.match(/<script>([\s\S]*)<\/script>/)?.[1]||'throw Error("Inline script missing")');
console.log('Lunar conversion and page routing verified.');

