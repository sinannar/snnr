#!/usr/bin/env node
'use strict';

import got from 'got';
import terminalImage from 'terminal-image';
import * as wrap from 'word-wrap';
import terminalLink from 'terminal-link';
import chalk from 'chalk';

let img = await got('https://avatars.githubusercontent.com/u/1283812?v=4', { responseType: 'buffer' });
img = await terminalImage.buffer(img.body, { width: '33%' });


var githubUrl = terminalLink("Sinan's Github",'https://github.com/sinannar');
var linkedinUrl = terminalLink("Sinan's LinkedIn",'https://linkedin.com/in/sinannar');
var coloredGithubUrl = chalk.red(githubUrl);
var coloredLinkedinUrl = chalk.blue(linkedinUrl);


console.clear();
console.log(img)
console.log(coloredGithubUrl)
console.log(coloredLinkedinUrl);



// var ww = require('word-wrap');
// var iq = require('inquirer');
// var opn = require('open');

// let img = await got('https://avatars.githubusercontent.com/u/1283812?v=4', { responseType: 'buffer' });
// imt = img.buffer(image.body, { width: '33%' });
// console.log(image)

// got('https://avatars.githubusercontent.com/u/1283812?v=4', { responseType: 'buffer' })
//     .then(function (image) { return img.buffer(image.body, { width: '33%' }) })
//     .then(function (image) {

//         console.log(image)
//         console.log(ww(`
// Hello, this is ${c.blue.bold("Sinan Nar")}!
// `.trim(), { width: 200, trim: true }));

//         // I'm a passionate ${c.bgRed.white.bold("software developer")} living in ${c.bold("Istanbul, Turkey")}, working for ${link(c.hex('#3858A2').bold('Teknasyon'), 'https://teknasyon.com')} as the ${c.bgRed.white.bold("DevRel Manager")}.
//         // I ${c.bold("wrote a book")} about ${c.underline.bold.yellow("JavaScript")}. I love being part of development of web technologies. I like to ${c.bold("organize conferences and give talks")}.
//         // I love ${c.underline.bold.green("open source development")} and I build things on my GitHub profile ${link(c.red.bold('github.com/f'), 'https://github.com/f')}.
//         // I love ${c.bold.yellow("JavaScript")} and ${c.bold.red("Ruby (and RoR)")}.

//         console.log('\n\n')
//         iq.prompt([
//             {
//                 type: 'list',
//                 message: 'Do you want to learn more about me?',
//                 name: 'open',
//                 choices: [
//                     // { name: c.gray(`💻  What am I doing about Open Source? (${c.bold('GitHub')})`), value: 'https://github.com/f' },
//                     { name: c.cyan(`🐦  My Twitter if you care? (${c.bold('Twitter')})`), value: 'https://twitter.com/snn_nr' },
//                     { name: c.blue(`🏹  If you say lets be more professional (${c.bold('LinkedIn')})`), value: 'https://linkedin.com/in/sinannar' },
//                     { name: c.red('👋  Nope. Bye.\n'), value: false }
//                 ]
//             }
//         ]).then(function (a) { opn(a.open); process.exit(); }).catch(function () { });
//     }).catch(function (e) { console.log(e) });