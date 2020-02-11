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
        chromeBrowser.$(RequestScreen.verifyScreenoff).waitForExist(5000)
    });

    it('should be able to send the item to the mirror', () => {
        chromeBrowser.url('/')
        chromeBrowser.$(RequestScreen.tapMirror).doubleClick()
        ShopfloorCommonPage.sendToMirror('chirag.verma@farfetch.com')
        chromeBrowser.setWindowSize(2160,3840);
        chromeBrowser.$(RequestScreen.verifyMirrorproduct).waitForExist(6000)
    });

});