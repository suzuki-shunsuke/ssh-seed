#!/usr/bin/env node

const co = require('co');
const util = require('./lib/util');
const m = require('./lib/main');
const initCommand = require('./lib/init.cmd');
const constants = require('./lib/constants');

const main = function* (argv) {
  if (argv.help) {
    return util.writeLn(yield util.help());
  }
  if (argv.version) {
    return util.writeLn(yield util.version());
  }
  if (argv._.length && argv._[0] === 'init') {
    return yield initCommand();
  }
  const config = yield util.findConf(process.cwd(), constants.CONFIG_FILE_NAME);
  if (!config) {
    util.writeLn(`Error: ${constants.CONFIG_FILE_NAME} is not found`);
    process.exit(1);
  }
  config.config = util.setDefaultConf(config.config);
  for (const key in config.config.keys) {
    yield m.main(key, config);
  }
};

if (!module.parent) {
  co(function* () {
    const argv = util.parseArg();
    yield main(argv);
  });
}
