const fs = require("fs");
const userInput = require("prompt-sync");
const [userName, email, title, description, license, installation, tests, usage, contributing] = userInput();

let userName = prompt("What is your GitHub user name?");
let email = propmt("What is your email address?");
let title = prompt("What is the title of your project?");
let description = prompt("Please write a short descrption of your project.");
let license = prompt("What license should you project have?");
let installation = prompt("What command should be run to install dependencies?");
let tests = prompt("What command should be run to run tests?");
let usage = prompt("What does the user need to know about using the repository?");
let contributing = prompt("What does the user need to know about contributing to the repository?");


// const [title, description, tableOfContents, installation, usage, license, contributing, tests, questions] = profileDataArgs;

const generateReadMe = (userInput) => {
  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  [Title](#title)
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)


  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${license}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  GitHub Username: ${userName}
  Email: ${email}

  `;
};

fs.writeFile("README.MD", generateReadMe(), (err) => {
  if (err) throw new Error(err);

  console.log("README file is complete! Check out README.MD to see the output!");
});
