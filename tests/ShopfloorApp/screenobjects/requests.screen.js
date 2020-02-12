import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
    // these locators are for the app
    LOGIN_SCREEN: '~Login-screen',
    LAST_REQUEST: '//XCUIElementTypeCollectionView/XCUIElementTypeCell[1]',
    COMPLETE_REQUEST: '~Mark as complete',
    // these locators are for browser
    CALLADVISOR_BUTTON: '//*[@id="call-advisor"]',
    TAP_MIRROR:  '/html/body',
    VERIFY_SCREENOFF: '.screen-off',
    VERIFY_MIRRORPRODUCT: '//*[@data-test="PRÊT À PORTER"]',
    VERIFY_MIRRORLOOKS: '//*[@data-test="PRÊT À PORTER"]',
    EXPAND_PRODUCT: '#plus'
};

class RequestScreen extends AppScreen {
    constructor () {
        super(SELECTORS.LOGIN_SCREEN);
    }

    get lastRequest () {
        return SELECTORS.LAST_REQUEST;
    }

    get completeRequest () {
        return SELECTORS.COMPLETE_REQUEST;
    }

    get calladvisorButton () {
        return SELECTORS.CALLADVISOR_BUTTON;
    }

    get tapMirror () {
        return SELECTORS.TAP_MIRROR;
    }

    get verifyScreenoff () {
        return SELECTORS.VERIFY_SCREENOFF;
    }

    get verifyMirrorproduct () {
        return SELECTORS.VERIFY_MIRRORPRODUCT;
    }

    get verifyMirrorlooks () {
        return SELECTORS.VERIFY_MIRRORPRODUCT;
    }

    get expandProduct () {
        return SELECTORS.EXPAND_PRODUCT;
    }

    get alert () {
        return NativeAlert;
    }
    
}

export default new RequestScreen();
