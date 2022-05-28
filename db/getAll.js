const readAllContacts = require("./readAllContacts");
const getAll = async () => {
  const data = await readAllContacts();
  return data;
};
module.exports = getAll;
