import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  let contacts = [];

  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    contacts = JSON.parse(data);

  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Error reading file:', err);
      return;
    }
  }


  for (let i = 0; i < number; i++) {
    const responce = createFakeContact();
    contacts.push(responce);
  }



  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log('Successful entry.');
  } catch (err) {
    console.error('Write error:', err);
  }
};


generateContacts(5);
