class Navigationpage {
    constructor(page) {
        this.page = page;

        this.menuButton = page.locator('#react-burger-menu-btn');
        this.closeButton = page.locator('#react-burger-cross-btn');
        this.allItems = page.locator('#inventory_sidebar_link');
        this.cartLink = page.locator('.shopping_cart_link');
        this.resetAppState = page.locator('#reset_sidebar_link');
        this.menu = page.locator('.bm-menu');
    }

    async openmenu() {
        await this.menuButton.click();
    }

    async closemenu() {
        await this.closeButton.click();
    }

    async clickallitems() {
        await this.allItems.click();
    }

    async clickcart() {
        await this.cartLink.click();
    }

    async resetappstate() {
        await this.resetAppState.click();
    }
}

module.exports = { Navigationpage };