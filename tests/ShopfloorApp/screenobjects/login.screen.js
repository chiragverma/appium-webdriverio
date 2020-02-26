import AppScreen from './app.screen';


const SELECTORS = {
    LOGIN_SCREEN: '~Login-screen',
    LOGIN_CONTAINER_BUTTON: '~Login',
    SIGN_UP_CONTAINER_BUTTON: '~button-sign-up-container',
    SIGNIN_BUTTON: '~SIGN IN >',
    SIGN_UP_BUTTON: '~button-SIGN UP',
    USERNAME: '//XCUIElementTypeOther[@name="Sign In"]/XCUIElementTypeOther[3]/XCUIElementTypeTextField',
    PASSWORD: '//XCUIElementTypeOther[@name="Sign In"]/XCUIElementTypeOther[4]/XCUIElementTypeSecureTextField',
    REPEAT_PASSWORD: '~input-repeat-password',
};

class LoginScreen extends AppScreen {
    constructor () {
        super(SELECTORS.LOGIN_SCREEN);
    }

    get loginContainerButon () {
        return SELECTORS.LOGIN_CONTAINER_BUTTON;
    }

    get signUpContainerButon () {
        return SELECTORS.SIGN_UP_CONTAINER_BUTTON;
    }

    get loginButton () {
        return SELECTORS.SIGNIN_BUTTON;
    }

    get signUpButton () {
        return SELECTORS.SIGN_UP_BUTTON;
    }

    get email () {
        return SELECTORS.USERNAME;
    }

    get password () {
        return SELECTORS.PASSWORD;
    }

    get repeatPassword () {
        return SELECTORS.REPEAT_PASSWORD;
    }

}

export default new LoginScreen();
