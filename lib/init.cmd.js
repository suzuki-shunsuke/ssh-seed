const path = require('path');

const constants = require('./constants');
const fs = require('./fs');

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
    yield fs.copy(
      path.join(__dirname, '../template', constants.CONFIG_FILE_NAME),
      path.join(process.cwd(), constants.CONFIG_FILE_NAME)
    );
  }
};
