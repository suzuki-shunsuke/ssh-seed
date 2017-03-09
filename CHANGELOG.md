# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.6.2"></a>
## [1.6.2](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.6.1...v1.6.2) (2017-03-09)


### Bug Fixes

* Fix a bug to fail to add ssh authentication keys ([5cbd936](https://github.com/suzuki-shunsuke/ssh-seed/commit/5cbd936))



<a name="1.6.1"></a>
## [1.6.1](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.6.0...v1.6.1) (2017-03-06)


### Performance Improvements

* Write passphrases in the pass file one time only ([be82456](https://github.com/suzuki-shunsuke/ssh-seed/commit/be82456))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.5.1...v1.6.0) (2017-03-06)


### Features

* Handle invalid arguments ([149af14](https://github.com/suzuki-shunsuke/ssh-seed/commit/149af14))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.5.0...v1.5.1) (2017-03-06)


### Bug Fixes

* Fix the file path passed to 'keygen' and 'add' ([cc3ec70](https://github.com/suzuki-shunsuke/ssh-seed/commit/cc3ec70))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.4.1...v1.5.0) (2017-03-05)


### Features

* Add the "--reqexp" option ([b2b4ca0](https://github.com/suzuki-shunsuke/ssh-seed/commit/b2b4ca0))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.4.0...v1.4.1) (2017-03-05)



<a name="1.4.0"></a>
# [1.4.0](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.3.1...v1.4.0) (2017-03-05)


### Features

* Add some error handlings ([1b31aff](https://github.com/suzuki-shunsuke/ssh-seed/commit/1b31aff))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.3.0...v1.3.1) (2017-03-05)


### Bug Fixes

* Fix the release way to prevent extra files from publishing ([fb54519](https://github.com/suzuki-shunsuke/ssh-seed/commit/fb54519))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.2.1...v1.3.0) (2017-03-05)


### Features

* Output a warning when it is failed to run ssh-keygen ([1389abd](https://github.com/suzuki-shunsuke/ssh-seed/commit/1389abd))
* Output a warning when the given authentication path is not a file ([2d4679c](https://github.com/suzuki-shunsuke/ssh-seed/commit/2d4679c))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.2.0...v1.2.1) (2017-03-05)


### Performance Improvements

* Read the pass file one time only ([e098f1f](https://github.com/suzuki-shunsuke/ssh-seed/commit/e098f1f))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.1.0...v1.2.0) (2017-03-05)


### Features

* Add the 'add' subcommand ([083aca0](https://github.com/suzuki-shunsuke/ssh-seed/commit/083aca0))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.0.6...v1.1.0) (2017-03-04)


### Features

* Add the 'keygen' subcommand ([b8c6838](https://github.com/suzuki-shunsuke/ssh-seed/commit/b8c6838))



<a name="1.0.6"></a>
## [1.0.6](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.0.5...v1.0.6) (2017-03-04)



<a name="1.0.5"></a>
## [1.0.5](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.0.4...v1.0.5) (2017-03-03)


### Bug Fixes

* Output the error message to stderr ([f23eb44](https://github.com/suzuki-shunsuke/ssh-seed/commit/f23eb44))



<a name="1.0.4"></a>
## [1.0.4](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.0.3...v1.0.4) (2017-03-03)


### Bug Fixes

* Add js-yaml to dependencies ([01b55f6](https://github.com/suzuki-shunsuke/ssh-seed/commit/01b55f6))



<a name="1.0.3"></a>
## [1.0.3](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.0.2...v1.0.3) (2017-03-03)


### Performance Improvements

* Change some dependencies to devDependencies ([c4bab20](https://github.com/suzuki-shunsuke/ssh-seed/commit/c4bab20))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/suzuki-shunsuke/ssh-seed/compare/v1.0.1...v1.0.2) (2017-03-02)



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
