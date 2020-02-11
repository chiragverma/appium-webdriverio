import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';


const SELECTORS = {
    LOGIN_SCREEN: '~19 Cambon',
    EMAIL_FIELD: '~OpenerComponent.Email',
    CONTINUE_BUTTON: '~Continue',
    PASSWORD_FIELD: '~Login.Password',
    SIGNIN_BUTTON: '~Login.SignIn',
    SKIP_BUTTON: '~SkipButton',
    SIGN_UP_BUTTON: '~button-SIGN UP',
    INPUT: '~Username',
    PASSWORD: '~Password',
    REPEAT_PASSWORD: '~input-repeat-password'
};

class LoginScreen extends AppScreen {
    constructor () {
        super(SELECTORS.LOGIN_SCREEN);
    }

    get emailField () {
        return SELECTORS.EMAIL_FIELD;
    }

    get continueButon () {
        return SELECTORS.CONTINUE_BUTTON;
    }

    get passwordField () {
        return SELECTORS.PASSWORD_FIELD;
    }

    get signinButton () {
        return SELECTORS.SIGNIN_BUTTON;
    }

    get skipButton () {
        return SELECTORS.SKIP_BUTTON;
    }

    get signUpButton () {
        return SELECTORS.SIGN_UP_BUTTON;
    }

    get email () {
        return SELECTORS.INPUT;
    }

    get password () {
        return SELECTORS.PASSWORD;
    }

    get repeatPassword () {
        return SELECTORS.REPEAT_PASSWORD;
    }

}

export default new LoginScreen();
