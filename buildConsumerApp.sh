#!/bin/bash
bundle install
bundle exec pod repo update
bundle exec pod install
xcrun xcodebuild -workspace ConsumerApp.xcworkspace -scheme "Tage-In-House-Enterprise" -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 11,OS=13.4.1'
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-11
xcrun simctl install 8CEA4566-4EF1-43E6-9ED8-F1C2C3EC5B6F /Users/chirag.verma/Library/Developer/Xcode/DerivedData/ConsumerApp-chkgycoenlldgdeegksnhvtcyohh/Build/Products/In-House-Enterprise-iphonesimulator/Tage.app