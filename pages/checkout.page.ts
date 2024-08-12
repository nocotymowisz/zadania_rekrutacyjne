import { Page } from "@playwright/test";

export class CheckoutPage {
    constructor(private page: Page) { }

    firstNameInput = this.page.locator('#first-name');
    lastNameInput = this.page.locator('#last-name');
    postCodeInput = this.page.locator('#postal-code');
    continueButton = this.page.locator('#continue');


}
