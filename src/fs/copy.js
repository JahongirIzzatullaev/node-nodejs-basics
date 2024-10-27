import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    const files = `${__dirname}/files`;
    const destination = `${__dirname}/new_files`;

    try {
        try {
            await fs.access(destination);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') throw error;
        }
        await fs.mkdir(destination, { recursive: true });
        await fs.cp(files, destination, { recursive: true });
    } catch (error){
        console.error(error.message);
    }
};

await copy();
