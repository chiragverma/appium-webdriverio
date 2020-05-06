#!/bin/bash
export PATH=/usr/local/bin:$PATH
pod install
bundle install
gem install bundler
bundle exec pod install --repo-update
fastlane change_tenant tenant:Chanel
# builds the code
xcrun xcodebuild -workspace Shopfloor.xcworkspace -scheme "In-House" -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 8,OS=13.4.1' || { echo 'ShopfloorApp Build Failed' ; exit 1; }
# starts the iphone simulator
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-7
# starts the iphone simulator
ios-sim start --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-8
# downloads the app to the simulator
xcrun simctl install AC933BAA-2178-4929-BD4F-3BF71C05043C /Users/chirag.verma/Library/Developer/Xcode/DerivedData/Shopfloor-dlpwdmtxpnpgdxgvpkyneiomysay/Build/Products/In-House-iphonesimulator/Shopfloor.app || { echo 'Unable to install Shopfloor App to Iphone7' ; exit 1; }
# downloads the app to the simulator
xcrun simctl install 0A21DF3F-F8D3-4905-983D-EECC99CF89F2 /Users/chirag.verma/Library/Developer/Xcode/DerivedData/Shopfloor-dlpwdmtxpnpgdxgvpkyneiomysay/Build/Products/In-House-iphonesimulator/Shopfloor.app || { echo 'Unable to install Shopfloor App to Iphone8' ; exit 1; }