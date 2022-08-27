import SwipeScreen from '../screenobjects/SwipeScreen';
import MenuScreen from '../screenobjects/MenuScreen';
import allureReporter from '@wdio/allure-reporter'

describe('Test Should Fail', () => {

    it('Test should fail', async () => {
        allureReporter.addFeature('Test Should Fail')
        // this shoudl fail because there is no such element exist
        await MenuScreen.waitForIsShown(true);
    });
});
