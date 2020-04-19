import HomeScreen from '../../screenobjects/home.screen';
import ConsumerCommonPage from '../../pageobjects/consumercommon.page';


describe('Checking if the customer received the recommendation,', () => {

    beforeEach(() => {
        ConsumerCommonPage.login()
    });

    afterEach(() => {
        ConsumerCommonPage.logout()
    });

    it('should have 1 recommendation on the home page', () => {
        consumerApp.$(HomeScreen.recommendationsText).waitForExist(7000)
        consumerApp.$(HomeScreen.noOfProducts).waitForExist(7000)
        consumerApp.$(HomeScreen.recommendationImage).click()
        consumerApp.$(HomeScreen.deleteRecommendation).click()
        consumerApp.$(HomeScreen.recommendationsText).waitForDisplayed(undefined, true);
        consumerApp.$(HomeScreen.noOfProducts).waitForDisplayed(undefined, true);
    });
});
