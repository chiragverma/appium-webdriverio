import ClientScreen from '../../screenobjects/client.screen';
import SearchScreen from '../../screenobjects/search.screen';
import HomeScreen from '../../screenobjects/home.screen';
import FormScreen from '../../screenobjects/forms.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';

var productName;

describe('Sending the recommendaton to the customer,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login()
    });

   afterEach(() => {
        ShopfloorCommonPage.logout()
    });

    it('should be able to send the recommendaton to the customer', () => {
        ShopfloorCommonPage.assignClient('chirag.verma@farfetch.com')
        shopfloorApp.$(HomeScreen.productsearchButton).click();
        driver.pause(3000)
        shopfloorApp.$(SearchScreen.handbags).click();
        driver.pause(3000)
        shopfloorApp.$(SearchScreen.viewAllDresses).click();
        shopfloorApp.$(SearchScreen.firstimageProduct).click();
        shopfloorApp.$(SearchScreen.productDetails).click();
        shopfloorApp.$(SearchScreen.threedotsMenu).click();
        shopfloorApp.$(SearchScreen.sendRecommendations).click();
        if (shopfloorApp.$(SearchScreen.sendtoClientAlert).waitForExist(5000)){
            shopfloorApp.$(SearchScreen.resendButton).click();
        };

    });

});