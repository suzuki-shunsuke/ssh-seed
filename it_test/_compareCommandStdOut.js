const chai = require('chai');
const path = require('path');
const exec = require('child_process').exec;

const expect = chai.expect.bind(chai);

const mainFile = path.join(__dirname, '../index');

/**
 * Compare the stdout of the command and the given string
 * @param {string} option - command line options and arguments
 * @param {string} text - expected output string
 * @param {function} done - mocha's callback function
 */
module.exports = (option, text, done) => {
  exec(`node ${mainFile} ${option}`, (err, stdout) => {
    expect(stdout).to.be.equal(text);
    done();
  });
};
