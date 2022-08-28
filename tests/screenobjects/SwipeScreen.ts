import AppScreen from './AppScreen';

class SwipeScreen extends AppScreen {
    constructor () {
        super('~Swipe-screen');
    }

    get ultimateAnswer () {return $(browser.isAndroid ? '//android.widget.TextView[contains(@resource-id, "sidemenuButton")]' : '~Get the ultimate answer')}

    async tapOnUltimateAnswer(){
        await this.ultimateAnswer.click();
    }
}

export default new SwipeScreen();
