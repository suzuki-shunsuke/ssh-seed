const co = require('co');
const util = require('./lib/util.js');

const main = function* (argv) {
  if (argv.help) {
    return process.stdout.write(yield util.help());
  }
  if (argv.version) {
    return process.stdout.write(yield util.version());
  }
};

if (!module.parent) {
  co(function* () {
    const argv = util.parseArg();
    yield main(argv);
  });
}
