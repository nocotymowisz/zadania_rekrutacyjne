import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';

test.describe('Orders tests', () => {
  test.beforeEach(async ({ page }) => {
    const userName = loginData.userName;
    const userPassword = loginData.userPassword;
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await loginPage.userNameInput.fill(userName);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();

  });

  test('succesful order complete', async ({ page }) => {
    // Arrange
    const firstName = 'Test';
    const lastName = 'Testowy';
    const postCode = '12-123';
    const expectedOrderCompeleteText = 'Thank you for your order!';

    // Act
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#shopping_cart_container').click();
    await page.locator('#checkout').click();
    await page.locator('#first-name').fill(firstName);
    await page.locator('#last-name').fill(lastName);
    await page.locator('#postal-code').fill(postCode);
    await page.locator('#continue').click();
    await page.locator('#finish').click();

    // Assert
    await expect(page.locator('[data-test="complete-header"]')).toHaveText(expectedOrderCompeleteText);
  });

});