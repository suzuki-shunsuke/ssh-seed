const passGen = require('generate-password');

const fs = require('./fs');
const util = require('./util');

/**
 * keygen subcommand
 */
module.exports = function* (file, filePath, config, passphrases, state) {
  try {
    // check authentication file existence
    const stat = yield fs.stat(filePath);
    if (!stat.isFile()) {
      util.writeErrLn(`ssh-seed:Warning: ${file} is not a file, so the authentication file is not generated.`);
    }
    // if the authentication file already exists, do nothing
    return;
  } catch (e) {
    // authentication file is not found
    const passphrase = passGen.generate(config.config.passphrase);
    try {
      yield util.sshKeyGen(filePath, passphrase, config.config.ssh_keygen.options);
    } catch (_) {
      util.writeErrLn(`ssh-seed:Warning: it was failed to generate the authentication key ${file}.`);
      return;
    }
    passphrases[file] = passphrase;
    state.passUpdated = true;
  }
};
