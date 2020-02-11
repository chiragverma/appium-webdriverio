import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
    LOGOUT_BUTTON: '~Logout',
};

class SettingScreen extends AppScreen {

    get logoutButton () {
        return SELECTORS.LOGOUT_BUTTON;
    }

}

export default new SettingScreen();
