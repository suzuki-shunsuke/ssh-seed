#!/usr/bin/env node

const co = require('co');

const util = require('./lib/util');
const core = require('./lib/core');
const constants = require('./lib/constants');

const main = function* () {
  const config = yield util.findConf(process.cwd(), constants.CONFIG_FILE_NAME);
  if (!config) {
    util.writeErrLn(`Error: ${constants.CONFIG_FILE_NAME} is not found`);
    process.exit(1);
  }
  config.config = util.setDefaultConf(config.config);
  for (const key in config.config.keys) {
    yield core(key, config);
  }
};

if (!module.parent) {
  co(main);
}
