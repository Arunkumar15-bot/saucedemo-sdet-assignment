const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../pages/Loginpage');
const { Productspage } = require('../pages/Productspage');
const { Cartpage } = require('../pages/Cartpage');

test.describe('FEAT-CART - Cart & Badge Management', () => {

    let loginpage;
    let productspage;
    let cartpage;

    test.beforeEach(async ({ page }) => {

        loginpage = new Loginpage(page);
        productspage = new Productspage(page);
        cartpage = new Cartpage(page);

        await page.goto('https://www.saucedemo.com/');

        await loginpage.login('standard_user', 'secret_sauce');
    });

    test('TC-CART-001 - Add a product to cart', async ({ page }) => {

        await productspage.addproduct('Sauce Labs Backpack');
    
        await cartpage.opencart();
    
        await expect(cartpage.cartitems).toContainText('Sauce Labs Backpack');
    });
    
    test('TC-CART-002 - Add multiple products', async ({ page }) => {

        await productspage.addproduct('Sauce Labs Backpack');
        await productspage.addproduct('Sauce Labs Bike Light');

        await cartpage.opencart();

        await expect(cartpage.cartitems).toHaveCount(2);
    });

    test('TC-CART-003 - Verify cart badge count', async ({ page }) => {

        await productspage.addproduct('Sauce Labs Backpack');
        await productspage.addproduct('Sauce Labs Bike Light');

        await expect(cartpage.cartbadge).toHaveText('2');
    });

    test('TC-CART-005 - Remove product from cart', async ({ page }) => {

        await productspage.addproduct('Sauce Labs Backpack');

        await cartpage.opencart();

        await cartpage.removelastitem();

        await expect(cartpage.cartitems).toHaveCount(0);
    });

});