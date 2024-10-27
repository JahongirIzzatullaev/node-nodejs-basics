import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
    const folder = `${__dirname}/files`;

    try {
        await fs.readdir(folder, (err, files)=>{
            if (err){
                console.error('FS operation failed');
                return;
            }
            console.log(files);
        });
    } catch (error) {
        console.error(error);
    }
};

await list();
