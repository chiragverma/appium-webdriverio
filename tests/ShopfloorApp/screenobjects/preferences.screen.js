import AppScreen from './app.screen';

const SELECTORS = {
    SHOPFLOOR_APP: '~FA',
    DEBUG_SECTION: '~Debug',
    ENVIRONMENT_PRODUCTION: '~Environment\nproduction',
    ENVIRONMENT_DEVELOPMENT: '~Environment\ndevelopment (livesbx)',
    PRODUCTION: '~production'
};

class PreferenceScreen extends AppScreen {

    get shopfloorApp () {
        return SELECTORS.SHOPFLOOR_APP;
    }

    get debugSection () {
        return SELECTORS.DEBUG_SECTION;
    }

    get environmentProduction () {
        return SELECTORS.ENVIRONMENT_PRODUCTION;
    }

    get environmentDevelopment () {
        return SELECTORS.ENVIRONMENT_DEVELOPMENT;
    }

    get production () {
        return SELECTORS.PRODUCTION;
    }

}

export default new PreferenceScreen();
