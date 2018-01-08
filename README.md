# ssh-seed

[![Build Status](https://travis-ci.org/suzuki-shunsuke/ssh-seed.svg?branch=master)](https://travis-ci.org/suzuki-shunsuke/ssh-seed)
[![npm version](https://badge.fury.io/js/ssh-seed.svg)](https://badge.fury.io/js/ssh-seed)
[![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/ssh-seed.svg)](https://github.com/suzuki-shunsuke/ssh-seed)

A command line tool to generate ssh authenticaiton keys and add them to the ssh agent automatically.

## Description

It is boring and tiring to generate many ssh passphrases and authenticaiton keys and add them to the ssh agent.
This tool executes that task automatically.

## Demo (Gif Animation)

https://giphy.com/gifs/demo-ssh-seed-xUPGcnBZ18P2IchhoQ

This gif animation shows

1. Install
2. Create a configuration file skelton
3. Create multiple passphrases and authenticaiton keys and add keys to the ssh agent by one command (not interactive)

## Requirements

* expect
* Node.js

## Install

```
$ npm i -g ssh-seed
```

## Usage

To see All available options and subcommand,
please see [here](HELP).

1. Create the configuration file.

```
$ ssh-seed init
```

2. After edit the configuration file, run ssh-seed

```
$ ssh-seed
```

Running ssh-seed with no command will run the `run` subcommand.
The `run` subcommand creates passphrases and authentication keys and adds keys to ssh-agent.

If you want only to create passphrases and authentication keys but not to add keys to ssh-agent,
use the `keygen` command.

```
$ ssh-seed keygen
```

The `keygen` command was added in v1.1.0 .

If you want only to add existing keys to ssh-agent
but not to create new passphrases and authentication keys,
use the `add` command.

```
$ ssh-seed add
```

The `add` command was added in v1.2.0 .

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

## Change Log

Please see [here](CHANGELOG.md).
This change log is generated automatically with [standard-version](https://github.com/conventional-changelog/standard-version).

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
