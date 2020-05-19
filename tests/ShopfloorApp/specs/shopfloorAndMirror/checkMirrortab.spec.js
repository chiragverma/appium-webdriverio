import ClientScreen from '../../screenobjects/client.screen';
import HomeScreen from '../../screenobjects/home.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';
import allureReporter from '@wdio/allure-reporter'


describe('Check Mirror Tab,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login(shopfloorApp, 'Vchirag', 'SFApp_322')
    });

    afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorApp)
    });

    it('should contain items in the mirror tab', () => {
        allureReporter.addFeature('Check Mirror Tab')
        chromeBrowser.url('/')
        ShopfloorCommonPage.assignMirror(shopfloorApp, 'chirag.verma@farfetch.com')
        shopfloorApp.$(ClientScreen.backArrow).click();
        ShopfloorCommonPage.sendItemToMirror(shopfloorApp)
        shopfloorApp.$(HomeScreen.customersearchButon).click();
        shopfloorApp.$(ClientScreen.clientWishlist).touchAction('press')
        shopfloorApp.$(ClientScreen.mirrorTab).click()
        shopfloorApp.$(ClientScreen.recommendationTitle).waitForExist(5000)
    });

});