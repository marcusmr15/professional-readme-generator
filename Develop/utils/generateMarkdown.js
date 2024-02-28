// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license.includes("none")) {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license.includes("none")) {
    return `This project is licensed under the [${license}](https://opensource.org/licenses/${license}) license.`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license.includes("none")) {
    return `${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

//! function for contributing section
function contributeAnswer(contributing, guidelines) {
  if (contributing.includes("yes")) {
    return `To contribute to this project, please follow these guidelines: 
    * ${guidelines}`;
  } else {
    return `N/A`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  This project was created with the help of:
  * The starter code from the [potential-enigma](https://github.com/coding-boot-camp/potential-enigma) repository by [Xander Rapstine](https://github.com/Xandromus) and [Grace Choi](https://github.com/gachoi06).
  * The _Xpert Learning Assistant_ AI developed by __edX__.
  * The _Chat GPT_ AI developed by __Open AI__.
  * The [How to create a README Generator (TUTORIAL)](https://www.youtube.com/watch?v=9YivEQFpmHQ) YouTube video by [William Locke](https://github.com/dopecello).
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${contributeAnswer(data.contributing, data.guidelines)}
  ## Tests
  ${data.tests}
  ## Questions
  * GitHub profile: [${data.username}](https://github.com/${data.questions1}).
  * If you wish to connect with me and/or contribute to this or any of my other GitHub repositories, please contact me at ${data.email}.  
`;
}

module.exports = generateMarkdown;
