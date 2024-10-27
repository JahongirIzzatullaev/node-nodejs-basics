import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fileToRead.txt');

const read = async () => {
    const fileStream = createReadStream(filePath, { encoding: 'utf8' });
    fileStream.pipe(process.stdout);
};

await read();
