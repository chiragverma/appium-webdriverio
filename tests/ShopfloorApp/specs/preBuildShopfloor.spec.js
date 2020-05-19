import PreferenceScreen from '../screenobjects/preferences.screen';


describe('Prebuild Shopfloor,', () => {

    it('should set the app before testing', () => {
        // change environment on Iphone 8
        shopfloorAppOne.launchApp()
        shopfloorAppOne.activateApp("com.apple.Preferences");
        shopfloorAppOne.$(PreferenceScreen.shopfloorApp).click();
        shopfloorAppOne.$(PreferenceScreen.debugSection).click();
        shopfloorAppOne.$(PreferenceScreen.environmentSection).click();
        shopfloorAppOne.$(PreferenceScreen.production).click();
        // change environment on Iphone 7
        shopfloorAppTwo.launchApp()
        shopfloorAppTwo.activateApp("com.apple.Preferences");
        shopfloorAppTwo.$(PreferenceScreen.shopfloorApp).click();
        shopfloorAppTwo.$(PreferenceScreen.debugSection).click();
        shopfloorAppTwo.$(PreferenceScreen.environmentSection).click();
        shopfloorAppTwo.$(PreferenceScreen.production).click();
    });
});