# ssh-seed

[[Build Status](https://travis-ci.org/suzuki-shunsuke/ssh-seed.svg?branch=master)](https://travis-ci.org/suzuki-shunsuke/ssh-seed)!

A command line tool to generate ssh authenticaiton keys and add them to the ssh agent automatically.

## Description

It is boring and tired to generate many ssh passphrases and authenticaiton keys and add them to the ssh agent.
This tool executes that task automatically.

## Requirements

* ssh-add
* ssh-keygen
* expect
* node

## Install

```
$ npm i -g ssh-seed
```

## Usage

Create the configuration file.

```
$ ssh-seed init
```

After edit the configuration file, run ssh-seed

```
$ ssh-seed
```

## Configuration options

Please see [comments of the configuration file](template/ssh-seed.yml).

## Configuration file search

When the ssh-seed command is run, the configuration file `ssh-seed.yml`
is searched from the current directory to the root directory in order.
If it is found once, the search is stopped.
If it is not found, an error is occured.

## ssh-seed.pass.yml

When the ssh-seed command generate the authenticaiton keys,
at the same time passphrases of them are generated and written
in the ssh-seed.pass.yml.
The ssh-seed.pass.yml is generated in the directory where ssh-seed.yml is.

## Contributing

1. Fork (https://github.com/suzuki-shunsuke/ssh-seed/fork)
2. Create a feature branch
3. Commit your changes
4. Rebase your local changes against the master branch
5. Run test suite with the `npm test` command and confirm that it passes
6. Create a new Pull Request

## License

[MIT](LICENSE)

## Author

[Suzuki Shunsuke](https://github.com/suzuki-shunsuke)
