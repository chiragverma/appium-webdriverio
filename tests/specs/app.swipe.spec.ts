import SwipeScreen from '../screenobjects/SwipeScreen';
import allureReporter from '@wdio/allure-reporter';
import Gestures from '../helpers/Gestures';
import NativeAlert from '../screenobjects/components/NativeAlert';

describe('Alert is displayed', () => {

    it('Press the button upon swiping to left and validate an Alert is displayed', async () => {
        allureReporter.addFeature('SwipeScreen');
        // it does a right swipe
        await Gestures.swipeRight();
        // click on the button
        await SwipeScreen.tapOnUltimateAnswer();
        // check for alert is present
        await NativeAlert.waitForIsShown();
    });
});
