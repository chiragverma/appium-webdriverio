import Page from './page';
import LoginScreen from '../screenobjects/login.screen';
import HomeScreen from '../screenobjects/home.screen';
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
    hideKeyboard(appName) {
        if (appName.isKeyboardShown()) {
            (appName.hideKeyboard());
        }
    }

    login(appName, username, password) {
        appName.$(LoginScreen.loginContainerButon).click();
        appName.$(LoginScreen.email).setValue(username);
        appName.$(LoginScreen.password).click();
        appName.$(LoginScreen.password).setValue(password);
        appName.$(LoginScreen.loginButton).click();
    }


    logout (appName) {
        if (appName.$(ClientScreen.searchCross).isDisplayed()) {
            appName.$(ClientScreen.searchCross).click();
        }
        else if
            (appName.$(SearchScreen.searchCross).isDisplayed()) {
                appName.$(SearchScreen.searchCross).click();
        }
        appName.$(HomeScreen.homescreenButton).click();
        appName.$(HomeScreen.settingIcon).click();
        appName.$(HomeScreen.logoutButton).click();
        appName.$(SettingScreen.logoutButton).click();
        appName.$(LoginScreen.loginContainerButon).waitForExist(9000)
        driver.pause(2000)
    }

    assignClient(appName, customerName) {
        appName.$(ClientScreen.clientTab).click();
        appName.$(ClientScreen.searchButon).click();
        appName.$(ClientScreen.searchButon).setValue(customerName)
        this.hideKeyboard(appName)
        appName.$(ClientScreen.customerlabelButton).click();
        driver.pause(3000)
        if (appName.$(ClientScreen.assignmentButton).getText() == 'Assign to me'){
            appName.$(ClientScreen.assignmentButton).click();
        };
        driver.pause(2000)
    }


    assignMirror(appName, customerName) {
        this.assignClient(appName, customerName)
        driver.pause(3000)
        appName.$(ClientScreen.fittingRoomButton).touchAction('press')
        appName.$(ClientScreen.mirrorName).click();
        appName.$(ClientScreen.assignMirrorButton).click();
    }

    sendToMirror(appName) {
        appName.$(HomeScreen.productsearchButton).click();
        driver.pause(3000)
        appName.$(SearchScreen.handbags).click();
        driver.pause(3000)
        appName.$(SearchScreen.viewAllDresses).click();
        appName.$(SearchScreen.actionListButton).click();
        appName.$(SearchScreen.sendtoMirror).click();
    } 
}

export default new ShopfloorCommonPage();