import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}

        userNameInput = this.page.locator('#user-name');
        passwordInput = this.page.locator('#password');
        loginButton = this.page.locator('#login-button');

    //     await page.locator('#password').fill(userPassword);
    // await page.locator('#login-button').click();
        
    
}