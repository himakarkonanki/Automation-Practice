import { Page } from "@playwright/test";
import { LoginPageLocators } from "./LoginPageLocators";


export class LoginPage{

    readonly page;
    readonly loginPage:LoginPageLocators

    constructor(page:Page){
        this.page=page
        this.loginPage = new LoginPageLocators(page)
    }

    async Login(){
        await this.loginPage.signInLocator.click()
        
    }
    async userLogin(email:string, pass:string){
        await this.loginPage.emailAddress.fill(email)
        await this.loginPage.password.fill(pass)
        await this.loginPage.loginButton.click()
    }

    

}