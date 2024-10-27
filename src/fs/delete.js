import fs from "fs"
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    const filePath = `${__dirname}/files/fileToRemove.txt`;

    fs.unlink(filePath, (error) => {
        if (error) console.error('FS operation failed');
    });
};

await remove();
