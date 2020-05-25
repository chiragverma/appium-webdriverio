#!/bin/bash
export PATH=/usr/local/bin:$PATH
cd $HOME/mirror && yarn
cd $HOME/mirror/packages/tage && yarn build
yarn start &