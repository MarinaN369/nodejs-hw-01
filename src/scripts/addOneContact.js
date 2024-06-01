import { PATH_DB } from '../constants/contacts.js';;
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
    let arrayOne = [];


try {
    const data = await fs.readFile(PATH_DB);
    arrayOne = JSON.parse(data);
}
catch(err) {
    if (err.code !== 'ENOENT') {
          console.error('Помилка читання файлу:', err);
          return;
        }
        }

const contact = createFakeContact();
arrayOne.push(contact);

try {
    await fs.writeFile(PATH_DB, JSON.stringify(arrayOne, null, 2), 'utf8');
    console.log('Successful entry:');
}
catch(error) {
    console.error('Write error:', error);
}

};

await addOneContact();
