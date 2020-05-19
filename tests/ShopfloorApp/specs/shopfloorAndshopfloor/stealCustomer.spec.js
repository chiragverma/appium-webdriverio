import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';
import ClientScreen from '../../screenobjects/client.screen';
import allureReporter from '@wdio/allure-reporter'

var chai = require('chai');
const expect = chai.expect;
const webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

describe('Steal customer from the advisor,', () => {

    beforeEach(() => {
        shopfloorAppOne.launchApp()
        ShopfloorCommonPage.login(shopfloorAppOne, 'Vchirag', 'SFApp_322')
        shopfloorAppTwo.launchApp()
        ShopfloorCommonPage.login(shopfloorAppTwo, 'RCosta', '!Europa806')
    });

   afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorAppOne)
        shopfloorAppTwo.launchApp()
        ShopfloorCommonPage.logout(shopfloorAppTwo)
    });

    it('should be able to steal the customer', () => {
        allureReporter.addFeature('Steal Customer')
        ShopfloorCommonPage.assignClient(shopfloorAppTwo, 'chirag.verma@farfetch.com')
        shopfloorAppOne.launchApp()
        ShopfloorCommonPage.assignClient(shopfloorAppOne, 'chirag.verma@farfetch.com')
        shopfloorAppOne.$(ClientScreen.overrideAlert).waitForExist(3000)
        shopfloorAppOne.$(ClientScreen.yesButton).click();
        expect(shopfloorAppOne.$(ClientScreen.assignmentButton).getAttribute('label')).to.be.equal('Unassign from me');
    });
});