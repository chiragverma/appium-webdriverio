import ClientScreen from '../../screenobjects/client.screen';
import SearchScreen from '../../screenobjects/search.screen';
import HomeScreen from '../../screenobjects/home.screen';
import FormScreen from '../../screenobjects/forms.screen';
import RequestScreen from '../../screenobjects/requests.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';


describe('Check Mirror Tab,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login()
    });

    afterEach(() => {
        ShopfloorCommonPage.logout()
    });

    it('should contain items in the mirror tab', () => {
        chromeBrowser.url('/')
        ShopfloorCommonPage.sendToMirror('chirag.verma@farfetch.com')
        shopfloorApp.$(HomeScreen.customersearchButon).click();
        shopfloorApp.$(ClientScreen.clientWishlist).touchAction('press')
        shopfloorApp.$(ClientScreen.mirrorTab).click()
        shopfloorApp.$(ClientScreen.recommendationTitle).waitForExist(5000)
    });

});