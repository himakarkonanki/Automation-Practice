import { expect, Page } from "@playwright/test";

export class RegisterUser {

    readonly signInLocator;
    readonly nameLocator;
    readonly emailLocator;
    readonly signUpButton;
    readonly titleCheckBox;
    readonly password;
    readonly selectDay;
    readonly selectMonth;
    readonly selectYear;
    readonly newsLetterCheckBox;
    readonly firstName;
    readonly lastName;
    readonly company;
    readonly address;
    readonly state;
    readonly city;
    readonly zipCode;
    readonly mobileNumber;
    readonly createAccount;
    readonly accountCreatedText;
    readonly continueButton;
    readonly deleteButton;

    constructor(page:Page){
        this.signInLocator=page.locator('a').filter({hasText:" Signup / Login"})
        this.nameLocator=page.getByPlaceholder('Name')
        this.emailLocator=page.getByPlaceholder('Email Address').nth(1)
        this.signUpButton=page.getByRole('button', {name: 'Signup'})
        this.titleCheckBox=page.getByLabel("Mr.")
        this.password=page.getByLabel("Password ")
        this.selectDay=page.locator('#days')
        this.selectMonth=page.locator('#months')
        this.selectYear=page.locator('#years')
        this.newsLetterCheckBox=page.getByRole("checkbox", {name:'newsletter'})
        this.firstName=page.getByLabel('First name')
        this.lastName=page.getByLabel('Last name')
        this.company=page.locator('#company')
        this.address =page.locator('#address1')
        this.state=page.getByLabel('State')
        this.city=page.locator('#city')
        this.zipCode=page.locator('#zipcode')
        this.mobileNumber=page.getByLabel('Mobile Number')
        this.createAccount=page.getByRole('button',{name:'Create Account'})
        this.accountCreatedText=page.locator(".title.text-center b")
        this.continueButton=page.getByRole('link',{name:"Continue"})
        this.deleteButton=page.getByText('Delete Account')
    }

    async Register(){
        await this.signInLocator.click()
    }

    async enterDetails(name:string, email:string):Promise<void>{
        await this.nameLocator.fill(name)
        await this.emailLocator.fill(email)
        await this.signUpButton.click()
    }

    async enterAccountInfo(pass:string, fName:string, lName:string, companyName:string, add:string, stateName:string, cityName:string, zip:string, mobile:string){
        await this.titleCheckBox.check()
        await this.password.fill(pass)
        await this.selectDay.selectOption({value:'6'})
        await this.selectMonth.selectOption({label:'September'})
        await this.selectYear.selectOption({value:'1999'})
        await this.newsLetterCheckBox.click()
        await this.firstName.fill(fName)
        await this.lastName.fill(lName)
        await this.company.fill(companyName)
        await this.address.fill(add)
        await this.state.fill(stateName)
        await this.city.fill(cityName)
        await this.zipCode.fill(zip)
        await this.mobileNumber.fill(mobile)
        await this.createAccount.click()
    }

    async clickOnContinue(){
        await expect(this.accountCreatedText).toHaveText("Account Created!")
        await this.continueButton.click()
    }

    async clickOnDeleteAccount(){
        await this.deleteButton.click()
        await this.continueButton.click()
    }


}