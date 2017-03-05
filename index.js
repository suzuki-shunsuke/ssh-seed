#!/usr/bin/env node

const co = require('co');
const path = require('path');
const yaml = require('js-yaml');

const util = require('./lib/util');
const constants = require('./lib/constants');
const fs = require('./lib/fs');

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
  // read pass file
  const passFilePath = path.join(config.path, constants.PASS_FILE_NAME);
  let passphrases = {};
  try {
    passphrases = yaml.safeLoad(yield fs.readFile(passFilePath));
  } catch (e) {
    // if pass file is not found, do nothing
  }

  let regexp = false;
  try {
    regexp = argv.regexp ? new RegExp(argv.regexp) : false;
  } catch (e) {
    util.writeErrLn(`ssh-seed:Error: the value of the regexp option "${argv.regexp}" is invalid for the regular expression.`);
    process.exit(1);
  }

  for (const key in config.config.keys) {
    if (regexp && !regexp.test(key)) { continue; }
    const filePath = path.isAbsolute(key) ? key : path.join(config.path, key);
    yield cmd.func(key, filePath, config, passFilePath, passphrases);
  }
};

if (!module.parent) {
  co(function* () {
    const argv = util.parseArg();
    yield main(argv);
  });
}
