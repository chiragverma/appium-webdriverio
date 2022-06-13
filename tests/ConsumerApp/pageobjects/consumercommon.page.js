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

login() {
    consumerApp.$(LoginScreen.emailField).setValue('abc@example.com');
    consumerApp.hideKeyboard()
    consumerApp.$(LoginScreen.passwordField).setValue('123');
    consumerApp.$(LoginScreen.signinButton).click();
    driver.pause(2000)
    if (consumerApp.$(LoginScreen.skipButton).isDisplayed()) {
        consumerApp.$(LoginScreen.skipButton).click();
    }
}

logout() {

    consumerApp.$(HomeScreen.closeButton).waitUntil(() => {
        this.isDisplayed();
    }, {timeout: 5000, interval: 500});
    if (consumerApp.$(HomeScreen.closeButton).isDisplayed()) {
        consumerApp.$(HomeScreen.closeButton).click();
    }
    consumerApp.$(AccountScreen.accountTab).click();
    consumerApp.execute('mobile: scroll', {
      'direction': 'down'
    });
    consumerApp.$(AccountScreen.logoutButon).click();
    consumerApp.$(AccountScreen.confirmButton).click();
    consumerApp.$(LoginScreen.emailField).waitForExist(7000)
    }
}

export default new ConsumerCommonPage();

