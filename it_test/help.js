const mocha = require('mocha');
const path = require('path');
const co = require('co');

const fs = require('../lib/fs');

const compareCommandStdOut = require('./_compareCommandStdOut');

const describe = mocha.describe.bind(mocha);
const it = mocha.it.bind(mocha);
const before = mocha.before.bind(mocha);

describe('IT Test help option', () => {
  const help = path.join(__dirname, '../HELP');
  let text = '';
  before('Read the help document', done => {
    co(function*() {
      text = yield fs.readFile(help);
      text += '\n';
    }).then(done);
  });
  it('-h', done => {
    compareCommandStdOut('-h', text, done);
  });
  it('--help', done => {
    compareCommandStdOut('--help', text, done);
  });
});
