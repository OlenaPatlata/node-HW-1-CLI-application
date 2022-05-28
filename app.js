const { Command } = require("commander");
const program = new Command();
const db = require("./db");

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const allContacts = await db.getAll();
        console.log(allContacts);
        break;
      case "get":
        const data = await db.getOneById(id);
        console.log(data);
        break;
      case "add":
        const dataNew = await db.addContact(name, email, phone);
        console.log(dataNew);
        break;
      case "remove":
        const removedContact = await db.removeContact(id);
        console.log(removedContact);
        break;
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.error(error);
    console.log(1111111);
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone")
  .helpOption("-h, --help", "display help for command");

program.parse(process.argv);
const options = program.opts();
invokeAction(options);
