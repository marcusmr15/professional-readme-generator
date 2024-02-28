// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project's purpose.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions if required",   
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the intended usage information regarding your project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select the license that best fits your project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "checkbox",
        name: "contributing",
        message: "Do you want people to contribute to your repository?",
        choices: ["yes", "no"],
    },
    {
        type: "input",
        name: "guidelines",
        message: "Please provide contribution guidelines:",
        when: (answers) => answers.contributing && answers.contributing.includes("yes"),
    },
    {
        type: "input",
        name: "tests",
        message: "If applicable, provide the required tests for your project.",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating professional README.md file...');
        writeToFile('./dist/README.md', generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
