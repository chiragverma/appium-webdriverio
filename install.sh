#!/bin/bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew uninstall -g carthage;
brew install carthage
brew link --overwrite carthage
npm install selenium-webdriver
carthage bootstrap --platform iOS\,tvOS
appium --p 4723 &
appium --p 4724 &
npm run singleshopfloortest.app