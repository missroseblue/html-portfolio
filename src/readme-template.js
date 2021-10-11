// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return `![Apache 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen)`;
  } else if (license === "MIT License") {
    return `![MIT License](https://img.shields.io/badge/license-MIT-blue)`;
  } else if (license === "GNU GPLv3") {
    return `![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-red)`;
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === "MIT License") {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "GNU GPLv3") {
    return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else {
    return `None of these licenses`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache License 2.0") {
    return `This project has an Apache License 2.0`;
  } else if (license === "MIT License") {
    return `This project has an MIT License`;
  } else if (license === "GNU GPLv3") {
    return `This project has a GNU GPLv3`;
  } else {
    return `This project has none of these licenses`
  }
}

const generateReadMe = (userInput) => {
  return `
# ${userInput.title}

## Description
${userInput.description}

## Table of Contents
* [Title](#title)\n
* [Description](#description)\n
* [Installation](#installation)\n
* [Usage](#usage)\n
* [License](#license)\n
* [Contributing](#contributing)\n
* [Tests](#tests)\n
* [Questions](#questions)


## Installation
${userInput.installation}

## Usage
${userInput.usage}

## License
${renderLicenseBadge(userInput.license)}\n
${renderLicenseSection(userInput.license)}\n
${renderLicenseLink(userInput.license)}

## Contributing
${userInput.contributing}

## Tests
${userInput.tests}

## Questions
If you have additional questions about my project, you can reach me at:\n
GitHub Username: ${userInput.username}\n
Email: ${userInput.email}
  `;
};

module.exports = generateReadMe;
