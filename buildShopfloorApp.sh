#!/bin/bash
export PATH=/usr/local/bin:$PATH
export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# define variables
WORKSPACE="Shopfloor.xcworkspace"
SCHEME="In-House"
DESTINATION="platform=iOS Simulator,name=iPhone 8,OS=13.5"
IPHONE_VERSION_ONE="iPhone-7"
IPHONE_VERSION_TWO="iPhone-8"
APPDIR="$HOME/Library/Developer/Xcode/DerivedData/"
APP_NAME="In-House-iphonesimulator/Shopfloor.app"
PHONE_ID_ONE="$(instruments -s devices | grep -m 1 'iPhone 7' | awk -F'[][]' '{print $2}')"
PHONE_ID_TWO="$(instruments -s devices | grep -m 1 'iPhone 8' | awk -F'[][]' '{print $2}')"
APP_LOCATION="${APPDIR}${APP_NAME}"

pod install
bundle install
bundle exec pod install
gem install bundler
fastlane change_tenant tenant:Chanel

# builds the code
xcrun xcodebuild -workspace $WORKSPACE -scheme "$SCHEME" BUILD_DIR=$APPDIR -sdk iphonesimulator -destination "$DESTINATION" || { echo 'Build Failed' ; exit 1; }
# starts the iphone simulator
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.$IPHONE_VERSION_ONE
# starts the iphone simulator
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.$IPHONE_VERSION_TWO
# downloads the app to the simulator
xcrun simctl install $PHONE_ID_ONE $APP_LOCATION || { echo 'Unable to install Shopfloor App to Iphone7' ; exit 1; }
# downloads the app to the simulator
xcrun simctl install $PHONE_ID_TWO $APP_LOCATION || { echo 'Unable to install Shopfloor App to Iphone8' ; exit 1; }