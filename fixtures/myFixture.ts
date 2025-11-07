import {test as base} from "@playwright/test"
import { RegisterUser } from '../PageObjects/RegisterUser';
import { LoginPage } from '../PageObjects/LoginPage';
import { AddProductToCart } from '../PageObjects/AddProductToCart';

type basePages={
    registerPage:RegisterUser
    loginPage:LoginPage
    addProductPage:AddProductToCart
}

const testFixture=base.extend<basePages>({

    page:async({page},use)=>{
         await page.goto('https://automationexercise.com/');
         await use(page)
    },

    registerPage:async({page},use)=>{
        await use(new RegisterUser(page))
    },

    loginPage:async({page},use)=>{
        await use(new LoginPage(page))
    },

    addProductPage:async({page},use)=>{
        await use(new AddProductToCart(page))
    }
})

export const test= testFixture
export const expect= testFixture.expect