#!/usr/bin/env node
'use strict';

var _lcd = require('./lcd');

var program = require('commander');

program.version('0.1.0').arguments('<num>').action(function (num) {
  console.log((0, _lcd.transform)(num));
});

program.parse(process.argv);