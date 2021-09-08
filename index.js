const randomColor = require('randomcolor');
const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});
const chalk = require('chalk');

console.log(chalk.hex(color)`
#########################
#########################
#########################
#####               #####
#####    ${color}    #####
#####               #####
#########################
#########################
#########################`);
