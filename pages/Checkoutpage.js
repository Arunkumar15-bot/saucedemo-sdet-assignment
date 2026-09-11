class Checkoutpage {
    constructor(page) {
        this.page = page;

        this.checkoutbutton = page.locator('[data-test="checkout"]');
        this.firstnameinput = page.locator('[data-test="firstName"]');
        this.lastnameinput = page.locator('[data-test="lastName"]');
        this.postalcodeinput = page.locator('[data-test="postalCode"]');
        this.continuebutton = page.locator('[data-test="continue"]');
        this.finishbutton = page.locator('[data-test="finish"]');
        this.completeMessage = page.locator('.complete-header');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async clickcheckout() {
        await this.checkoutbutton.click();
    }

    async enterinformation(firstname, lastname, postalcode) {
        await this.firstnameinput.fill(firstname);
        await this.lastnameinput.fill(lastname);
        await this.postalcodeinput.fill(postalcode);
    }

    async clickcontinue() {
        await this.continuebutton.click();
    }

    async clickfinish() {
        await this.finishbutton.click();
    }
}

module.exports = { Checkoutpage };