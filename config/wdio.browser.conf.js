exports.config = Object.assign({}, {
  hostname: 'chromedriver',
  path: '/',
  capabilities: [
    {
      // Set maxInstances to 1 if screen recordings are enabled:
      // maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        // Disable headless mode if screen recordings are enabled:
        args: ['--headless', '--window-size=1440,900']
      }
    }
  ],
  logLevel: 'warn',
  reporters: ['spec'],
  specs: ['./tests/specs/**/*.spec.js'],
  maximizeWindow: true,
  screenshots: {
    saveOnFail: true
  },
  videos: {
    enabled: false,
    resolution: '1440x900',
    startDelay: 500,
    stopDelay: 500
  },
  baseUrl: 'http://example:8080'
})