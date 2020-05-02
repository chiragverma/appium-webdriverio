#!/bin/bash
export PATH=/usr/local/bin:$PATH
bundle update
bundle exec pod repo update
bundle exec pod install
# builds the code
xcrun xcodebuild -workspace ConsumerApp.xcworkspace -scheme "Tage-In-House-Enterprise" -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 11,OS=13.4.1'
# opens the simulator
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-11
# downloads the app in the simulator
xcrun simctl install BE45E1CD-BC06-42E8-9EF3-B2FCDEA968CF /Users/chirag.verma/Library/Developer/Xcode/DerivedData/ConsumerApp-chkgycoenlldgdeegksnhvtcyohh/Build/Products/In-House-Enterprise-iphonesimulator/Tage.app