import { Locator, Page } from "@playwright/test";

export class LoginPageLocators{

    readonly signInLocator:Locator
    readonly emailAddress:Locator;
    readonly password:Locator;
    readonly loginButton:Locator;

    constructor(page:Page){
        this.signInLocator=page.locator('a').filter({hasText:" Signup / Login"})
        this.emailAddress=page.getByPlaceholder("Email Address").first()
        this.password=page.getByPlaceholder("Password")
        this.loginButton=page.getByRole('button', {name:'Login'})
    }
}