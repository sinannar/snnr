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

const githubUrl = 'https://github.com/sinannar';
const linkedinUrl = 'https://linkedin.com/in/sinannar';
const blogUrl = 'https://sinannar.github.io/blog/';
const mvpUrl = 'https://mvp.microsoft.com/en-US/mvp/profile/43c0eda5-4a49-485b-8878-1f7ca51bb0a9';
const azureMeetupUrl = 'https://www.meetup.com/auckland-azure-usergroup/';
const dotnetMeetupUrl = 'https://www.meetup.com/akl-net/';
const githubMeetupUrl = 'https://www.meetup.com/aotearoa-nz-github-user-group/';

const githubLink = chalk.red(terminalLink("GitHub", githubUrl));
const linkedinLink = chalk.blue(terminalLink("LinkedIn", linkedinUrl));
const blogLink = chalk.green(terminalLink("Blog", blogUrl));
const mvpLink = chalk.yellow(terminalLink("Microsoft MVP", mvpUrl));
const azureMeetupLink = chalk.magenta(terminalLink("Aotearoa Azure Meetup", azureMeetupUrl));
const dotnetMeetupLink = chalk.magenta(terminalLink("Auckland .NET UG", dotnetMeetupUrl));
const githubMeetupLink = chalk.magenta(terminalLink("NZ GitHub UG", githubMeetupUrl));

console.clear();
console.log(img);

const header = chalk.bold.cyan(`
 ┌─────────────────────────────────────────────────────────┐
 │  Sinan Nar — Senior Software Engineer · Microsoft MVP   │
 └─────────────────────────────────────────────────────────┘
`);

const about = `
 ${chalk.white('Consultant focused on Apps and AI at')} ${chalk.yellow('ARINCO')}${chalk.white(', a Microsoft & GitHub partner.')}
 ${chalk.white('Co-organiser of Aotearoa Azure Meetup, Auckland .NET UG, and NZ GitHub UG.')}
`;

const stack = `
 ${chalk.bold.underline('Stack')}
 ${chalk.cyan('.NET & C#')}      .NET 6+ · .NET Aspire · ASP.NET · EF Core
 ${chalk.cyan('Azure')}          App Services · Functions · Container Apps · AKS · Service Bus
 ${chalk.cyan('Frontend')}       TypeScript · Angular · Ionic · Node.js
 ${chalk.cyan('DevOps')}         GitHub Actions · Azure DevOps · Terraform · Docker · Kubernetes
 ${chalk.cyan('Data')}           MSSQL · PostgreSQL · CosmosDB · MongoDB
 ${chalk.cyan('Observability')}  Datadog · Azure Monitor · App Insights
`;

const talks = `
 ${chalk.bold.underline('Talks & Writing')}
 • Aspire with AI (MCP) — Global Azure 2026
 • Hands-On with Aspire — Auckland .NET User Group
 • .NET Aspire — Junior Dev UG
 • Blog: ${chalk.green('sinannar.github.io/blog')} — .NET, Azure, GitHub, and the bits in between
`;

console.log(header);
console.log(about);
console.log(stack);
console.log(talks);

const answer = await inquirer.prompt([
    {
        type: 'list',
        name: 'url',
        message: 'Where would you like to go?',
        choices: [
          { name: mvpLink, value: mvpUrl },
          { name: githubLink, value: githubUrl },
          { name: linkedinLink, value: linkedinUrl },
          { name: blogLink, value: blogUrl },
          new inquirer.Separator(chalk.dim('── Meetups I co-organise ──')),
          { name: azureMeetupLink, value: azureMeetupUrl },
          { name: dotnetMeetupLink, value: dotnetMeetupUrl },
          { name: githubMeetupLink, value: githubMeetupUrl }
        ]
      }
]);

open(answer.url);
