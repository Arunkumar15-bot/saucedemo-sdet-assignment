const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../pages/Loginpage');
const { Navigationpage } = require('../pages/Navigationpage');

test.describe('FEAT-NAV - Navigation & System UI', () => {

    let loginpage;
    let navigationpage;

    test.beforeEach(async ({ page }) => {

        loginpage = new Loginpage(page);
        navigationpage = new Navigationpage(page);

        await page.goto('https://www.saucedemo.com/');

        await loginpage.login('standard_user', 'secret_sauce');
    });

    test('TC-NAV-001 - Open the menu', async ({ page }) => {

        await navigationpage.openmenu();

        await expect(navigationpage.menu).toBeVisible();
    });

    test('TC-NAV-004 - Navigate to Cart', async ({ page }) => {

        await navigationpage.clickcart();

        await expect(page).toHaveURL(/cart/);
    });

    test('TC-NAV-005 - Reset application state', async ({ page }) => {

        await navigationpage.openmenu();

        await navigationpage.resetappstate();

        await navigationpage.clickcart();

        await expect(page.locator('.cart_item')).toHaveCount(0);
    });

});