import SwipeScreen from '../screenobjects/SwipeScreen';
import HomeScreen from '../screenobjects/HomeScreen';
import allureReporter from '@wdio/allure-reporter'

describe('Dashboard and Settings tabs are displayed', () => {

    it('should be able see the dashboard and settings tab', async () => {
        allureReporter.addFeature('HomeScreen')
        // check if the Instructions, Dashboard and Settings tabs exists
        await HomeScreen.instructionsTab.waitForExist()
        await HomeScreen.dashboardTab.waitForExist()
        await HomeScreen.settingsTab.waitForExist()
    });
});

