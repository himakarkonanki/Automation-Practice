import { expect, Page } from "@playwright/test";
import { RegisterUserLocators } from "./RegisterUserLocators";

export class RegisterUser {

    readonly page
    readonly register:RegisterUserLocators

    constructor(page:Page){
      this.page=page
      this.register=new RegisterUserLocators(page)
    }

    async Register(){
        await this.register.signInLocator.click()
    }

    async enterDetails(name:string, email:string):Promise<void>{
        await this.register.nameLocator.fill(name)
        await this.register.emailLocator.fill(email)
        await this.register.signUpButton.click()
    }

    async enterAccountInfo(pass:string, fName:string, lName:string, companyName:string, add:string, stateName:string, cityName:string, zip:string, mobile:string){
        await this.register.titleCheckBox.check()
        await this.register.password.fill(pass)
        await this.register.selectDay.selectOption({value:'6'})
        await this.register.selectMonth.selectOption({label:'September'})
        await this.register.selectYear.selectOption({value:'1999'})
        await this.register.newsLetterCheckBox.click()
        await this.register.firstName.fill(fName)
        await this.register.lastName.fill(lName)
        await this.register.company.fill(companyName)
        await this.register.address.fill(add)
        await this.register.state.fill(stateName)
        await this.register.city.fill(cityName)
        await this.register.zipCode.fill(zip)
        await this.register.mobileNumber.fill(mobile)
        await this.register.createAccount.click()
    }

    async clickOnContinue(){
        await expect(this.register.accountCreatedText).toHaveText("Account Created!")
        await this.register.continueButton.click()
    }

    async clickOnDeleteAccount(){
        await this.register.deleteButton.click()
        await this.register.continueButton.click()
    }


}