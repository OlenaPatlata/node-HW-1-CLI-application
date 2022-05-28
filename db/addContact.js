const { nanoid } = require("nanoid");
const readAllContacts = require("./readAllContacts");
const updateContacts = require("./updateContacts");

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

module.exports = addContact;
