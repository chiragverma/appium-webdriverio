import ClientScreen from '../../screenobjects/client.screen';
import SearchScreen from '../../screenobjects/search.screen';
import HomeScreen from '../../screenobjects/home.screen';
import FormScreen from '../../screenobjects/forms.screen';
import RequestScreen from '../../screenobjects/requests.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';


describe('Sending the item to the mirror successfully,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login()
    });

    afterEach(() => {
        ShopfloorCommonPage.logout()
    });

    it('should be able to send the item to the mirror', () => {
        chromeBrowser.url('/')
        ShopfloorCommonPage.sendToMirror('chirag.verma@farfetch.com')
        shopfloorApp.$(HomeScreen.customersearchButon).click();
        shopfloorApp.$(ClientScreen.clientWishlist).touchAction('press')
        shopfloorApp.$(ClientScreen.mirrorTab).click()
        shopfloorApp.$(ClientScreen.recommendationTitle).waitForExist(5000)
    });

});