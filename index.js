const fs = require("fs");
const generateReadMe = require("./src/readme-template.js");
const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "What is your GitHub user name?",
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub user name!')
        return false
      }
      }
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address!')
        return false
      }
      }
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter the name of your project!')
        return false
      }
      }
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.",
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description of your project!')
        return false
      }
      }
  },
  {
    type: "list",
    name: "license",
    message: "What license should you project have?",
    choices: [
      "Apache License 2.0",
      "GNU GPLv3",
      "MIT License",
      "None"
    ]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter what command should be run to intall dependencies!')
        return false
      }
      }
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    validate: testsInput => {
      if (testsInput) {
        return true;
      } else {
        console.log('Please enter what command should be run to run tests!')
        return false
      }
      }
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repository?",
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter what users need to know about using the repositoty!')
        return false
      }
      }
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repository?",
      validate: contributingInput => {
        if (contributingInput) {
          return true;
        } else {
          console.log('Please enter what the user should know about contributing to the repository!')
          return false
        }
        }
  },
])
};
promptUser()
.then ((data) => {
  const pageReadMe = generateReadMe(data);

  fs.writeFile('./dist/README.MD', pageReadMe, (err) => {
  if (err) throw new Error(err);

  console.log(
    "README file is complete! Check out README.MD to see the output!");
  });
});


