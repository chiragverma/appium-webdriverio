#!/bin/bash
xcrun xcodebuild -workspace ConsumerApp.xcworkspace -scheme "Tage-In-House-Enterprise" -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 11,OS=13.2'
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-11
xcrun simctl install 2DD00C38-8F4A-41B5-B37D-C9E3D8886FF3 /Users/chirag.verma/Library/Developer/Xcode/DerivedData/ConsumerApp-chkgycoenlldgdeegksnhvtcyohh/Build/Products/In-House-Enterprise-iphonesimulator/Tage.app