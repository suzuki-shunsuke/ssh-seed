const path = require('path');
const yaml = require('js-yaml');
const passGen = require('generate-password');

const constants = require('./constants');
const fs = require('./fs');
const util = require('./util');

/**
 * keygen subcommand
 */
module.exports = function* (file, config) {
  const filePath = path.isAbsolute(file) ? file : path.join(config.path, file);
  const passFilePath = path.join(config.path, constants.PASS_FILE_NAME);
  try {
    // check authentification file existence
    yield fs.stat(filePath);
    // authentification file already exists
    // do nothing
  } catch (e) {
    // authentification file is not found
    const passphrase = passGen.generate(config.config.passphrase);
    yield util.sshKeyGen(file, passphrase, config.config.ssh_keygen.options);
    let passFile = {};
    try {
      passFile = yaml.safeLoad(yield fs.readFile(passFilePath));
    } catch (e) {}  // eslint-disable-line no-empty
    passFile[file] = passphrase;
    yield fs.writeFile(passFilePath, yaml.safeDump(passFile));
  }
};
