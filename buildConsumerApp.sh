#!/bin/bash
export PATH=/usr/local/bin:$PATH
bundle exec pod install
bundle update
bundle exec pod repo update
# builds the code
xcrun xcodebuild -workspace ConsumerApp.xcworkspace -scheme "Tage-In-House-Enterprise" -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 8,OS=13.4.1'
# starts the iphone simulator
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-8
# downloads the app to the simulator
xcrun simctl install 0A21DF3F-F8D3-4905-983D-EECC99CF89F2 /Users/chirag.verma/Library/Developer/Xcode/DerivedData/ConsumerApp-dpyhndtiqafzkifahqcdpmlscxxc/Build/Products/In-House-Enterprise-iphonesimulator/Tage.app