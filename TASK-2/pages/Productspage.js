class Productspage {
    constructor(page) {
        this.page = page;

        this.productitems = page.locator('.inventory_item');
        this.producttitle = page.locator('.title');
        this.sortdropdown = page.locator('[data-test="product-sort-container"]');
        this.cartlink = page.locator('.shopping_cart_link');
    }
    async addproduct(productname) {
        const product = this.page.locator('.inventory_item')
            .filter({ hasText: productname });
    
        await product.getByRole('button', { name: 'Add to cart' }).click();
    }
    async getproductcount() {
        return await this.productitems.count();
    }

    async openproduct(productname) {
        await this.page.getByText(productname, { exact: true }).click();
    }

    async selectsort(option) {
        await this.sortdropdown.selectOption(option);
    }

    async opencart() {
        await this.cartlink.click();
    }
}

module.exports = { Productspage };