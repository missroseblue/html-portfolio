// const fs = require("fs");
const inquirer = require("inquirer");
// const userInput = require("prompt-sync");

const questions = () => {
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
    type: "input",
    name: "license",
    message: "What license should you project have?",
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log('Please enter what kind of license your should have!')
        return false
      }
      }
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
questions()
.then(answers => console.log(answers))
.then(projectAnswers => console.log(projectAnswers));

// .then (function(userInput) {
//   const 
// })

// const generateReadMe = (userInput) => {
//   return `
//   # ${title}

//   ## Description
//   ${description}

//   ## Table of Contents
//   [Title](#title)
//   [Description](#description)
//   [Installation](#installation)
//   [Usage](#usage)
//   [License](#license)
//   [Contributing](#contributing)
//   [Tests](#tests)
//   [Questions](#questions)


//   ## Installation
//   ${installation}

//   ## Usage
//   ${usage}

//   ## License
//   ${license}

//   ## Contributing
//   ${contributing}

//   ## Tests
//   ${tests}

//   ## Questions
//  If you have additional questions about my project, you can reach me at:
//   GitHub Username: ${userName}
//   Email: ${email}

//   `;
// };

// fs.writeFile("README.MD", generateReadMe(), (err) => {
//   if (err) throw new Error(err);

//   console.log(
//     "README file is complete! Check out README.MD to see the output!"
//   );
// });

// let userName = prompt("What is your GitHub user name?");
// let email = propmt("What is your email address?");
// let title = prompt("What is the title of your project?");
// let description = prompt("Please write a short descrption of your project.");
// let license = prompt("What license should you project have?");
// let installation = prompt("What command should be run to install dependencies?");
// let tests = prompt("What command should be run to run tests?");
// let usage = prompt("What does the user need to know about using the repository?");
// let contributing = prompt("What does the user need to know about contributing to the repository?");
