#!/usr/bin/env node

const co = require('co');
const util = require('./lib/util');
const constants = require('./lib/constants');

const main = function* (argv) {
  if (argv.help) {
    return util.writeLn(yield util.help());
  }
  if (argv.version) {
    return util.writeLn(yield util.version());
  }
  const cmd = util.getCommand(argv._);
  if (cmd.name === 'init') {
    return yield cmd.func();
  }
  const config = yield util.findConf(process.cwd(), constants.CONFIG_FILE_NAME);
  if (!config) {
    util.writeErrLn(`ssh-seed:Error: ${constants.CONFIG_FILE_NAME} is not found.`);
    process.exit(1);
  }
  config.config = util.setDefaultConf(config.config);
  for (const key in config.config.keys) {
    yield cmd.func(key, config);
  }
};

if (!module.parent) {
  co(function* () {
    const argv = util.parseArg();
    yield main(argv);
  });
}
