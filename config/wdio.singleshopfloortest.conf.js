const { join } = require('path');
require('@babel/register')

exports.config = {
    runner: 'local',

    maxInstances: 1,
    //
    specs: [
        './tests/ShopfloorApp/specs/shopfloorAndMirror/resetMirror.spec.js'
    ],

    //
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    //
    baseUrl: 'http://localhost:9174/',

    capabilities: {
        chromeBrowser: {
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    // mirror size:
                    args: ['--window-size=2160,3840']
                  }
            }
        },
        shopfloorApp: {
            port: 4723,
            capabilities: {
                platformName: 'iOS',
                'appium:platformVersion': '13.4',
                'appium:orientation': 'PORTRAIT',
                'appium:noReset': true,
                'appium:newCommandTimeout': 240,
                "appium:platformName": "iOS",
                "appium:deviceName": "iPhone 8",
                "appium:bundleId": "com.farfetch.enterprise.sof.shopfloor.chanel.in-house"
            }
        },
    },

    services: ['appium'],

    //
    //logLevel: 'trace',
    //
    //deprecationWarnings: true,
    //
    //bail: 0,
    //
    waitforTimeout: 20000,
    //
    connectionRetryTimeout: 90000,
    //
    connectionRetryCount: 3,
    //
    services: ['selenium-standalone'],
    //
    framework: 'jasmine',
    jasmineNodeOpts: 
    {   
    // Jasmine default timeout
    defaultTimeoutInterval: 90000,
    expectationResultHandler(passed, assertion) 
    {
      // do something
    }
}
    //
    //
}