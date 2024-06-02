import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {

    try {const data = await fs.readFile(PATH_DB, 'utf-8');
        let users = JSON.parse(data);

    const delArray = users.filter(user => Math.random() >= 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(delArray, null, 2), 'utf-8');
    console.log('delete contacts:');

}
    catch (err)
 {console.error('Error reading file:', err);}

};

await thanos();
