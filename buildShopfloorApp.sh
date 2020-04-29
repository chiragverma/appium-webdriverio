#!/bin/bash
xcrun xcodebuild -workspace Shopfloor.xcworkspace -scheme "In-House" -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 8,OS=13.2'
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-7
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-8
xcrun simctl install 2DE2ADEA-6B37-40A4-8E69-FCCC30F5E483 /Users/chirag.verma/Library/Developer/Xcode/DerivedData/ConsumerApp-chkgycoenlldgdeegksnhvtcyohh/Build/Products/In-House-Enterprise-iphonesimulator/Tage.app
xcrun simctl install 2EAA4629-7260-42DB-84DA-AD2E1F662C61 /Users/chirag.verma/Library/Developer/Xcode/DerivedData/ConsumerApp-chkgycoenlldgdeegksnhvtcyohh/Build/Products/In-House-Enterprise-iphonesimulator/Tage.app