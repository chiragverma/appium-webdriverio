import AppScreen from './app.screen';

const SELECTORS = {
    HOME_SCREEN: '~SOFHomeComponent',
    PRODUCTSEARCH_SCREEN: '~productSearchBarButton',
    CUSTOMERSEARCH_SCREEN: '~customersBarButton',
    STOREHUB_SCREEN: '~storeHubBarButton',
    SETTING_ICON: '~SettingsIcon',
    LOGOUT_BUTTON: '~settingsMainLogoutButton',
    RECOMMENDATIONS_TEXT: '~Recommendations',
    NO_OF_PRODUCTS: '~1 product',
    RECOMMENDATION_IMAGE: '//XCUIElementTypeCollectionView/XCUIElementTypeCell[1]',
    CLOSE_BUTTON: '~close',
    DELETE_RECOMMENDATION: '//XCUIElementTypeImage[@name="trash"]/.././XCUIElementTypeButton',
    SKIP_BUTTON: '~SkipButton',
    SKIP_TUTORIAL: '~HomeTooltipCloseButton'
};

class HomeScreen extends AppScreen {

    get homeScreen () {
        return SELECTORS.HOME_SCREEN;
    }

    get productsearchButton () {
        return SELECTORS.PRODUCTSEARCH_SCREEN;
    }

    get customersearchButon () {
        return SELECTORS.CUSTOMERSEARCH_SCREEN;
    }

    get storehubButon () {
        return SELECTORS.STOREHUB_SCREEN;
    }

    get settingIcon () {
        return SELECTORS.SETTING_ICON;
    }

    get logoutButton () {
        return SELECTORS.LOGOUT_BUTTON;
    }

    get recommendationsText () {
        return SELECTORS.RECOMMENDATIONS_TEXT;
    }

    get noOfProducts () {
        return SELECTORS.NO_OF_PRODUCTS;
    }

    get recommendationImage () {
        return SELECTORS.RECOMMENDATION_IMAGE;
    }

    get closeButton () {
        return SELECTORS.CLOSE_BUTTON;
    }

    get deleteRecommendation () {
        return SELECTORS.DELETE_RECOMMENDATION;
    }

    get skipButton () {
        return SELECTORS.skipButton;
    }

    get skipTutorial () {
        return SELECTORS.skipTutorial;
    }
}

export default new HomeScreen();
