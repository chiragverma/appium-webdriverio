#!/bin/bash
export PATH=/usr/local/bin:$PATH

# define variables
WORKSPACE="Shopfloor.xcworkspace"
SCHEME="In-House"
DESTINATION="platform=iOS Simulator,name=iPhone 8,OS=13.4.1"
IPHONE_VERSION_ONE="iPhone-7"
IPHONE_VERSION_TWO="iPhone-8"
APPDIR="$HOME/Library/Developer/Xcode/DerivedData/"
APP_NAME="In-House-iphonesimulator/Shopfloor.app"
PHONE_ID_ONE="AC933BAA-2178-4929-BD4F-3BF71C05043C"
PHONE_ID_TWO="0A21DF3F-F8D3-4905-983D-EECC99CF89F2"
APP_LOCATION="${APPDIR}${APP_NAME}"

pod install
bundle install
gem install bundler
bundle exec pod install --repo-update
fastlane change_tenant tenant:Chanel

# builds the code
xcrun xcodebuild -workspace Shopfloor.xcworkspace -scheme "$SCHEME" BUILD_DIR=$APPDIR -sdk iphonesimulator -destination "$DESTINATION" || { echo 'Build Failed' ; exit 1; }
# starts the iphone simulator
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.$IPHONE_VERSION_ONE
# starts the iphone simulator
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.$IPHONE_VERSION_TWO
# downloads the app to the simulator
xcrun simctl install $PHONE_ID_ONE $APP_LOCATION || { echo 'Unable to install Shopfloor App to Iphone7' ; exit 1; }
# downloads the app to the simulator
xcrun simctl install $PHONE_ID_TWO $APP_LOCATION || { echo 'Unable to install Shopfloor App to Iphone8' ; exit 1; }