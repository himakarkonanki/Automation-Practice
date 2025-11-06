import { Page } from "@playwright/test";


export class LoginPage{

    readonly page;
    readonly signInLocator
    readonly emailAddress;
    readonly password;
    readonly loginButton;
   

    constructor(page:Page){
        this.page=page
        this.signInLocator=page.locator('a').filter({hasText:" Signup / Login"})
        this.emailAddress=page.getByPlaceholder("Email Address").first()
        this.password=page.getByPlaceholder("Password")
        this.loginButton=page.getByRole('button', {name:'Login'})
    }

    async Login(){
        await this.signInLocator.click()
        
    }
    async userLogin(email:string, pass:string){
        await this.emailAddress.fill(email)
        await this.password.fill(pass)
        await this.loginButton.click()
    }

    

}