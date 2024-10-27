import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async ()=>{
    const filePath = `${__dirname}/files/fresh.txt`;

    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, 'I am fresh and young', 'utf8');
        } else {
            throw new Error('FS operation failed')
        }
    } catch (err) {
        console.error(err.message);
    }
}

await create();
