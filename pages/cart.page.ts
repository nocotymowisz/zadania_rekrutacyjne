import { Page } from "@playwright/test";

export class CartPage {
    constructor(private page: Page) { }


   cartCheckoutButton = this.page.locator('#checkout');
   continueShoppingButton = this.page.locator('#continue-shopping');
}