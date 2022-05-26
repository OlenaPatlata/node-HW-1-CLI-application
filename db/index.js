const fs = require("fs/promises");
const path = require("path");
console.log(__dirname);
const filePath = path.join(__dirname, "contacts.json");

const getAll = async () => {
  const data = await fs.readFile(filePath);
  console.log(JSON.parse(data));
  return data;
};

module.exports = {
  getAll,
};
