const { randomUUID } = require('crypto');

const contacts = [
  {
    id: randomUUID(),
    name: 'Willian',
    email: 'willian@mycontact.com',
    phone: '11987654356',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    name: 'Lorena',
    email: 'lorena@mycontact.com',
    phone: '11987658253',
    category_id: randomUUID(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) =>
      resolve(contacts.find((contact) => contact.id === id))
    );
  }
}

module.exports = new ContactsRepository();
