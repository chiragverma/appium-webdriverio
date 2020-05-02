#!/bin/bash
export PATH=/usr/local/bin:$PATH
# Starts the Appium Server 1
appium --port 4723 &
# Starts the Appium Server 2
appium --port 4724 &
# Run all tests
npm run singleconsumertest.app
# Shuts down all Appium Servers
/usr/bin/killall -KILL node
