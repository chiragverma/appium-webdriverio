import SwipeScreen from '../screenobjects/SwipeScreen';
import HomeScreen from '../screenobjects/HomeScreen';
import DashboardScreen from '../screenobjects/DashboardScreen';
import SettingsScreen from '../screenobjects/SettingsScreen';
import allureReporter from '@wdio/allure-reporter'

describe('Dashboard and Settings tabs are loaded', () => {

    it('should be able see the dashboard and settings tab', async () => {
        allureReporter.addFeature('Dashboard and Settings tabs are loaded correctly');
        // check if the Instructions, Dashboard and Settings tabs exists
        await HomeScreen.instructionsTab.waitForExist();
        await HomeScreen.dashboardTab.waitForExist();
        await HomeScreen.settingsTab.waitForExist();
    });

    it('should be able load dashboard and settings tab', async () => {
        // check if the Dashboard and Settings tabs load
        await HomeScreen.tapOnDashboard();
        // title exist for dashboard tab
        await DashboardScreen.dashboardTitle.waitForExist();
        await DashboardScreen.bitcoinTab.waitForExist();
        await DashboardScreen.ethereumTab.waitForExist();
        await HomeScreen.tapOnSettings();
        // title exist for settings tab
        await SettingsScreen.settingsTitle.waitForExist();
        // check all settings exist
        await SettingsScreen.showBitcoin.waitForExist();
        await SettingsScreen.showWinners.waitForExist();
        await SettingsScreen.showLosers.waitForExist();
    });
});

