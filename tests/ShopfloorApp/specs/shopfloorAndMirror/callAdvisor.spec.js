import HomeScreen from '../../screenobjects/home.screen';
import RequestScreen from '../../screenobjects/requests.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';


describe('Able to Successfully call the Advisor from the mirror,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login(shopfloorApp, 'Vchirag', 'SFApp_321')
    });

    afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorApp)
    });

    it('should be able to call the Advisor from the mirror', () => {
        chromeBrowser.url('/')
        ShopfloorCommonPage.assignMirror(shopfloorApp, 'chirag.verma@farfetch.com')
        ShopfloorCommonPage.sendToMirror(shopfloorApp)
        // double tap on the mirror
        chromeBrowser.$(RequestScreen.tapMirror).moveTo(0,0)
        chromeBrowser.$(RequestScreen.tapMirror).click()
        chromeBrowser.$(RequestScreen.tapMirror).click()
        chromeBrowser.execute(() => document.body.style.zoom='100%')
        chromeBrowser.$(RequestScreen.calladvisorButton).doubleClick();
        shopfloorApp.$(HomeScreen.requestscreenButon).click();
        shopfloorApp.$(RequestScreen.lastRequest).click();
        shopfloorApp.$(RequestScreen.completeRequest).click();
        shopfloorApp.$(HomeScreen.requestscreenButon).click();
        shopfloorApp.$(RequestScreen.lastRequest).click();
        shopfloorApp.$(RequestScreen.lastRequest).waitForDisplayed(undefined, true);
    });
});
