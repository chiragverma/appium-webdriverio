class HomeScreen {

    get instructionsTab () {return $(browser.isAndroid ? '//android.view.View[contains(@resource-id, "Instructions tab")]' : '~Instructions tab')}
    get dashboardTab () {return $(browser.isAndroid ? '//android.view.View[contains(@resource-id, "Dashboard tab")]' : '~Dashboard tab')}
    get settingsTab () {return $(browser.isAndroid ? '//android.view.View[contains(@resource-id, "Settings tab")]' : '~Settings tab')}


    async tapOnDashboard(){
        await this.dashboardTab.click();
    }

    async tapOnSettings(){
        await this.settingsTab.click();
    }
}

export default new HomeScreen();
