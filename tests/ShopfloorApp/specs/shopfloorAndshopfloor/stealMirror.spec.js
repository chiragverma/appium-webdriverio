import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';
import ClientScreen from '../../screenobjects/client.screen';
const chai = require('chai');
const expect = chai.expect;
const webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

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
        ShopfloorCommonPage.assignMirror(shopfloorAppOne, 'rita.costa@farfetch.com')
        shopfloorAppOne.$(ClientScreen.overrideMirrorAlert).waitForExist(4000)
        shopfloorAppOne.$(ClientScreen.yesButton).click();
        driver.pause(3000)
        // verify the mirror is re-assigned
        expect(shopfloorAppOne.$(ClientScreen.titleMessage).getAttribute('label')).to.be.equal('Rita Costa | Demo Fitting Room QaLx');
    });
});