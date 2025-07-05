import { test, expect } from '@playwright/test';
import LoginPage from '../../Pages/login.spec.js';

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
});