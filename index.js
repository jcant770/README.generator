const inquirer = require('inquirer');
const FS = require('fs');
const util = require('util');
const generateMarkdown = require('./GENMarkdown');

const writeFileAsync = util.promisify(FS.writeFile);

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Tell us about your project/ offer a brief description.',
        },
        {
            type: 'checkbox',
            name: 'TableofContents',
            message: 'Which Items will be added to your table of contents?',
            choices: [
                'Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions',
            ],
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What steps if any are necessary to install your project? Please use step-by-step format',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What are some practical uses for your project? Can you give us instructions?',
        },
        {
            type: 'input',
            name: 'Contributions',
            message: 'Who or what contributed to your project?',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What are some tests that can be run on your project?',
        },
        {
            type: 'checkbox',
            name: 'Licenses',
            message: 'Which Licenses are necessary for your project?',
            choices: [
                'Apache-2.0', 
                'BSD-3-Clause', 
                'BSD-2-Clause', 
                'gpl-license', 
                'lgpl-license', 
                'MIT', 
                'MPL-2.0', 
                'CDDL-1.0', 
                'EPL-2.0', 
                '',
            ],
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Where can someone reach you if they have questions? Please list you Github username and email.' ,
        },    
    ]);   
};

function writeToFile(fileName, data) {
    FS.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README file made")
    });
}

function init() {
    questions()
        .then((data) => writeFileAsync('example.md', generateMarkdown(data)))
        .catch((err) => console.error(err));
};

init();