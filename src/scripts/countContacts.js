import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    let arrayCount;

    try {
        const data = await fs.readFile(PATH_DB);
        arrayCount = JSON.parse(data);
        console.log(arrayCount);
        return arrayCount.length;
    }
    catch (err){
        if(err.code !== 'ENOENT') {
            console.error('Error reading file:', err);
            return 0;
        }
    }
};

console.log(await countContacts());
