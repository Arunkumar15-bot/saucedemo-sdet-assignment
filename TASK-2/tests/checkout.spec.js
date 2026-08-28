const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../pages/Loginpage');
const { Productspage } = require('../pages/Productspage');
const { Cartpage } = require('../pages/Cartpage');
const { Checkoutpage } = require('../pages/Checkoutpage');

test.describe('FEAT-CHK - Checkout Flow & Order Processing', () => {

    let loginpage;
    let productspage;
    let cartpage;
    let checkoutpage;

    test.beforeEach(async ({ page }) => {

        loginpage = new Loginpage(page);
        productspage = new Productspage(page);
        cartpage = new Cartpage(page);
        checkoutpage = new Checkoutpage(page);

        await page.goto('https://www.saucedemo.com/');

        await loginpage.login('standard_user', 'secret_sauce');

        await productspage.addproduct('Sauce Labs Backpack');

        await cartpage.opencart();
    });

    test('TC-CHK-001 - Navigate to checkout', async ({ page }) => {

        await checkoutpage.clickcheckout();

        await expect(page).toHaveURL(/checkout-step-one/);
    });

    test('TC-CHK-002 - Checkout with valid information', async ({ page }) => {

        await checkoutpage.clickcheckout();

        await checkoutpage.enterinformation(
            'Arun',
            'Kumar',
            '600001'
        );

        await checkoutpage.clickcontinue();

        await expect(page).toHaveURL(/checkout-step-two/);
    });

    test('TC-CHK-003 - First name left empty', async ({ page }) => {

        await checkoutpage.clickcheckout();

        await checkoutpage.enterinformation(
            '',
            'Kumar',
            '600001'
        );

        await checkoutpage.clickcontinue();

        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    test('TC-CHK-009 - Complete an order', async ({ page }) => {

        await checkoutpage.clickcheckout();

        await checkoutpage.enterinformation(
            'Arun',
            'Kumar',
            '600001'
        );

        await checkoutpage.clickcontinue();

        await checkoutpage.clickfinish();

        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    });

});