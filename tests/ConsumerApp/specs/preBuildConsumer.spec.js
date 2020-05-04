import ConsumerCommonPage from '../../pageobjects/consumercommon.page';


describe('Prebuild Consumer,', () => {

    beforeEach(() => {
        ConsumerCommonPage.login()
    });

    afterEach(() => {
        ConsumerCommonPage.logout()
    });

    it('Prebuild Consumer', () => {
        
    });
});
