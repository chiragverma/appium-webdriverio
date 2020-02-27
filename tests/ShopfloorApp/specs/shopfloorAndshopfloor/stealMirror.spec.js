/* import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';


describe('Steal mirror from the advisor,', () => {

    beforeEach(() => {
        shopfloorAppOne.launchApp()
        ShopfloorCommonPage.login(shopfloorAppOne, 'Vchirag', 'SFApp_321')
        shopfloorAppTwo.launchApp()
        ShopfloorCommonPage.login(shopfloorAppTwo, 'RCosta', '!Europa805')
    });

   afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorAppTwo)
        shopfloorAppOne.launchApp()
        ShopfloorCommonPage.logout(shopfloorAppOne)
    });

    it('should be able to steal the Mirror', () => {
        shopfloorAppOne.launchApp()
        ShopfloorCommonPage.sendToMirror(shopfloorAppOne, 'chirag.verma@farfetch.com')
        shopfloorAppTwo.launchApp()
        ShopfloorCommonPage.sendToMirror(shopfloorAppTwo, 'chirag.verma@farfetch.com')
    });
}); */