const readAllContacts = require("./readAllContacts");
const updateContacts = require("./updateContacts");

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

module.exports = removeContact;
