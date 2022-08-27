import AppScreen from './AppScreen';

class HomeScreen extends AppScreen {
    constructor () {
        super('~Instructions tab');
    }

    get dashboardTab () {return $('~Dashboard tab');}
    get settingsTab () {return $('~Settings tab');}

    async tapOnDashboard(){
        await this.dashboardTab.click();
    }

    async tapOnSettings(){
        await this.settingsTab.click();
    }

}

export default new HomeScreen();
