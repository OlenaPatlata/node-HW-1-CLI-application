const { nanoid } = require("nanoid");

const filePath = require("./filePath");
const readAllContacts = require("./readAllContacts");
const updateContacts = require("./updateContacts");

const getAll = async () => {
  const data = await readAllContacts();
  return data;
};

const getOneById = async (id) => {
  if (!id) {
    console.log("Where is id?");
    return null;
  }
  const data = await readAllContacts();
  const oneContact = data.filter((contact) => contact.id === id);
  if (!oneContact) {
    return null;
  }
  return oneContact;
};

const addContact = async (name, email, phone) => {
  const data = await readAllContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  data.push(newContact);
  await updateContacts(data);
  return newContact;
};

const removeContact = async (id) => {
  const data = await readAllContacts();
  const index = data.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  const [removedContact] = data.splice(index, 1);
  await updateContacts(data);
  return removedContact;
};

module.exports = {
  getAll,
  getOneById,
  addContact,
  removeContact,
};
