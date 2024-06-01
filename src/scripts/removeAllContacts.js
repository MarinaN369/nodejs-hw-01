import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    let arrayOff = [];
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(arrayOff), 'utf-8');
        console.log('Successful entry:');
    }
    catch (err) {
        console.error('Write error:', err);

    }
};

await removeAllContacts();
