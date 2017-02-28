const fs = require('fs');
const thunkify = require('thunkify');
const path = require('path');
const minimist = require('minimist');

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
