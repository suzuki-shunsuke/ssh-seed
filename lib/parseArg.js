const program = require('commander');

const util = require('./util');

/**
 * Parse command line arguments.
 */
module.exports = version => {
  program
    .version(version, '-v, --version')
    .command('init', 'create a configuration file')
    .command(
      'run',
      'create passphrases and authentication keys and add keys to ssh-agent',
      {isDefault: true}
    ).parse(process.argv);
  return program;
};

if (!module.parent) {
  const co = require('co');
  co(function* () {
    module.exports(yield util.version());
  });
}
