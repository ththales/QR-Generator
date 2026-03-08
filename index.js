import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        type: "input",
        name: "link",
        message: "Insira o link: ",
    },
  ])
  .then((answers) => {
    var url = answers.link;
    var qr_png = qr.image(url, {type:"png"});
    qr_png.pipe(fs.createWriteStream("qr-code.png"));
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });