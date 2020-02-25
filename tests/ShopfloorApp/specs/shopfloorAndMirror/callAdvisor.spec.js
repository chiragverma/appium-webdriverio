import ClientScreen from '../../screenobjects/client.screen';
import SearchScreen from '../../screenobjects/search.screen';
import HomeScreen from '../../screenobjects/home.screen';
import RequestScreen from '../../screenobjects/requests.screen';
import FormScreen from '../../screenobjects/forms.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';

describe('Able to Successfully call the Advisor from the mirror,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login()
    });

    afterEach(() => {
        ShopfloorCommonPage.logout()
    });

    it('should be able to call the Advisor from the mirror', () => {
        chromeBrowser.url('/')
        ShopfloorCommonPage.sendToMirror('chirag.verma@farfetch.com')
        chromeBrowser.$(RequestScreen.tapMirror).doubleClick()
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
