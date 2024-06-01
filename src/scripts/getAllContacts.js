import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    let arrayAll;


try {
    const data = await fs.readFile(PATH_DB);
    arrayAll = JSON.parse(data);
    console.log(arrayAll);
    return arrayAll;
}
catch (err) {if (err.code !== 'ENOENT')
    console.error('Error reading file:', err);
return [];
}

};

console.log(await getAllContacts());
