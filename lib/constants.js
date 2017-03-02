module.exports = {
  CONFIG_FILE_NAME: 'ssh-seed.yml',
  PASS_FILE_NAME: 'ssh-seed.pass.yml',
  DEFAULT_CONFIG: {
    passphrase: {},
    ssh_add: {
      'default': false,
      options: '',
    },
    ssh_keygen: {
      options: '',
    },
    keys: [],
  },
};
