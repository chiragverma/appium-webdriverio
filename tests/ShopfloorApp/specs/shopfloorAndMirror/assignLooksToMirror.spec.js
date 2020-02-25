import ClientScreen from '../../screenobjects/client.screen';
import SearchScreen from '../../screenobjects/search.screen';
import HomeScreen from '../../screenobjects/home.screen';
import FormScreen from '../../screenobjects/forms.screen';
import RequestScreen from '../../screenobjects/requests.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';


describe('Sending the looks to the mirror successfully,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login()
    });

    afterEach(() => {
        ShopfloorCommonPage.logout()
        chromeBrowser.$(RequestScreen.verifyScreenoff).waitForExist(5000)
    });

    it('should be able to send looks to the mirror', () => {
        chromeBrowser.url('/')
        ShopfloorCommonPage.sendToMirror('chirag.verma@farfetch.com')
        chromeBrowser.$(RequestScreen.tapMirror).doubleClick()
        chromeBrowser.execute(() => document.body.style.zoom='60%')
        driver.pause(5000)
        chromeBrowser.execute("arguments[0].click;", RequestScreen.expandProduct)
        chromeBrowser.$(RequestScreen.verifyMirrorproduct).waitForExist(6000)
    });

});