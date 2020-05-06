import SearchScreen from '../../screenobjects/search.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';
import allureReporter from '@wdio/allure-reporter'


describe('Not able to Assign Mirror from the product with no image,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login()
    });

    afterEach(() => {
        ShopfloorCommonPage.logout()
    });

    it('should not able to Assign Mirror from the product with no image', () => {
        allureReporter.addFeature('Not Able to Assign Mirror')
        ShopfloorCommonPage.sendToMirror('chirag.verma@farfetch.com')
        shopfloorApp.$(SearchScreen.shoes).click();
        shopfloorApp.$(SearchScreen.viewAllShoes).click();
        // not able to see the three dots menu
        shopfloorApp.$(SearchScreen.noimageItem).click();
        // go to the item and still not able to see the three dots
        shopfloorApp.$(SearchScreen.threedotsMenu).waitForDisplayed(undefined, true);
    });

});

