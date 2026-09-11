class Cartpage {
    constructor(page) {
        this.page = page;

        this.cartlink = page.locator('.shopping_cart_link');
        this.cartitems = page.locator('.cart_item');
        this.removebutton = page.getByRole('button', { name: /Remove/ });
        this.cartbadge = page.locator('.shopping_cart_badge');
    }

    async opencart() {
        await this.cartlink.click();
    }

    async getcartitemcount() {
        return await this.cartitems.count();
    }

    async removelastitem() {
        await this.removebutton.last().click();
    }
}

module.exports = { Cartpage };