//require funciona con promesas que
const fs = require("fs");

const nombre = "Carlos";

fs.writeFile("hola.txt", `Hola ${nombre}`, (error) => {
  if (error) {
    console.log(`ERROR!`);
  } else {
    console.log(`HECHO`);
  }
});
