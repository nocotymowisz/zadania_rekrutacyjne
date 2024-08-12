import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { CheckoutPage } from '../pages/checkout.page';
import { userCheckoutData } from '../test-data/userCheckout.data';
import { CartPage } from '../pages/cart.page';

test.describe('Orders tests', () => {
  test.beforeEach(async ({ page }) => {
    const userName = loginData.userName;
    const userPassword = loginData.userPassword;
    const loginPage = new LoginPage(page);
    
    await page.goto('/');
    await loginPage.userNameInput.fill(userName);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await page.locator('#shopping_cart_container').click();
    
  });
  
  test('succesful order complete', async ({ page }) => {
    // Arrange
    const firstName = userCheckoutData.firstName;
    const lastName = userCheckoutData.lastName;
    const postCode = userCheckoutData.postCode;
    const expectedOrderCompeleteText = 'Thank you for your order!';
    const checkoutPage = new CheckoutPage(page);
    const cartPage = new CartPage(page);

    // Act
    await cartPage.cartCheckoutButton.click();
    await checkoutPage.firstNameInput.fill(firstName);
    await checkoutPage.lastNameInput.fill(lastName);
    await checkoutPage.postCodeInput.fill(postCode);
    await checkoutPage.continueButton.click();
    await page.locator('#finish').click();

    // Assert
    await expect(page.locator('[data-test="complete-header"]')).toHaveText(expectedOrderCompeleteText);
  });

  test('remove item from cart', async ({ page }) => {

    // Arrange

    // Act
    await page.locator('#remove-sauce-labs-backpack').click();

    // Assert
    await expect(page.locator('#cart_contents_container > div > div.cart_list > div.removed_cart_item')).toHaveClass('removed_cart_item');



  });

});