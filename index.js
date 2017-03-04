#!/usr/bin/env node

const co = require('co');
const util = require('./lib/util');
const parseArg = require('./lib/parseArg');

if (!module.parent) {
  co(function* () {
    parseArg(yield util.version());
  });
}
