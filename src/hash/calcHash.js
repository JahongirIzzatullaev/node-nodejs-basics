import path from "path";
import { fileURLToPath } from "url";
import { createHash } from 'crypto';
import { createReadStream } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const file = createReadStream(filePath);
    const hash = createHash('sha256');

    file.on('data', (chunk) => {
        hash.update(chunk);
    });

    file.on('end', () => {
        const hashHex = hash.digest('hex');
        console.log(hashHex);
    });
};

await calculateHash();
