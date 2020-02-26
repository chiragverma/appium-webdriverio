import ClientScreen from '../../screenobjects/client.screen';
import SearchScreen from '../../screenobjects/search.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';


describe('Cannot send recommendaton to the customer,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login()
    });

   afterEach(() => {
        ShopfloorCommonPage.logout()
    });

    it('not able to send the recommendaton to the customer', () => {
        // add the recommendation and verify alert
        ShopfloorCommonPage.assignClient('chirag.verma@farfetch.com')
        shopfloorApp.$(ClientScreen.clientWishlist).touchAction('press')
        shopfloorApp.$(ClientScreen.firstWishlistItem).click()
        shopfloorApp.$(SearchScreen.threedotsMenu).click()
        shopfloorApp.$(SearchScreen.addRecommendations).click()
        shopfloorApp.$(ClientScreen.itemAddedAlert).waitForExist(6000)
        shopfloorApp.$(SearchScreen.cancelButton).click()
        // send the recommendation and verify alert
        shopfloorApp.$(SearchScreen.threedotsMenu).click()
        shopfloorApp.$(SearchScreen.sendRecommendations).click()
        shopfloorApp.$(SearchScreen.itemAddedAlert).waitForExist(6000)
    });

});