const mocha = require('mocha');
const co = require('co');

const util = require('../lib/util');
const compareCommandStdOut = require('./_compareCommandStdOut');

const describe = mocha.describe.bind(mocha);
const it = mocha.it.bind(mocha);
const before = mocha.before.bind(mocha);

describe('IT Test version option', () => {
  let text = '';
  before('get version', done => {
    co(function*() {
      text = yield util.version();
      text += '\n';
    }).then(done);
  });
  it('-v', done => {
    compareCommandStdOut('-v', text, done);
  });
  it('--version', done => {
    compareCommandStdOut('--version', text, done);
  });
});
