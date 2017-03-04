const program = require('commander');

const util = require('./util');

/**
 * Parse command line arguments.
 */
module.exports = version => {
  program
    .version(version, '-v, --version')
    .command('init', 'Create a configuration file.')
    .command(
      'run',
      ['Create passphrases and authentication keys and add keys to ssh-agent.',
       'Running ssh-seed with no command will run ssh-seed run.'
      ].join(' '),
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
