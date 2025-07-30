# API My Contacts

A simple RESTful API for managing contacts, developed with Node.js, Express, and PostgreSQL, leveraging Docker for database orchestration.

# 🚀 Technologies Used
- Node.js: JavaScript runtime environment.

- Express.js: Fast, minimalist web framework for Node.js.

- PostgreSQL: Relational database management system.

- Docker: Platform for developing, shipping, and running applications in containers.

- ESLint: Tool for identifying and reporting problematic code patterns.

# Features

### Contact
- List all contacts.
- Retrieve a contact by ID.
- Create a new contact.
- Update an existing contact.
- Delete a contact.

### Categories
- List all categories
- Create new category

# ⚙️ Project Setup
Clone the repository

### Prerequisites

Make sure you have the following installed:
- Node.js (LTS version recommended)
- Yarn or npm (Yarn is used in the examples)
- Docker and Docker Compose

```
git clone https://github.com/willianproni/express_my_contacts_api.git
cd express_my_contacts_api
yarn install
```

### Database Setup with Docker
```
docker-compose up -d
```

**Verify the database is running**
```
docker ps
```

**Following the settings in the docker-compose.yml**
```
docker exec -it my-contacts-db bash
psql -U {DB_USER} -d mycontacts
*execute schema src/database/schema.sql*
```

# 💡 Usage
Mention how to interact with the API, e.g., using Postman, Insomnia, or curl examples. You can add a Routes section here or point to API documentation if you have it.

Example using curl (for listing contacts):

```
curl http://localhost:3000/contacts
```





