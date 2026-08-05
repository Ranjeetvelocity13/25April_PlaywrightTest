import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'test-data');

function readJSON(fileName) {
    const filePath = path.join(DATA_DIR, fileName);
    if (!fs.existsSync(filePath)) {
        throw new Error(`Test data file not found: ${filePath}`);
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export { readJSON };