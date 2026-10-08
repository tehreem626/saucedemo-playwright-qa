import { test, expect } from '@playwright/test';

test('complete SauceDemo purchase journey', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify login
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.getByText('Products', { exact: true })).toBeVisible();

  // Add Sauce Labs Backpack
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Open cart
  await page.getByClassName('shopping_cart_link').click();

  // Verify product
  await expect(
    page.getByText('Sauce Labs Backpack', { exact: true })
  ).toBeVisible();

  await expect(page.getByText('$29.99', { exact: true })).toBeVisible();

  // Checkout
  await page.getByRole('button', { name: 'Checkout' }).click();

  // Customer information
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByPlaceholder('Zip/Postal Code').fill('44000');

  await page.getByRole('button', { name: 'Continue' }).click();

  // Verify checkout overview
  await expect(
    page.getByText('Sauce Labs Backpack', { exact: true })
  ).toBeVisible();

  await expect(page.getByText('$29.99', { exact: true })).toBeVisible();

  // Verify total
  await expect(page.getByText('Total: $32.39', { exact: true })).toBeVisible();

  // Finish order
  await page.getByRole('button', { name: 'Finish' }).click();

  // Verify order confirmation
  await expect(
    page.getByText('Thank you for your order!', { exact: true })
  ).toBeVisible();
});
