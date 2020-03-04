import RequestScreen from '../../screenobjects/requests.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';


describe('Sending the item to the mirror successfully,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login(shopfloorApp, 'Vchirag', 'SFApp_321')
    });

    afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorApp)
    });

    it('should be able to send the item to the mirror', () => {
        chromeBrowser.url('/')
        ShopfloorCommonPage.assignMirror(shopfloorApp, 'chirag.verma@farfetch.com')
        ShopfloorCommonPage.sendToMirror(shopfloorApp)
        // double tap on the mirror
        chromeBrowser.$(RequestScreen.tapMirror).moveTo(0,0)
        chromeBrowser.$(RequestScreen.tapMirror).click()
        chromeBrowser.$(RequestScreen.tapMirror).click()
        chromeBrowser.execute(() => document.body.style.zoom='40%')
        driver.pause(2000)
        chromeBrowser.execute(elem => elem.click(), chromeBrowser.$(RequestScreen.expandProduct));
        chromeBrowser.$(RequestScreen.verifyMirrorproduct).waitForExist(6000)
    });
});