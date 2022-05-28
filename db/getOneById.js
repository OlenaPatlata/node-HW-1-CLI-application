const readAllContacts = require("./readAllContacts");

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

module.exports = getOneById;
