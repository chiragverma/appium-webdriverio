import AppScreen from './app.screen';


const SELECTORS = {
    LOGOUT_BUTTON: '~Logout',
};

class SettingScreen extends AppScreen {

    get logoutButton () {
        return SELECTORS.LOGOUT_BUTTON;
    }

}

export default new SettingScreen();
