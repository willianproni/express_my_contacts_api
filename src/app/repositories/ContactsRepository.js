const { randomUUID } = require('crypto');

let contacts = [
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

  findByEmail(email) {
    return new Promise((resolve) =>
      resolve(contacts.find((contact) => contact.email === email))
    );
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: randomUUID(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);

      resolve(newContact);
    });
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => {
        return contact.id === id ? updatedContact : contact;
      });

      resolve(updatedContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
