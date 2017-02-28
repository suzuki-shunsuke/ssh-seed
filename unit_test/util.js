const chai = require('chai');
const mocha = require('mocha');
const co = require('co');

const util = require('../lib/util.js');

const describe = mocha.describe.bind(mocha);
const it = mocha.it.bind(mocha);
const expect = chai.expect.bind(chai);

describe('help', () => {
  it('return string', done => {
    co(function*() {
      expect(
        typeof (yield util.help())
      ).to.be.equal('string');
    }).then(done);
  });
});

describe('version', () => {
  it('return string', done => {
    co(function*() {
      expect(
        typeof (yield util.version())
      ).to.be.equal('string');
    }).then(done);
  });
});
