class Loginpage {
    constructor(page) {
        this.page = page;

        this.usernameinput = page.locator('[data-test="username"]');
        this.passwordinput = page.locator('[data-test="password"]');
        this.loginbutton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async enterusername(username) {
        await this.usernameinput.fill(username);
    }

    async enterpassword(password) {
        await this.passwordinput.fill(password);
    }

    async clicklogin() {
        await this.loginbutton.click();
    }

    async login(username, password) {
        await this.enterusername(username);
        await this.enterpassword(password);
        await this.clicklogin();
    }
}

module.exports = { Loginpage };