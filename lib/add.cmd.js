const fs = require('./fs');
const util = require('./util');

/**
 * add subcommand
 */
module.exports = function* (file, filePath, config, passphrases) {
  const isRunSSHAdd = util.getSSHAddOption(config.config, file);
  if (!isRunSSHAdd) { return; }
  try {
    // check authentication file existence
    yield fs.stat(filePath);
  } catch (e) {
    // the authentication file is not found
    util.writeErrLn(`ssh-seed:Warning: the authentication file "${file}" is not found, so it is not added to the ssh-agent.`);
    return;
  }
  // authentication file already exists
  if (file in passphrases) {
    try {
      yield util.sshAdd(
        filePath, passphrases[file], config.config.ssh_add.options
      );
    } catch (e) {
      // it is failed to run ssh-add
      util.writeErrLn(`ssh-seed:Warning: it was failed to run ssh-add ${file}`);
      return;
    }
  } else {
    // if the passphrase of the authentication file is not found in the pass file,
    util.writeErrLn(`ssh-seed:Warning: the passphrase of the authentication file "${file}" is not found in the pass file, so the authentication file is not added to the ssh-agent.`);
    return;
  }
};
