
browser.addCommand('elementToBeClickable', function (selector, timeout) {
    return this.waitForVisible(selector, timeout).waitForEnabled(selector, timeout);
});

