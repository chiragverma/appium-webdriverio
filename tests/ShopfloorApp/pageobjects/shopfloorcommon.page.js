import Page from './page';
import LoginScreen from '../screenobjects/login.screen';
import HomeScreen from '../screenobjects/home.screen';
import FormScreen from '../screenobjects/forms.screen';
import SearchScreen from '../screenobjects/search.screen';
import ClientScreen from '../screenobjects/client.screen';
import SettingScreen from '../screenobjects/setting.screen';


class ShopfloorCommonPage extends Page {
    /**
     * define elements
     */
    get lastCheckbox () { return $('#checkboxes input:last-Child'); }
    /**
     * define or overwrite page methods
     */
    hideKeyboard() {
        if (shopfloorApp.isKeyboardShown()) {
            (shopfloorApp.hideKeyboard());
        }
    }

    login() {
        shopfloorApp.$(LoginScreen.loginContainerButon).click();
        shopfloorApp.$(LoginScreen.email).setValue('Vchirag');
        shopfloorApp.$(LoginScreen.password).touchAction('tap');
        shopfloorApp.$(LoginScreen.password).setValue('SFApp_321');
        shopfloorApp.$(LoginScreen.loginButton).click();
    }

    logout () {
        if (shopfloorApp.$(ClientScreen.searchCross).isDisplayed()) {
            shopfloorApp.$(ClientScreen.searchCross).click();
        }
        else if
            (shopfloorApp.$(SearchScreen.searchCross).isDisplayed()) {
             shopfloorApp.$(SearchScreen.searchCross).click();
        }
        shopfloorApp.$(HomeScreen.homescreenButton).click();
        shopfloorApp.$(HomeScreen.settingIcon).click();
        shopfloorApp.$(HomeScreen.logoutButton).click();
        shopfloorApp.$(SettingScreen.logoutButton).click();
        shopfloorApp.$(LoginScreen.loginContainerButon).waitForExist(9000)
        driver.pause(6000)
    }

    assignClient(customerName) {
        shopfloorApp.$(ClientScreen.clientTab).click();
        shopfloorApp.$(ClientScreen.searchButon).click();
        shopfloorApp.$(ClientScreen.searchButon).setValue(customerName)
        this.hideKeyboard()
        shopfloorApp.$(ClientScreen.customerlabelButton).click();
        driver.pause(5000)
        if (shopfloorApp.$(ClientScreen.assignmentButton).getText() == 'Assign to me'){
            shopfloorApp.$(ClientScreen.assignmentButton).click();
        };
        driver.pause(5000)
    }


    sendToMirror(customerName) {
        this.assignClient(customerName)
        driver.pause(3000)
        shopfloorApp.$(ClientScreen.fittingRoomButton).touchAction('press')
        shopfloorApp.$(ClientScreen.mirrorName).click();
        shopfloorApp.$(ClientScreen.assignMirrorButton).click();
        shopfloorApp.$(ClientScreen.backArrow).click();
        shopfloorApp.$(HomeScreen.productsearchButton).click();
        driver.pause(3000)
        shopfloorApp.$(SearchScreen.handbags).click();
        driver.pause(3000)
        shopfloorApp.$(SearchScreen.viewAllDresses).click();
        shopfloorApp.$(SearchScreen.actionListButton).click();
        shopfloorApp.$(SearchScreen.sendtoMirror).click();
    }
}

export default new ShopfloorCommonPage();