console.log("Hello");
const fs = require("fs").promises;
const path = require("path").promises;
const colors = require("colors");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { program } = require("commander");
require("colors");
program.parse(process.argv);
console.log(process.argv.slice(2));
program.option("-d, --debug");

const moduleContacts = require("./contacts");
// moduleContacts.getAll();
let count = 0;

rl.on("line", (cmd) => {
  console.log(`You just typed: ${cmd}`);
});

rl.question("Как вас зовут?", (answer) => {
  console.log(`Hi ${answer}`.yellow);
});

// fs.readFile("./db/contacts.json", "utf-8")
//   .then((data) => {
//     return console.log(data);
//   })
//   .catch((err) => console.error(err));

// fs.readdir(__dirname)
//   .then((files) => {
//     return Promise.all(
//       files.map(async (filename) => {
//         const stats = await fs.stat(filename);
//         return { Name: filename, Size: stats.size, Data: stats.mtime };
//       })
//     );
//   })
//   .then((result) => console.table(result));
