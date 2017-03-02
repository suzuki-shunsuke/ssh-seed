# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.1"></a>
## [1.0.1](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.0.0...v1.0.1) (2017-03-02)


### Bug Fixes

* Add newlines to outputs ([e2b804c](https://github.com/suzuki-shunsuke/ssh-seed/commit/e2b804c))



<a name="1.0.0"></a>
# 1.0.0 (2017-03-02)


### Bug Fixes

* Allow the passphrase to start from the hyphen. ([1abee9f](https://github.com/suzuki-shunsuke/ssh-seed/commit/1abee9f))
* If ssh-seed.yml is not found, output error message and exit ([0e5548c](https://github.com/suzuki-shunsuke/ssh-seed/commit/0e5548c))
* Remove unused configuration options in the template ([d18c30c](https://github.com/suzuki-shunsuke/ssh-seed/commit/d18c30c))
* Use execFile instead of exec to deal with special characters ([484ab4c](https://github.com/suzuki-shunsuke/ssh-seed/commit/484ab4c))


### Features

* Allow changes of the passphrase generation options ([58c6f28](https://github.com/suzuki-shunsuke/ssh-seed/commit/58c6f28))
* Allow passing the options to the ssh-add command ([5b71740](https://github.com/suzuki-shunsuke/ssh-seed/commit/5b71740))
* Allow passing the options to the ssh-keygen command ([03d90c5](https://github.com/suzuki-shunsuke/ssh-seed/commit/03d90c5))
* Allow the change of the length of the passphrase. ([0fd4e28](https://github.com/suzuki-shunsuke/ssh-seed/commit/0fd4e28))
* Find and read configuraiton file and execute core scripts ([f7e5df5](https://github.com/suzuki-shunsuke/ssh-seed/commit/f7e5df5))
* Implement -v and -h option and unit test of them. ([1d964d3](https://github.com/suzuki-shunsuke/ssh-seed/commit/1d964d3))
* Implement init subcommand and basic functions. ([f14da59](https://github.com/suzuki-shunsuke/ssh-seed/commit/f14da59))
