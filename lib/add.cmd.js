const path = require('path');
const yaml = require('js-yaml');

const constants = require('./constants');
const fs = require('./fs');
const util = require('./util');

/**
 * add subcommand
 */
module.exports = function* (file, config) {
  const isRunSSHAdd = util.getSSHAddOption(config.config, file);
  const filePath = path.isAbsolute(file) ? file : path.join(config.path, file);
  const passFilePath = path.join(config.path, constants.PASS_FILE_NAME);
  try {
    // check authentification file existence
    yield fs.stat(filePath);
    // authentification file already exists
    if (isRunSSHAdd) {
      try {
        const passFile = yaml.safeLoad(yield fs.readFile(passFilePath));
        if (file in passFile) {
          yield util.sshAdd(
            file, passFile[file], config.config.ssh_add.options
          );
        } else {
          // if file is not found in the pass file,
          // do nothing.
          return;
        }
      } catch (e) {
        // if pass file is not found, do nothing.
        return;
      }
    }
  } catch (e) {
    // authentification file is not found
    // do nothing.
  }
};
