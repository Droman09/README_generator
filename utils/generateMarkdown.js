// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title} 

  ![License: ${data.license}](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installments)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Test Instructions](#test)
  * [License](#license)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installments} is required to run this program

  ## Usage 
  //add a video on how to use this application 
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Test 
  ${data.test}

  ## License
  This project is license under the ${data.license} license 

  ## Questions
  If you have any questions you can contact me at  
  Github - [https://github.com/${data.github}](https://github.com/${data.github})

  Email - ${data.email}
`;
}

module.exports = generateMarkdown;
