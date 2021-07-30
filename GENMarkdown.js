function generateMarkdown(data) {
    return `
    # ${data.Title}  [![License](https://img.shields.io/badge/${data.Licenses}}-blue.svg)](https://opensource.org/licenses/${data.Licenses})
    
    ## Description
    ${data.Description}
    
    ## Table of Contents 
    ${data.TableofContents}
    
    ## Installation
    ${data.Installation}
    
    ## Usage
    ${data.Usage}
    
    ## Contributions
    ${data.Contributions}
    
    ## Tests
    ${data.Tests}
    
    ## Licenses
    https://opensource.org/licenses/${data.Licenses}
    
    
    ## Questions
    ${data.Questions}
    
    `;
}

module.exports =generateMarkdown;