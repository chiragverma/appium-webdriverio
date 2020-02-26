import Page from './page';
import LoginScreen from '../screenobjects/login.screen';
import HomeScreen from '../screenobjects/home.screen';
import AccountScreen from '../screenobjects/account.screen';


class ConsumerCommonPage extends Page {
    /**
     * define elements
     */
    get lastCheckbox () { return $('#checkboxes input:last-Child'); }
    /**
     * define or overwrite page methods
     */
    hideKeyboard() {
        if (consumerApp.isKeyboardShown()) {
            (consumerApp.hideKeyboard());
        }
    }

    login() {
        consumerApp.$(LoginScreen.emailField).setValue('chirag.verma@farfetch.com');
        consumerApp.hideKeyboard()
        consumerApp.$(LoginScreen.passwordField).setValue('SFApp_321');
        consumerApp.$(LoginScreen.signinButton).click();
        driver.pause(5000)
        if (consumerApp.$(LoginScreen.skipButton).isDisplayed()) {
            consumerApp.$(LoginScreen.skipButton).click();
        }
}

    logout () {
        driver.pause(3000)
        if (consumerApp.$(HomeScreen.closeButton).isDisplayed()) {
            consumerApp.$(HomeScreen.closeButton).click();
        }
        consumerApp.$(AccountScreen.accountTab).click();
        consumerApp.$(AccountScreen.logoutButon).click();
        consumerApp.$(AccountScreen.confirmButton).click();
        consumerApp.$(LoginScreen.emailField).waitForExist(7000)
    }
}

export default new ConsumerCommonPage();

