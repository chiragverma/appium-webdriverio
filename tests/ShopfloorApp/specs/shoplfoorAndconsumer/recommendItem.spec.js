import SearchScreen from '../../screenobjects/search.screen';
import HomeScreen from '../../screenobjects/home.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';
import allureReporter from '@wdio/allure-reporter'

var productName;

describe('Sending the recommendaton to the customer,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login(shopfloorApp, 'Vchirag', 'SFApp_321')
    });

    afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorApp)
    });

    it('should be able to send the recommendaton to the customer', () => {
        allureReporter.addFeature('Recommend Item')
        ShopfloorCommonPage.assignClient(shopfloorApp, 'chirag.verma@farfetch.com')
        shopfloorApp.$(HomeScreen.productsearchButton).click();
        driver.pause(3000)
        shopfloorApp.$(SearchScreen.handbags).click();
        driver.pause(3000)
        shopfloorApp.$(SearchScreen.viewAllDresses).click();
        shopfloorApp.$(SearchScreen.firstimageProduct).click();
        shopfloorApp.$(SearchScreen.productDetails).click();
        shopfloorApp.$(SearchScreen.threedotsMenu).click();
        shopfloorApp.$(SearchScreen.sendRecommendations).click();
        driver.pause(2000)
        if (shopfloorApp.$(SearchScreen.sendtoClientAlert)){
            shopfloorApp.$(SearchScreen.resendButton).click();
        };
    });

});