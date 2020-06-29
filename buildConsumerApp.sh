#!/bin/bash
export PATH=/usr/local/bin:$PATH
export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# define variables
WORKSPACE="ConsumerApp.xcworkspace"
SCHEME="Tage-In-House-Enterprise"
DESTINATION="platform=iOS Simulator,name=iPhone 7,OS=13.5"
IPHONE_VERSION="iPhone-7"
APPDIR="$HOME/Library/Developer/Xcode/DerivedData/"
APP_NAME="In-House-Enterprise-iphonesimulator/Tage.app"
PHONE_ID="$(instruments -s devices | grep -m 1 'iPhone 7' | awk -F'[][]' '{print $2}')"
APP_LOCATION="${APPDIR}${APP_NAME}"

# cleans the code
xcodebuild clean -workspace $WORKSPACE -scheme "$SCHEME"

gem install cocoapods-deintegrate
gem install cocoapods-clean
pod deintegrate
pod clean
pod install
bundle install
bundle exec pod install

# builds the code
xcrun xcodebuild -workspace $WORKSPACE -scheme "$SCHEME" BUILD_DIR=$APPDIR -sdk iphonesimulator -destination "$DESTINATION" || { echo 'Build Failed' ; exit 1; }
# starts the iphone simulator
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.$IPHONE_VERSION
# downloads the app to the simulator
xcrun simctl install "$PHONE_ID" $APP_LOCATION || { echo 'Unable to install Consumer App' ; exit 1; }