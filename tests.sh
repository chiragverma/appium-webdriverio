#!/bin/bash
export PATH=/usr/local/bin:$PATH
# Starts the Appium Server 1
appium --port 4723 &
# Starts the Appium Server 2
appium --port 4724 &
# Run all tests
npm run shopfloor.prebuild || { echo 'Shopfloor Prebuild Fails' ; exit 1; }
npm run shopfloor.shopfloor
npm run shopfloor.mirror
npm run shopfloor.consumer
# Shuts down all Appium Servers
/usr/bin/killall -KILL node
# Shuts down all Iphone Simulators
xcrun simctl shutdown all
# Shuts down the Mirror
killall node