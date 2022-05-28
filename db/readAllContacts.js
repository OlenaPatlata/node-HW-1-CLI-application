const fs = require("fs/promises");
const filePath = require("./filePath");

const readAllContacts = async () => {
  const allContacts = await fs.readFile(filePath);
  return JSON.parse(allContacts);
};
module.exports = readAllContacts;
