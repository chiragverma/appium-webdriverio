import RequestScreen from '../../screenobjects/requests.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';
import allureReporter from '@wdio/allure-reporter'


describe('Sending the looks to the mirror successfully,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login(shopfloorApp, 'Vchirag', 'SFApp_322')
    });

    afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorApp)
    });

    it('should be able to send looks to the mirror', () => {
        allureReporter.addFeature('Assign Looks to Mirror')
        chromeBrowser.url('/')
        ShopfloorCommonPage.assignMirror(shopfloorApp, 'chirag.verma@farfetch.com')
        ShopfloorCommonPage.sendLooksToMirror(shopfloorApp)
        // double tap on the mirror
        chromeBrowser.$(RequestScreen.tapMirror).moveTo(0,0)
        chromeBrowser.$(RequestScreen.tapMirror).doubleClick()
        chromeBrowser.$(RequestScreen.tapMirror).doubleClick()
        chromeBrowser.$(RequestScreen.tapMirror).click()
        chromeBrowser.$(RequestScreen.tapMirror).click()
        chromeBrowser.execute(() => document.body.style.zoom='60%')
        driver.pause(7000)
        chromeBrowser.execute(elem => elem.click(), chromeBrowser.$(RequestScreen.expandProduct));
        chromeBrowser.$(RequestScreen.verifyMirrorlooks).waitForExist(6000)
    });

});