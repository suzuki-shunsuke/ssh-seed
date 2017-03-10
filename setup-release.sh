#!/bin/bash -eu

COMMIT_USER=`git config user.name`
COMMIT_EMAIL=`git config user.email`
if [ ! -d release ]; then
    git clone https://github.com/suzuki-shunsuke/ssh-seed --single-branch --branch master release
fi
cd release
git config user.name "$COMMIT_USER"
git config user.email "$COMMIT_EMAIL"
git pull origin master
npm run setup
npm run standard-version
