import RequestScreen from '../../screenobjects/requests.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';
import allureReporter from '@wdio/allure-reporter'


describe('Resetting the mirror successfully,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login(shopfloorApp, 'Vchirag', 'SFApp_322')
    });

    afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorApp)
    });

    it('should be able to reset the mirror', () => {
        allureReporter.addFeature('Reset Mirror')
        chromeBrowser.url('/')
        // recommend item to mirror
        ShopfloorCommonPage.assignMirror(shopfloorApp, 'chirag.verma@farfetch.com')
        ShopfloorCommonPage.sendItemToMirror(shopfloorApp)
        // double tap on the mirror
        chromeBrowser.$(RequestScreen.tapMirror).doubleClick()
        chromeBrowser.$(RequestScreen.tapMirror).doubleClick()
        chromeBrowser.$(RequestScreen.tapMirror).click()
        chromeBrowser.$(RequestScreen.tapMirror).click()
        chromeBrowser.execute(() => document.body.style.zoom='50%')
        driver.pause(5000)
        chromeBrowser.$(RequestScreen.mirrorleftArea).moveTo(0,0)
        chromeBrowser.execute(elem => elem.click(), chromeBrowser.$(RequestScreen.expandProduct));
        chromeBrowser.$(RequestScreen.verifyMirrorproduct).waitForExist(6000)
        // long press on the left hand side
        chromeBrowser.$(RequestScreen.mirrorleftArea).moveTo(0,0)
        chromeBrowser.buttonDown(0);
        chromeBrowser.pause(2000)
        chromeBrowser.execute(elem => elem.click(), chromeBrowser.$(RequestScreen.resetMirror));
        chromeBrowser.execute(elem => elem.click(), chromeBrowser.$(RequestScreen.confirmReset));
        chromeBrowser.pause(2000)
        // enable the mirror again
        chromeBrowser.$(RequestScreen.tapMirror).moveTo(0,0)
        chromeBrowser.$(RequestScreen.tapMirror).doubleClick()
        chromeBrowser.$(RequestScreen.tapMirror).click()
        // wait for the item to reappear
        chromeBrowser.$(RequestScreen.verifyMirrorproduct).waitForExist(8000)
    });
});
