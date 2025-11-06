
import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { AddProductToCart } from '../PageObjects/AddProductToCart';
const loginDataset=JSON.parse(JSON.stringify(require("../utils/loginDetails.json")))
const addToCartDataset=JSON.parse(JSON.stringify(require("../utils/addToCartDetails.json")))

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