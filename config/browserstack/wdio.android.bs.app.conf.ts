import { config } from '../wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.ts',
];
config.exclude = [
    // Exclude this one because the test can only be executed on emulators/simulators
];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USER || 'fuegoamore_tsNJlI';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'EYwNZRzEGAziPpuFRmv8';
// Use browserstack service
config.services = ['browserstack'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // Set your BrowserStack config
        'browserstack.debug': true,

        // Set URL of the application under test
        app: process.env.BROWSERSTACK_APP_ID || 'bs://8c1f051d8eefde1f057e331acfbbb5c58affb3fd',

        // Specify device and os_version for testing
        device: 'Google Pixel 3',
        os_version: '9.0',

        // Set other BrowserStack capabilities
        project: 'wdio-test-project',
        build: 'android',
        name: 'wdio-test'
    },
];

exports.config = config;
