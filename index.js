const randomColor = require('randomcolor');
const chalk = require('chalk');
const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

const output = chalk.hex(color)`
#########################
#########################
#########################
#####               #####
#####    ${color}    #####
#####               #####
#########################
#########################
#########################`;

console.log(output);
