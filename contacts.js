const fs = require("fs/promises");
const path = require("path").promises;
const { program } = require("commander");
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id");
program.parse(process.argv);
const argv = program.opts();

// const getPath = async () => {
//   try {
//     console.log(path.normalize("db/contacts.js"));
//     const contactsPath = await path.normalize("db/contacts.js");
//     console.log(contactsPath);
//     return contactsPath;
//   } catch (error) {
//     console.error(error);
//   }
// };

const readListContacts = async () => {
  try {
    // const contactsPath = await getPath();
    const listContacts = await fs.readFile(`${__dirname}/contacts.js`, "utf-8");
    return listContacts;
  } catch (error) {
    console.error(error);
  }
};
readListContacts();
