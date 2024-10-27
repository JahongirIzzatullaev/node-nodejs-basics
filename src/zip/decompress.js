import fs from "fs";
import zlib from "zlib";
import path from "path";
import {fileURLToPath} from "url";
import {pipeline} from "stream/promises";

const __dirname =  path.dirname(fileURLToPath(import.meta.url));
const compressedFile = path.join(__dirname, '/files/archive.gz')
const decompressedFile = path.join(__dirname, '/files/fileToCompress.txt');

const decompress = async () => {
    try {
        const gunzip = zlib.createGunzip();
        const source = fs.createReadStream(compressedFile);
        const destination = fs.createWriteStream(decompressedFile);
        await pipeline(source, gunzip, destination);
    }catch (error){
        console.error(error.message)
    }
};

await decompress();
