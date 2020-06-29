import PreferenceScreen from '../screenobjects/preferences.screen';


describe('Prebuild Shopfloor,', () => {

    it('should set the app before testing', () => {
        // change environment on Iphone 8
        shopfloorAppOne.launchApp()
        shopfloorAppOne.activateApp("com.apple.Preferences");
        shopfloorAppOne.$(PreferenceScreen.shopfloorApp).click();
        shopfloorAppOne.$(PreferenceScreen.debugSection).click();
        if (shopfloorAppOne.$(PreferenceScreen.environmentProduction).isDisplayed()) {
            shopfloorAppOne.$(PreferenceScreen.environmentProduction).click();
        }
        else if
            (shopfloorAppOne.$(PreferenceScreen.environmentDevelopment).isDisplayed()) {
            shopfloorAppOne.$(PreferenceScreen.environmentDevelopment).click();
        }
        shopfloorAppOne.$(PreferenceScreen.production).click();
        shopfloorAppOne.closeApp()
        // change environment on Iphone 7
        shopfloorAppTwo.launchApp()
        shopfloorAppTwo.activateApp("com.apple.Preferences");
        shopfloorAppTwo.$(PreferenceScreen.shopfloorApp).click();
        shopfloorAppTwo.$(PreferenceScreen.debugSection).click();
        if (shopfloorAppTwo.$(PreferenceScreen.environmentProduction).isDisplayed()) {
            shopfloorAppTwo.$(PreferenceScreen.environmentProduction).click();
        }
        else if
            (shopfloorAppTwo.$(PreferenceScreen.environmentDevelopment).isDisplayed()) {
            shopfloorAppTwo.$(PreferenceScreen.environmentDevelopment).click();
        }
        shopfloorAppTwo.$(PreferenceScreen.production).click();
        shopfloorAppTwo.closeApp()
    });
});