const yaml = require('js-yaml');
const passGen = require('generate-password');

const fs = require('./fs');
const util = require('./util');

/**
 * run subcommand
 */
module.exports = function* (file, filePath, config, passFilePath, passphrases) {
  const isRunSSHAdd = util.getSSHAddOption(config.config, file);
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
    const passphrase = passGen.generate(config.config.passphrase);
    yield util.sshKeyGen(file, passphrase, config.config.ssh_keygen.options);
    passphrases[file] = passphrase;
    yield fs.writeFile(passFilePath, yaml.safeDump(passphrases));
    if (isRunSSHAdd) {
      yield util.sshAdd(file, passphrase, config.config.ssh_add.options);
    }
  }
};
