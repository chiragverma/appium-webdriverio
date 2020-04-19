import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
    SEARCH_SCREEN: '~Login-screen',
    ACTIONLIST_BUTTON: '//XCUIElementTypeButton[@name="plpActionsListOptions"][1]',
    HANDBAGS: '~Ready-to-Wear',
    VIEWALL: '~Dresses',
    SEARCH_CROSS: '~SimpleCross',
    SEARCH_ERROR: '~toastTitleLabel'
};

class SearchScreen extends AppScreen {
    constructor () {
        super(SELECTORS.LOGIN_SCREEN);
    }

    get actionListButton () {
        return SELECTORS.ACTIONLIST_BUTTON;
    }

    get handbags () {
        return SELECTORS.HANDBAGS;
    }

    get viewAll () {
        return SELECTORS.VIEWALL;
    }

    get searchCross () {
        return SELECTORS.SEARCH_CROSS;
    }

    get searchError () {
        return SELECTORS.SEARCH_ERROR;
    }

    get alert () {
        return NativeAlert;
    }
}

export default new SearchScreen();
