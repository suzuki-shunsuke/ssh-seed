const co = require('co');
const util = require('./lib/util.js');

const CONFIG_FILE_NAME = 'ssh-seed.yml';

const main = function* (argv) {
  if (argv.help) {
    return process.stdout.write(yield util.help());
  }
  if (argv.version) {
    return process.stdout.write(yield util.version());
  }
  const config = (yield util.findConf(process.cwd(), CONFIG_FILE_NAME)) || {
    keys: [],
  };
  for (const key of config.keys) {
    util.execScript(key, () => {});
  }
};

if (!module.parent) {
  co(function* () {
    const argv = util.parseArg();
    yield main(argv);
  });
}
