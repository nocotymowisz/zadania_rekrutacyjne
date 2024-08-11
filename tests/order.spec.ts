import { test, expect } from '@playwright/test';

test.describe('Orders', () => {
  test('succesful order complete', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#shopping_cart_container').click();
    await page.locator('#checkout').click();
    await page.locator('#first-name').fill('Test');
    await page.locator('#last-name').fill('Testowy');
    await page.locator('#postal-code').fill('12-123');
    await page.locator('#continue').click();
    await page.locator('#finish').click();

    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
  });

});