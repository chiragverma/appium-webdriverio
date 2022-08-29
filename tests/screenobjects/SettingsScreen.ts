class DashboardScreen {

    get settingsTitle () {return $(browser.isAndroid ? '//android.widget.TextView[contains(@resource-id, "settings-title")]' : '~settings-title')}
    get showBitcoin () {return $(browser.isAndroid ? '//android.widget.TextView[contains(@resource-id, "checkBTC")]' : '~Only show "Bitcoin" coins')}
    get showWinners () {return $(browser.isAndroid ? '//android.widget.TextView[contains(@resource-id, "checkWinners")]' : '~Only show winners')}
    get showLosers () {return $(browser.isAndroid ? '//android.widget.TextView[contains(@resource-id, "checkLosers")]' : '~Only show losers')}

}

export default new DashboardScreen();
