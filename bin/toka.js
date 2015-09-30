#!/usr/bin/env node
require('colorful').toxic();
if (!process.argv[2]) {
  console.log('toka ~ ' + require('../package').version.green);
  console.log('A handy tool to generate common files in command line'.grey);
  console.log('  $ '.cyan + 'toka -v');
  console.log('  $ '.cyan + 'toka .gitignore <LAUNGUAGE NAMES>');
  console.log('  $ '.cyan + 'toka .bowerrc <COMPONENT DIR>');
  console.log('  $ '.cyan + 'toka license <LICENSE NAME>');
  process.exit();
}
var gen = require('..');
var argv = require('minimist')(process.argv.slice(2), { '--': true });
gen(argv);