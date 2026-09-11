const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../pages/Loginpage');
const { Productspage } = require('../pages/Productspage');

test.describe('FEAT-CATALOG - Product Catalog & Discovery', () => {

    let loginpage;
    let productspage;

    test.beforeEach(async ({ page }) => {

        loginpage = new Loginpage(page);
        productspage = new Productspage(page);

        await page.goto('https://www.saucedemo.com/');

        await loginpage.login('standard_user', 'secret_sauce');
    });

    test('TC-CATALOG-001 - Verify products are displayed', async ({ page }) => {

        await expect(productspage.producttitle).toHaveText('Products');

        const productcount = await productspage.getproductcount();

        expect(productcount).toBeGreaterThan(0);
    });

    test('TC-CATALOG-003 - Open product details', async ({ page }) => {

        await productspage.openproduct('Sauce Labs Backpack');

        await expect(page.locator('.inventory_details_name')).toHaveText('Sauce Labs Backpack');
    });

    test('TC-CATALOG-005 - Sort products A to Z', async ({ page }) => {

        await productspage.selectsort('az');

        await expect(productspage.productitems.first()).toContainText('Sauce Labs Backpack');
    });

    test('TC-CATALOG-007 - Sort products low to high price', async ({ page }) => {

        await productspage.selectsort('lohi');

        await expect(productspage.productitems.first()).toContainText('Sauce Labs Onesie');
    });

});