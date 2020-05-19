import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
    SEARCH_SCREEN: '~Login-screen',
    ACTIONLIST_BUTTON: '(//XCUIElementTypeButton[@name="plpActionsListOptions"])[2]',
    NOIMAGE_ITEM: '(//XCUIElementTypeImage[@name="HangerForListing"])[1]',
    HANDBAGS: '~Ready-to-Wear',
    SHOES: '~Shoes',
    VIEWALL_DRESSES: '~Dresses',
    VIEWALL_SHOES: '~View All Shoes',
    COLLECTIONS: '~Collections',
    FIRST_COLLECTION: '//XCUIElementTypeCollectionView/XCUIElementTypeCell[1]',
    SEARCH_CROSS: '~SimpleCross',
    SEARCH_ERROR: '~toastTitleLabel',
    ADD_RECOMMENDATION: '~Add to recommendations',
    SEND_RECOMMENDATION: '~Send to client',
    SEND_TO_MIRROR: '~Send to mirror',
    SEND_TO_CLIENT_ALERT: '//XCUIElementTypeAlert[@name="This product was declined by the client"]',
    RESEND_BUTTON: '~Resend',
    RECOMMENDATION_SENT: '//XCUIElementTypeStaticText[@name="toastTitleLabel"]',
    THREEDOT_MENU: '~MenuAction',
    PRODUCT_DETAILS: '//XCUIElementTypeStaticText[@name="Product details"]/.././XCUIElementTypeImage[@name="Plus"]',
    FIRSTIMAGE_PRODUCT: '(//XCUIElementTypeButton[@name="plpActionsListOptions"]/..)[2]',
    FIRST_LOOK: '~MenuAction',
    CANCEL_BUTTON: '~Cancel'
};


class SearchScreen extends AppScreen {
    constructor () {
        super(SELECTORS.LOGIN_SCREEN);
    }

    get actionListButton () {
        return SELECTORS.ACTIONLIST_BUTTON;
    }

    get noimageItem () {
        return SELECTORS.NOIMAGE_ITEM;
    }

    get handbags () {
        return SELECTORS.HANDBAGS;
    }

    get shoes () {
        return SELECTORS.SHOES;
    }

    get viewAllDresses () {
        return SELECTORS.VIEWALL_DRESSES;
    }

    get viewAllShoes () {
        return SELECTORS.VIEWALL_SHOES;
    }

    get collections () {
        return SELECTORS.COLLECTIONS;
    }

    get firstCollection () {
        return SELECTORS.FIRST_COLLECTION;
    }

    get searchCross () {
        return SELECTORS.SEARCH_CROSS;
    }

    get searchError () {
        return SELECTORS.SEARCH_ERROR;
    }

    get addRecommendations () {
        return SELECTORS.ADD_RECOMMENDATION;
    }

    get sendRecommendations () {
        return SELECTORS.SEND_RECOMMENDATION;
    }

    get sendtoMirror () {
        return SELECTORS.SEND_TO_MIRROR;
    }

    get sendtoClientAlert () {
        return SELECTORS.SEND_TO_CLIENT_ALERT;
    }

    get resendButton () {
        return SELECTORS.RESEND_BUTTON;
    }

    get recommendationSent () {
        return SELECTORS.RECOMMENDATION_SENT;
    }

    get threedotsMenu () {
        return SELECTORS.THREEDOT_MENU;
    }

    get productDetails () {
        return SELECTORS.PRODUCT_DETAILS;
    }

    get firstimageProduct () {
        return SELECTORS.FIRSTIMAGE_PRODUCT;
    }
    
    get firstLook () {
        return SELECTORS.FIRST_LOOK;
    }

    get cancelButton () {
        return SELECTORS.CANCEL_BUTTON;
    }

    get alert () {
        return NativeAlert;
    }
}

export default new SearchScreen();
