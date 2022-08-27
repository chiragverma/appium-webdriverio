export default class TabBar {
    static async openHome () {
        await $('~Dashboard tab').click();
    }

    static async openWebView () {
        await $('~Webview').click();
    }

    static async openLogin () {
        await $('~Login').click();
    }

    static async openForms () {
        await $('~Forms').click();
    }

    static async openSwipe () {
        await $('~Swipe').click();
    }

    static async openDrag () {
        await $('~Drag').click();
    }

    static async waitForTabBarShown ():Promise<boolean|void> {
        return $('~Dashboard tab').waitForDisplayed({
            timeout: 20000,
        });
    }
}
