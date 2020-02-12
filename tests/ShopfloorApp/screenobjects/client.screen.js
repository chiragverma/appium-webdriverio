import AppScreen from './app.screen';

const SELECTORS = {
    CLIENT_TAB: '~customersBarButton',
    SEARCH_BUTTON: '~customerSearchTextField',
    CUSTOMERLABEL_BUTTON:  '~customerNameLabel',
    FAVOURITE_BUTTON: '~favouriteCustomerButton',
    ASSIGNMENT_BUTTON: '~assignmentButton',
    FITTINGROOM_BUTTON: '//XCUIElementTypeStaticText[@name="Fitting Room"]/..',
    MIRROR_NAME: '~Demo Fitting Room QaLx',
    CLIENT_WISHLIST: '//XCUIElementTypeStaticText[@name="Client\'s Product List"]/..',
    ASSIGNMIRROR_BUTTON: '~footerWithButtonComponent',
    SEARCH_CROSS: '~WhiteCross',
    FIRSTWISHLIST_ITEM: '//XCUIElementTypeTable/XCUIElementTypeCell[1]',
    MIRROR_TAB: '~Mirror',
    ITEMADDED_ALERT: '//XCUIElementTypeAlert[@name="This product is already in the client\'s wishlist"]',
    RECOMMENDATION_TITLE: '(//XCUIElementTypeOther[@name="tableViewHeaderComponent"])[2]',
    BACK_ARROW: '~BackArrow',
};

class ClientScreen extends AppScreen {

    get clientTab () {
        return SELECTORS.CLIENT_TAB;
    }

    get searchButon () {
        return SELECTORS.SEARCH_BUTTON;
    }

    get favouriteButton () {
        return SELECTORS.FAVOURITE_BUTTON;
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

    get clientWishlist () {
        return SELECTORS.CLIENT_WISHLIST;
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

    get firstWishlistItem () {
        return SELECTORS.FIRSTWISHLIST_ITEM;
    }

    get mirrorTab () {
        return SELECTORS.MIRROR_TAB;
    }

    get itemAddedAlert () {
        return SELECTORS.ITEMADDED_ALERT;
    }

    get recommendationTitle () {
        return SELECTORS.RECOMMENDATION_TITLE;
    }

    get backArrow () {
        return SELECTORS.BACK_ARROW;
    }

}

export default new ClientScreen();
