const path = require('path');
const yaml = require('js-yaml');
const passGen = require('generate-password');

const fs = require('./fs');
const util = require('./util');

/**
 * keygen subcommand
 */
module.exports = function* (file, config, passFilePath, passphrases) {
  const filePath = path.isAbsolute(file) ? file : path.join(config.path, file);
  try {
    // check authentification file existence
    yield fs.stat(filePath);
    // authentification file already exists
    // do nothing
  } catch (e) {
    // authentification file is not found
    const passphrase = passGen.generate(config.config.passphrase);
    yield util.sshKeyGen(file, passphrase, config.config.ssh_keygen.options);
    passphrases[file] = passphrase;
    yield fs.writeFile(passFilePath, yaml.safeDump(passphrases));
  }
};
