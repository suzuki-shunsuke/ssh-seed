const fs = require('fs-extra');
const thunkify = require('thunkify');

const exp = module.exports;

/**
 * fs module's generator version.
 */
['copy', 'writeFile', 'stat'].forEach(key => {
  exp[key] = thunkify(fs[key].bind(fs));
});

/**
 * fs.readFile's generator version.
 */
exp.readFile = thunkify((file, callback) => {
  fs.readFile(file, 'utf8', callback);
});
