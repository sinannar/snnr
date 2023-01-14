#!/usr/bin/env node
'use strict';

import got from 'got';
import terminalImage from 'terminal-image';
import terminalLink from 'terminal-link';
import chalk from 'chalk';
import inquirer from 'inquirer';
import open from 'open';

let img = await got('https://avatars.githubusercontent.com/u/1283812?v=4', { responseType: 'buffer' });
img = await terminalImage.buffer(img.body, { width: '33%' });


var githubUrl = 'https://github.com/sinannar';
var linkedinUrl = 'https://linkedin.com/in/sinannar';
var twitterUrl = 'https://twitter.com/snn_nr';

var githubTerminalLink = terminalLink("Github",githubUrl);
var linkedinTerminalLink = terminalLink("LinkedIn",linkedinUrl);
var twitterTerminalLink = terminalLink("Twitter",twitterUrl);

var coloredGithubUrl = chalk.red(githubTerminalLink);
var coloredLinkedinUrl = chalk.blue(linkedinTerminalLink);
var coloredTwitterUrl = chalk.yellow(twitterTerminalLink);


console.clear();
console.log(img)

var text = ` Hi there \n
I am Sinan Nar. I work as a Software Engineer currently and I am interested in dotnet, angular and azure \n
If you need to reach me, think twice, and if you are still keen, use one of the way below\n`;

console.log(text);
var answer = await inquirer.prompt([
    {
        type: 'list',
        name: 'url',
        message: 'These are the options for contacting me',
        choices: [
          { name: coloredGithubUrl, value: githubUrl },
          { name: coloredLinkedinUrl, value: linkedinUrl },
          { name: coloredTwitterUrl, value: twitterUrl }
        
        ]
      }
]);

console.log(answer);
open(answer.url); 
console.clear();
