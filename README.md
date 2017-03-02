# ssh-seed

A command line tool to generate ssh authenticaiton keys and add them to the ssh agent automatically.

## Description

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
