import {readFile} from 'node:fs/promises';
const src=await readFile('dist/server/index.js','utf8');
const config=JSON.parse(await readFile('dist/.openai/hosting.json','utf8'));
if(!src.includes('export default')||!src.includes('async fetch'))throw Error('Worker export missing');
if(!('project_id' in config))throw Error('hosting.json invalid');
console.log('Artifact is valid');

