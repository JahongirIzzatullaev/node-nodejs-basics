import path from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs"

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fileToWrite.txt');

const write = async () => {
    const writeStream = createWriteStream(filePath, { encoding: 'utf8' });
    const inputStream = process.stdin;

    inputStream.pipe(writeStream);
};

await write();
