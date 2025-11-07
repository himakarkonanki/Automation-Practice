import { test, expect } from '@playwright/test';
import { RegisterUser } from '../PageObjects/RegisterUser';
import { LoginPage } from '../PageObjects/LoginPage';
import { AddProductToCart } from '../PageObjects/AddProductToCart';
const loginDataset=JSON.parse(JSON.stringify(require("../utils/loginDetails.json")))
const addToCartDataset=JSON.parse(JSON.stringify(require("../utils/addToCartDetails.json")))

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

test('Login test', async({page})=>{
  await page.goto('https://automationexercise.com/');
  await expect(page).toHaveTitle(/Automation Exercise/);
  const loginPage=new LoginPage(page)
  await loginPage.Login()
  await loginPage.userLogin(loginDataset.email, loginDataset.password)
  

  const addProduct= new AddProductToCart(page)
  await addProduct.getListofProducts()
  await addProduct.addProductToCart()
  await addProduct.verifyCartDetails(addToCartDataset.productName,addToCartDataset.productPrice,addToCartDataset.productQuantity,addToCartDataset.totalAmount)
  // await page.pause()
})

