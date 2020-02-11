import ClientScreen from '../../screenobjects/client.screen';
import SearchScreen from '../../screenobjects/search.screen';
import HomeScreen from '../../screenobjects/home.screen';
import RequestScreen from '../../screenobjects/requests.screen';
import FormScreen from '../../screenobjects/forms.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';

describe('Not able to Assign Mirror from the product with no image,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login()
    });

    afterEach(() => {
        ShopfloorCommonPage.logout()
    });

    it('should not able to Assign Mirror from the product with no image', () => {
        ShopfloorCommonPage.sendToMirror('chirag.verma@farfetch.com')
        shopfloorApp.$(SearchScreen.shoes).click();
        shopfloorApp.$(SearchScreen.viewAllShoes).click();
        // not able to see the three dots menu
        shopfloorApp.$(SearchScreen.noimageItem).click();
        // go to the item and still not able to see the three dots
        shopfloorApp.$(SearchScreen.threedotsMenu).waitForDisplayed(undefined, true);
    });

});

