/* import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';
import ClientScreen from '../../screenobjects/client.screen';
import SearchScreen from '../../screenobjects/search.screen';

describe('Steal customer from the advisor,', () => {

    beforeEach(() => {
        shopfloorAppOne.launchApp()
        ShopfloorCommonPage.login(shopfloorAppOne, 'Vchirag', 'SFApp_321')
        shopfloorAppTwo.launchApp()
        ShopfloorCommonPage.login(shopfloorAppTwo, 'RCosta', '!Europa805')
    });

   afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorAppOne)
        shopfloorAppTwo.launchApp()
        ShopfloorCommonPage.logout(shopfloorAppTwo)
    });

    it('should be able to steal the customer', () => {
        ShopfloorCommonPage.assignClient(shopfloorAppTwo, 'chirag.verma@farfetch.com')
        shopfloorAppOne.launchApp()
        ShopfloorCommonPage.assignClient(shopfloorAppOne, 'chirag.verma@farfetch.com')
        shopfloorAppOne.$(ClientScreen.overrideAlert).waitForExist(3000)
        shopfloorAppOne.$(SearchScreen.cancelButton).click();
    });
}); */