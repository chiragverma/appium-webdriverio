import RequestScreen from '../../screenobjects/requests.screen';
import ShopfloorCommonPage from '../../pageobjects/shopfloorcommon.page';


describe('Prebuild Shopfloor,', () => {

    beforeEach(() => {
        ShopfloorCommonPage.login(shopfloorApp, 'Vchirag', 'SFApp_321')
    });

    afterEach(() => {
        ShopfloorCommonPage.logout(shopfloorApp)
    });

    it('should change the environment and the language', () => {
        
    });
});