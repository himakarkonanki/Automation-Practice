import { test, expect } from '../../fixtures/myFixture';
const loginDataset = JSON.parse(JSON.stringify(require("../utils/loginDetails.json")))
const addToCartDataset = JSON.parse(JSON.stringify(require("../utils/addToCartDetails.json")))
const registerData = JSON.parse(JSON.stringify(require("../utils/registerData.json")));
const reviewData=JSON.parse(JSON.stringify(require("../utils/reviewDetails.json")))

test.describe("Register User and Add Product to cart", () => {

  test('Register', async ({ page, registerPage }) => {
    // const registerUser=new RegisterUser(page);
    await registerPage.Register();
    await registerPage.enterDetails(registerData.name, registerData.email);
    await registerPage.enterAccountInfo(registerData.password, registerData.firstName, registerData.lastName, registerData.company, registerData.address, registerData.state, registerData.city, registerData.zipCode, registerData.mobile)
    await registerPage.clickOnContinue();
    await registerPage.clickOnDeleteAccount();
    // await page.pause()
  });

  test('Login test', async ({ page, loginPage }) => {
    await expect(page).toHaveTitle(/Automation Exercise/);
    // const loginPage=new LoginPage(page)
    await loginPage.Login()
    await loginPage.userLogin(loginDataset.email, loginDataset.password)

  })

  test("Add to cart", async ({addProductPage }) => {
    // const addProduct= new AddProductToCart(page)
    await addProductPage.getListofProducts()
    await addProductPage.addProductToCart()
    await addProductPage.verifyCartDetails(addToCartDataset.productName, addToCartDataset.productPrice, addToCartDataset.productQuantity, addToCartDataset.totalAmount)
    // await page.pause()
  })

  test("Adding review", async({addReview})=>{
    await addReview.clickOnProduct()
    await addReview.clickOnViewProduct()
    await addReview.addingReview(reviewData.reviewer,reviewData.email,reviewData.comment)

  })

})


