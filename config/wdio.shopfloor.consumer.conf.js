const { join } = require('path');
require('@babel/register')

exports.config = {
    runner: 'local',

    maxInstances: 1,
    //
    specs: [
        './tests/ShopfloorApp/specs/shoplfoorAndconsumer/**/*.spec.js'
    ],
    //
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    //
    baseUrl: 'http://localhost:9174/',

    capabilities: {
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
                "appium:bundleId": "com.farfetch.enterprise.sof.shopfloor.chanel.in-house",
            }
        },
    },

    services: ['appium'],
    /* appium: {

        args: {
            address: '127.0.0.1',
        }
    }, */

    //
    //logLevel: 'trace',
    //
    //deprecationWarnings: true,
    //
    //bail: 0,
    //
    reporters: [['allure', {
        outputDir: 'allureresults',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    
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