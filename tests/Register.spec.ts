import { test, expect } from '@playwright/test';
import { RegisterUser } from '../PageObjects/RegisterUser';
const registerData = JSON.parse(JSON.stringify(require ("../utils/registerData.json")));

test.only('Register', async ({ page }) => {

  await page.goto('https://automationexercise.com/');
  await expect(page).toHaveTitle(/Automation Exercise/);
  const registerUser=new RegisterUser(page);
  await registerUser.Register();
  await registerUser.enterDetails(registerData.name, registerData.email);
  await registerUser.enterAccountInfo(registerData.password,registerData.firstName,registerData.lastName,registerData.company,registerData.address,registerData.state,registerData.city,registerData.zipCode,registerData.mobile)
  await registerUser.clickOnContinue();
  await registerUser.clickOnDeleteAccount();
  await page.pause()
});

