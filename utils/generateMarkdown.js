// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 

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

  ## Installation Instructions
  ${data.installments}

  ## Usage 
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Test 
  ${data.test}

  ## License
  ${data.license}

  ## Questions
  Github -  https://github.com/${data.github}
  Email - ${data.email}
`;
}

module.exports = generateMarkdown;
