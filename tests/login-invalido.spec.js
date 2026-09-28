const { test, expect } = require('@playwright/test');

test('login com senha inválida mostra mensagem de erro', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'senha_errada');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});