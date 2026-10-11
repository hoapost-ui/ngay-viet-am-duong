import {mkdir,rm,writeFile} from 'node:fs/promises';
import worker from '../worker/index.js';

await rm('public',{recursive:true,force:true});
await mkdir('public',{recursive:true});
const response=await worker.fetch(new Request('https://ngay-viet.local/'));
if(!response.ok)throw new Error(`Không tạo được trang: HTTP ${response.status}`);
await writeFile('public/index.html',await response.text(),'utf8');
console.log('Built Vercel static site in public/');

