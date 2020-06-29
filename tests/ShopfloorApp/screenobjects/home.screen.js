import AppScreen from './app.screen';

const SELECTORS = {
    HOME_SCREEN: '~homeBarButton',
    PRODUCTSEARCH_SCREEN: '~productSearchBarButton',
    CUSTOMERSEARCH_SCREEN: '~customersBarButton',
    REQUESTS_SCREEN: '~storeHubBarButton',
    SETTING_ICON: '~OldSettingsIcon',
    LOGOUT_BUTTON: '~settingsMainLogoutButton'
};

class HomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.HOME_SCREEN);
    }

    get homescreenButton () {
        return SELECTORS.HOME_SCREEN;
    }

    get productsearchButton () {
        return SELECTORS.PRODUCTSEARCH_SCREEN;
    }

    get customersearchButon () {
        return SELECTORS.CUSTOMERSEARCH_SCREEN;
    }

    get requestscreenButon () {
        return SELECTORS.REQUESTS_SCREEN;
    }

    get settingIcon () {
        return SELECTORS.SETTING_ICON;
    }

    get logoutButton () {
        return SELECTORS.LOGOUT_BUTTON;
    }
}

export default new HomeScreen();
