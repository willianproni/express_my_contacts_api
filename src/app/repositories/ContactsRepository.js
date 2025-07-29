const { randomUUID } = require('crypto');
const db = require('../../database');

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

  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(
      `
      INSERT INTO contacts (name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
      `,
      [name, email, phone, category_id]
    );

    return row;
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
