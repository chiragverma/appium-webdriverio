require('@babel/register')

exports.config = {
    runner: 'local',

    maxInstances: 1,
    //
    specs: [
        './tests/ConsumerApp/specs/ConsumerTests/**/*.js'
    ],
    //
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    //

    capabilities: {
        consumerApp: {
            port: 4724,
            capabilities: {
                platformName: 'iOS',
                'appium:platformVersion': '13.5',
                'appium:orientation': 'PORTRAIT',
                'appium:noReset': true,
                'appium:newCommandTimeout': 240,
                "appium:platformName": "iOS",
                "appium:deviceName": "iPhone 7",
                "appium:bundleId": "com.exampl.test",
            }
        }
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
        outputDir: 'allure-results',
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
    },

}

}