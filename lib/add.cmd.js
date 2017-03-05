const path = require('path');

const fs = require('./fs');
const util = require('./util');

/**
 * add subcommand
 */
module.exports = function* (file, config, passFilePath, passphrases) {
  const isRunSSHAdd = util.getSSHAddOption(config.config, file);
  const filePath = path.isAbsolute(file) ? file : path.join(config.path, file);
  try {
    // check authentification file existence
    yield fs.stat(filePath);
    // authentification file already exists
    if (isRunSSHAdd) {
      try {
        if (file in passphrases) {
          yield util.sshAdd(
            file, passphrases[file], config.config.ssh_add.options
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
