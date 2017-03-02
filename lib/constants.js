module.exports = {
  CONFIG_FILE_NAME: 'ssh-seed.yml',
  PASS_FILE_NAME: 'ssh-seed.pass.yml',
  DEFAULT_CONFIG: {
    pwgen: {
      pass_size: 12,
      options: '',
    },
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
