const { test, expect } = require('@playwright/test');

test('Deve realizar uma compra de ponta a ponta com sucesso', async ({ page }) => {
  await page.goto('https://saucedemo.com');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Seu Nome');
  await page.locator('[data-test="lastName"]').fill('Seu Sobrenome');
  await page.locator('[data-test="postalCode"]').fill('12345-678');
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
  await page.locator('[data-test="finish"]').click();

  const mensagemSucesso = page.locator('[data-test="complete-header"]');
  await expect(mensagemSucesso).toHaveText('Thank you for your order!');
});
