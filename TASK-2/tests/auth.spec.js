const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../pages/Loginpage');

test.describe('FEAT-AUTH - Authentication & Session Management', () => {

    let loginpage;

    test.beforeEach(async ({ page }) => {

        loginpage = new Loginpage(page);

        await page.goto('https://www.saucedemo.com/');
    });

    test('TC-AUTH-001 - Login with valid credentials', async ({ page }) => {

        await loginpage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory/);
    });

    test('TC-AUTH-002 - Login with invalid username', async ({ page }) => {

        await loginpage.login('invalid_user', 'secret_sauce');

        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    test('TC-AUTH-003 - Login with invalid password', async ({ page }) => {

        await loginpage.login('standard_user', 'wrong_password');

        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    test('TC-AUTH-004 - Login with both fields empty', async ({ page }) => {

        await loginpage.enterusername('');
        await loginpage.enterpassword('');
        await loginpage.clicklogin();
    
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
    
    test('TC-AUTH-005 - Login with empty username', async ({ page }) => {
    
        await loginpage.enterusername('');
        await loginpage.enterpassword('secret_sauce');
        await loginpage.clicklogin();
    
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
    
    test('TC-AUTH-006 - Login with empty password', async ({ page }) => {
    
        await loginpage.enterusername('standard_user');
        await loginpage.enterpassword('');
        await loginpage.clicklogin();
    
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

});