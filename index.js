const randomColor = require('randomcolor');
const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});
const chalk = require('chalk');

if (process.argv[2] === 'ask') {
  console.log('Please type the name of the color and the luminosity:');
} else {
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
}
