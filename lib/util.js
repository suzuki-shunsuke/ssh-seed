const fs = require('fs');
const thunkify = require('thunkify');
const path = require('path');
const minimist = require('minimist');
const exec = require('child_process').exec;
const yaml = require('js-yaml');

const exp = module.exports;

/**
 * fs.readFile's generator version.
 */
exp.readFile = thunkify((file, callback) => {
  fs.readFile(file, 'utf8', callback);
});

/**
 * Returns the help documentation string.
 */
exp.help = exp.readFile.bind(null, path.join(__dirname, '../HELP'));

/**
 * Returns the software version string.
 */
exp.version = function*() {
  return JSON.parse(
    yield exp.readFile(path.join(__dirname, '../package.json'))
  ).version || '';
};

/**
 * Parse command line arguments.
 */
exp.parseArg = () => {
  return minimist(
    process.argv.slice(2), {
      alias: {
        v: 'version', h: 'help',
      },
    }
  );
};

const CMD = path.join(__dirname, '../sh/ssh-seed');

/**
 * Execute expect scripts.
 */
exp.execScript = (file, callback) => {
  exec(`${CMD} ${file}`, callback);
};

/**
 * Find and read a configuration file.
 * @param {string} root absolute base path
 * @param {string} fileName configuration file name
 * @return {object || null} If a configuration file is not found, return null.
 */
exp.findConf = function* (root, fileName) {
  let p = root;
  while (true) {  // eslint-disable-line no-constant-condition
    try {
      return yaml.safeLoad(yield exp.readFile(path.join(p, fileName)));
    } catch (e) {
      if (p === '/') { return null; }
      p = path.dirname(p);
    }
  }
};
