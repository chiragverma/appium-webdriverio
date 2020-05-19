import ClientScreen from '../../screenobjects/client.screen';
import SearchScreen from '../../screenobjects/search.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';
import allureReporter from '@wdio/allure-reporter'


describe('Cannot send recommendaton to the customer,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login(shopfloorApp, 'Vchirag', 'SFApp_322')
    });

   afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorApp)
    });

    it('not able to send the recommendaton to the customer', () => {
        allureReporter.addFeature('Not Able to Recommend to the customer')
        // add the recommendation and verify alert
        ShopfloorCommonPage.assignMirror(shopfloorApp, 'chirag.verma@farfetch.com')
        shopfloorApp.$(ClientScreen.clientWishlist).touchAction('press')
        driver.pause(2000)
        shopfloorApp.$(ClientScreen.firstWishlistItem).click()
        driver.pause(2000)
        shopfloorApp.$(SearchScreen.threedotsMenu).click()
        shopfloorApp.$(SearchScreen.addRecommendations).click()
        shopfloorApp.$(ClientScreen.itemAddedAlert).waitForExist(6000)
        shopfloorApp.$(SearchScreen.cancelButton).click()
        // send the recommendation and verify alert
        shopfloorApp.$(SearchScreen.threedotsMenu).click()
        shopfloorApp.$(SearchScreen.sendRecommendations).click()
        shopfloorApp.$(ClientScreen.itemAddedAlert).waitForExist(6000)
    });

});