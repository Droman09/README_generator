const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs'); 


// array of questions for user
const questions = [{
    type: "input", 
    message: "What is the title of your project?",
    name: "title"
},{
    type: "input", 
    message: "Provibe the description of your project here",
    name: "description"
},{
    type: "input", 
    message: "What installments do you need to make this app functional?",
    name: "installments"
},{
    type: "input", 
    message: "How would you like your application to be used?",
    name: "usage"
},{
    type: "checkbox", 
    message: "Select the license you used:",
    choices: ["MIT"],
    name: "license"
},{
    type: "input", 
    message: "Who contributed on this project?",
    name: "contributions"
},{
    type: "input", 
    message: "What are the test instructions for this project?",
    name: "test"
},{
    type: "input", 
    message: "What is your github account",
    name: "github"
},{
    type: "input", 
    message: "What is your email address?",
    name: "email"
}];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data , (error) => {
         error ? console.log(error) : console.log("Success!")
      })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(data => writeToFile("ReadMe.md", generateMarkdown(data)));
}

// function call to initialize program
init();
