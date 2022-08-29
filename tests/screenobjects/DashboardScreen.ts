class DashboardScreen {

    get dashboardTitle () {return $(browser.isAndroid ? '//android.widget.TextView[@content-desc="dashboard-title"]' : '~dashboard-title')}
    get bitcoinTab () {return $(browser.isAndroid ? '//android.view.ViewGroup[@content-desc="Coin-btc"]' : '~Coin-btc')}
    get ethereumTab () {return $(browser.isAndroid ? '//android.view.ViewGroup[@content-desc="Coin-eth"]' : '~Coin-eth')}

}

export default new DashboardScreen();