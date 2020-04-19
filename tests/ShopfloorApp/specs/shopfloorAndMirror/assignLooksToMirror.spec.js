import RequestScreen from '../../screenobjects/requests.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';


describe('Sending the looks to the mirror successfully,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login(shopfloorApp, 'Vchirag', 'SFApp_321')
    });

    afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorApp)
        chromeBrowser.$(RequestScreen.verifyScreenoff).waitForExist(5000)
    });

    it('should be able to send looks to the mirror', () => {
        chromeBrowser.url('/')
        ShopfloorCommonPage.sendToMirror('chirag.verma@farfetch.com')
        chromeBrowser.$(RequestScreen.tapMirror).doubleClick()
        chromeBrowser.execute(() => document.body.style.zoom='60%')
        driver.pause(2000)
        chromeBrowser.execute(elem => elem.click(), chromeBrowser.$(RequestScreen.expandProduct));
        chromeBrowser.$(RequestScreen.verifyMirrorlooks).waitForExist(6000)
    });

});