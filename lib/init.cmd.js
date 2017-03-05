const path = require('path');

const constants = require('./constants');
const fs = require('./fs');
const util = require('./util');

/**
 * init subcommand
 */
module.exports = function* () {
  // check file existence
  try {
    // if the configuration file already exists,
    // do nothing.
    yield fs.stat(path.join(process.cwd(), constants.CONFIG_FILE_NAME));
  } catch (e) {
    // create the configuration file template.
    try {
      yield fs.copy(
        path.join(__dirname, '../template', constants.CONFIG_FILE_NAME),
        path.join(process.cwd(), constants.CONFIG_FILE_NAME)
      );
    } catch (_) {
      // it is failed to copy the configuration file
      util.writeErrLn(`ssh-seed:Error: it was failed to copy ${constants.CONFIG_FILE_NAME}.`);
      process.exit(1);
    }
  }
};
