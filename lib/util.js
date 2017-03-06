const thunkify = require('thunkify');
const path = require('path');
const minimist = require('minimist');
const execFile = require('child_process').execFile;
const yaml = require('js-yaml');

const constants = require('./constants');
const fs = require('./fs');

const commands = {
  run: require('./run.cmd'),
  init: require('./init.cmd'),
  keygen: require('./keygen.cmd'),
  add: require('./add.cmd'),
};

const exp = module.exports;

exp.getCommand = args => {
  if (args.length) {
    const name = args[0];
    if (name in commands) {
      return {name, func: commands[name]};
    } else {
      exp.writeErrLn(`ssh-seed:Error: An invalid argument "${name}" is found.`);
      process.exit(1);
    }
  }
  return {name: 'run', func: commands.run};
};

exp.writeLn = text => {
  process.stdout.write(`${text}\n`);
};

exp.writeErrLn = text => {
  process.stderr.write(`${text}\n`);
};

/**
 * Returns the help documentation string.
 */
exp.help = fs.readFile.bind(fs, path.join(__dirname, '../HELP'));

/**
 * Returns the software version string.
 */
exp.version = function*() {
  return JSON.parse(
    yield fs.readFile(path.join(__dirname, '../package.json'))
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

/**
 */
exp.getSSHAddOption = (config, key) => {
  const options = config.keys[key];
  return options && ('ssh_add' in options) ?
    options.ssh_add : config.ssh_add.default;
};

const CMD_SSH_KEYGEN = path.join(__dirname, '../sh/ssh-keygen');
const CMD_SSH_ADD = path.join(__dirname, '../sh/expect-ssh-add');

exp.sshKeyGen = thunkify((file, passphrase, options, callback) => {
  execFile(CMD_SSH_KEYGEN, [file, passphrase, options], callback);
});

exp.sshAdd = thunkify((file, passphrase, options, callback) => {
  execFile(CMD_SSH_ADD, [file, passphrase, options], callback);
});

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
      return {
        path: p,
        config: yaml.safeLoad(yield fs.readFile(path.join(p, fileName))),
      };
    } catch (e) {
      if (p === '/') { return null; }
      p = path.dirname(p);
    }
  }
};

exp.setDefaultConf = config => {
  if (!config) {
    return constants.DEFAULT_CONFIG;
  }
  const conf = {};
  ['passphrase', 'ssh_add', 'ssh_keygen'].forEach(key => {
    conf[key] = Object.assign(
      {}, constants.DEFAULT_CONFIG[key], config[key] || {}
    );
  });
  conf.keys = config.keys || [];
  return conf;
};
