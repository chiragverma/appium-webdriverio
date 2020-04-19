#!/bin/bash
export PATH=/usr/local/bin:$PATH
appium --port 4723 &
appium --port 4724 &
npm run singleconsumertest.app
/usr/bin/killall -KILL node