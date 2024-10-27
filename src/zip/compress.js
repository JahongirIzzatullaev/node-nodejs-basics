import fs from 'fs';
import zlib from 'zlib';
import path from "path";
import {fileURLToPath} from "url";
import { pipeline } from 'stream/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fileToCompress.txt');
const compressedFile = path.join(__dirname, '/files/archive.gz')

const compress = async () => {
    try {
        const gzip = zlib.createGzip();
        const source = fs.createReadStream(filePath);
        const destination = fs.createWriteStream(compressedFile);
        await pipeline(source, gzip, destination);
    } catch (error) {
        console.error(error.message);
    }
};

await compress();
