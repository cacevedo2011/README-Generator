const fs = require('fs');

const generatePage = require('./src/readme-template.js');

// const [username, email, title, description, license, install, test, message, contribution] = answers;

const inquirer = require("inquirer");

// array of questions for user
const questions = () => {
    return inquirer.prompt([

            {type: "input",
                name: "name",
                message: "What is your name?",
            },

            {type: "input",
                name: "username",
                message: "What is your Github username?",
            },

            {type: "input",
                name: "email",
                message: "What is your email address?",
            },

            {type: "input",
                name: "title",
                message: "What is your project's name?",
            },

            {type: "input",
                name: "description",
                message: "Please write a short description of your project",
            },

            {
                type: "list",
                name: "license",
                message: "Please select a license from the list below.",
                choices: [
                    "Apache 2.0",
                    "MIT",
                    "ISC",
                    "IBM Public license",
                    "Mozilla Public license",
                    "Artistic license 2.0",
                ],
            },

            {type: "input",
                name: "install",
                message: "What command should be run to install dependencies?",
            },

            {type: "input",
                name: "test",
                message: "what command should be run to run test?",
            },

            {type: "input",
                name: "message",
                message: "what does the user need to know about using the repo?",
            },

            {type: "input",
                name: "contribution",
                message: "What does the user need to know about contributing to the repo",
            },

    ]);
};

questions().then((answers) => {
    console.log(answers);
  
    var template = generatePage(answers);
    writeToFile("index.md", template);
  });
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err);
      }
      return console.log("Success! Look at your index.md");
    });
  } 
