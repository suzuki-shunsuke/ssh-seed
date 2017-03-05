const fs = require('./fs');
const util = require('./util');

/**
 * add subcommand
 */
module.exports = function* (file, filePath, config, passFilePath, passphrases) {
  const isRunSSHAdd = util.getSSHAddOption(config.config, file);
  try {
    // check authentication file existence
    yield fs.stat(filePath);
  } catch (e) {
    // if the authentication file is not found, do nothing.
    return;
  }
  // authentication file already exists
  if (isRunSSHAdd) {
    try {
      if (file in passphrases) {
        yield util.sshAdd(
          file, passphrases[file], config.config.ssh_add.options
        );
      } else {
        // if file is not found in the pass file, do nothing.
        return;
      }
    } catch (e) {
      // if pass file is not found, do nothing.
      return;
    }
  }
};
