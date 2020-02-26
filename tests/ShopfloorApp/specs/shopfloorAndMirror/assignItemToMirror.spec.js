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
        chromeBrowser.$(RequestScreen.tapMirror).doubleClick()
        chromeBrowser.execute(() => document.body.style.zoom='60%')
        driver.pause(5000)
        chromeBrowser.execute(elem => elem.click(), chromeBrowser.$(RequestScreen.expandProduct));
        chromeBrowser.$(RequestScreen.verifyMirrorproduct).waitForExist(6000)
    });
});