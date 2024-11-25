import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src/assets');
const destDir = path.join(__dirname, 'dist/src/assets');
const src404 = path.join(__dirname, '404.html');
const dest404 = path.join(__dirname, 'dist/404.html');
const distDir = path.join(__dirname, 'dist');
const docsDir = path.join(__dirname, 'docs');

async function copyFiles() {
    try {
        await fs.copy(srcDir, destDir);
        console.log('Directory copied successfully!');
        
        await fs.copy(src404, dest404);
        console.log('404.html copied successfully!');
        
        await fs.rename(distDir, docsDir);
        console.log('Directory renamed to docs successfully!');
    } catch (err) {
        console.error('Error:', err);
    }
}

copyFiles();