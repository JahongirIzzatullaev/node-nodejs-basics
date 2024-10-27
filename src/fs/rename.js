import path from 'path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const wrongFilename = `${__dirname}/files/wrongFilename.txt`;
    const properFilename = `${__dirname}/files/properFilename.md`;

    try {
        await fs.access(wrongFilename);

        try {
            await fs.access(properFilename);
            throw new Error('FS operation failed');
        } catch {
        }

        await fs.rename(wrongFilename, properFilename);
    } catch (error) {
        console.error('FS operation failed');
    }
};

await rename();
