#!/bin/bash -eu

if [ ! -d release ]; then
    git clone https://github.com/suzuki-shunsuke/ssh-seed --single-branch --branch master release
fi
cd release
git pull origin master
npm run setup
npm run standard-version
