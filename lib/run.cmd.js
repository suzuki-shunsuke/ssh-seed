const addCommand = require('./add.cmd');
const keygenCommand = require('./keygen.cmd');

/**
 * run subcommand
 */
module.exports = function* (file, filePath, config, passFilePath, passphrases) {
  yield keygenCommand(file, filePath, config, passFilePath, passphrases);
  yield addCommand(file, filePath, config, passFilePath, passphrases);
};
