import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const file = `${__dirname}/files/fileToRead.txt`;
    try {
        const content = await fs.readFile(file,  'utf8');
        console.log(content);
    } catch (error){
        console.error('FS operation failed');
    }
};

await read();
