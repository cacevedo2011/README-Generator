const fs = require('fs');

const generatePage = require('../src/readme-template.js');

const [username, email, title, description, license, install, test, message, contribution] = questions;

// array of questions for user
const questions = require('inquirer') [
        /* Pass your questions in here */
         inquirer.prompt([

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

            {type: "checkbox",
                name: "license",
                message: "What kind of licenses shourld your project have?",
                choices: 
                    [
                        "Artistic license 2.0",
                        "MIT",
                        "ISC",
                        "Microsoft Public license",
                        "Mozilla Public license",
                        "Academic Free license",
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
                message: "What does the iser need to know about contributing to the repo",
            },

]);

// function to write README file
fs.writeFile('index.md', generatePage(username, email, title, description, license, install, test, message, contribution), => err {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
