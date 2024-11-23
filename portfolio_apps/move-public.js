import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src/assets');
const destDir = path.join(__dirname, 'dist/Portfolio/src/assets');

fs.copy(srcDir, destDir, err => {
    if (err) {
        return console.error('Error copying directory:', err);
    }
    console.log('Directory copied successfully!');
});