import AppScreen from './app.screen';

const SELECTORS = {
    ACCOUNT_TAB: '~Tabbar.UserAccount',
    LOGOUT_BUTTON: '~UserAccount.Logout',
    CONFIRM_BUTTON:  '~Confirm',
    FAVOURITE_BUTTON: '~favouriteCustomerButton',
    ASSIGNMENT_BUTTON: '~assignmentButton',
    FITTINGROOM_BUTTON: '//XCUIElementTypeStaticText[@name="Fitting Room"]/..',
    MIRROR_NAME: '~Automation Tests',
    ASSIGNMIRROR_BUTTON: '~footerWithButtonComponent',
    SEARCH_CROSS: '~WhiteCross'
};

class AccountScreen extends AppScreen {

    get accountTab () {
        return SELECTORS.ACCOUNT_TAB;
    }

    get logoutButon () {
        return SELECTORS.LOGOUT_BUTTON;
    }

    get confirmButton () {
        return SELECTORS.CONFIRM_BUTTON;
    }

    get assignmentButton () {
        return SELECTORS.ASSIGNMENT_BUTTON;
    }

    get fittingRoomButton () {
        return SELECTORS.FITTINGROOM_BUTTON;
    }

    get mirrorName () {
        return SELECTORS.MIRROR_NAME;
    }

    get assignMirrorButton () {
        return SELECTORS.ASSIGNMIRROR_BUTTON;
    }

    get customerlabelButton () {
        return SELECTORS.CUSTOMERLABEL_BUTTON;
    }

    get searchCross () {
        return SELECTORS.SEARCH_CROSS;
    }

}

export default new AccountScreen();
