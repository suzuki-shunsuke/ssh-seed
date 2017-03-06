const addCommand = require('./add.cmd');
const keygenCommand = require('./keygen.cmd');

/**
 * run subcommand
 */
module.exports = function* (file, filePath, config, passphrases, state) {
  yield keygenCommand(file, filePath, config, passphrases, state);
  yield addCommand(file, filePath, config, passphrases);
};
