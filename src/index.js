#!/usr/bin/env node

import { transform } from './lcd'
let program = require('commander');

program
  .version('0.1.0')
  .arguments('<num>')
  .action( num => {
    console.log(transform(num)); 
  });

program.parse(process.argv)
