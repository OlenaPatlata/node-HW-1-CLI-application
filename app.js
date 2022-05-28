const fs = require("fs/promises");
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
const filePath = `${__dirname}\\db\\contacts.json`;

// invokeAction({ filePath, action: "list" });
// invokeAction({ action: "get", id: "7" });
// invokeAction({
//   action: "add",
//   name: "Elen",
//   email: "elen@dictum.couk",
//   phone: "(715) 00000000",
// });
invokeAction({
  action: "remove",
  id: "B9uAGCj7BAkNBP8TchTw_",
});
