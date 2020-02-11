import Page from './page';

class FormPage extends Page {
    /**
     * define elements
     */
    get loginButton () { return $('Login'); }
    get username () { return $('#username'); }
    get password () { return $('#password'); }
    get submitButton () { return $('#login button[type=submit]'); }
    get flash () { return $('~Invalid username or password.'); }
    get loginUserName () { return $('~assistantNameLabel'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login');
    }

    submit () {
        browser.hideKeyboard();
        this.submitButton.click();
    }
}

export default new FormPage();
