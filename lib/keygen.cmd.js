const yaml = require('js-yaml');
const passGen = require('generate-password');

const fs = require('./fs');
const util = require('./util');

/**
 * keygen subcommand
 */
module.exports = function* (file, filePath, config, passFilePath, passphrases) {
  try {
    // check authentication file existence
    const stat = yield fs.stat(filePath);
    if (!stat.isFile()) {
      util.writeErrLn(`ssh-seed:Warning: ${file} is not a file, so the authentication file is not generated.`);
    }
    // authentification file already exists
    // do nothing
  } catch (e) {
    // authentication file is not found
    const passphrase = passGen.generate(config.config.passphrase);
    yield util.sshKeyGen(file, passphrase, config.config.ssh_keygen.options);
    passphrases[file] = passphrase;
    yield fs.writeFile(passFilePath, yaml.safeDump(passphrases));
  }
};
