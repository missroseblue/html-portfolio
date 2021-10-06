// const fs = require("fs");
const inquirer = require("inquirer");
// const userInput = require("prompt-sync");

inquirer.prompt([
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub user name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short descrption of your project."
  },
  {
    type: "input",
    name: "license",
    message: "What license should you project have?"
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?"
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repository?"
  },
  {
    type: "input",
    name: "contributing",
    message:
      "What does the user need to know about contributing to the repository?"
  },
])
.then(answers => console.log(answers));
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
