import AppScreen from './app.screen';


const SELECTORS = {
    SHOPFLOOR_APP: '~FA',
    DEBUG_SECTION: '~Debug',
    ENVIRONMENT_SECTION: '~Environment\nproduction',
    PRODUCTION: '~production'
};

class PreferenceScreen extends AppScreen {

    get shopfloorApp () {
        return SELECTORS.SHOPFLOOR_APP;
    }

    get debugSection () {
        return SELECTORS.DEBUG_SECTION;
    }

    get environmentSection () {
        return SELECTORS.ENVIRONMENT_SECTION;
    }

    get production () {
        return SELECTORS.PRODUCTION;
    }

}

export default new PreferenceScreen();
