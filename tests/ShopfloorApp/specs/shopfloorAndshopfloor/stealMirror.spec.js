import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';
import ClientScreen from '../../screenobjects/client.screen';
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

describe('Steal mirror from the advisor,', () => {

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

    it('should be able to steal the mirror', () => {
        ShopfloorCommonPage.assignMirror(shopfloorAppTwo, 'chirag.verma@farfetch.com')
        shopfloorAppOne.launchApp()
        ShopfloorCommonPage.assignMirror(shopfloorAppOne, 'rita.costa@farfetch.com', )
        shopfloorAppOne.$(ClientScreen.overrideMirrorAlert).waitForExist(4000)
        shopfloorAppOne.$(ClientScreen.yesButton).click();
        driver.pause(2000)
        // verify the mirror is re-assigned
        //shopfloorAppOne.chai.expect.$(ClientScreen.title).to.have.text('Rita Costa | Demo Fitting Room QaLx'))
    });
});