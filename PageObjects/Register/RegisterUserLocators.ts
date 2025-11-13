import { Locator, Page } from "@playwright/test";

export class RegisterUserLocators {

    readonly signInLocator: Locator;
    readonly nameLocator: Locator;
    readonly emailLocator: Locator;
    readonly signUpButton: Locator;
    readonly titleCheckBox: Locator;
    readonly password: Locator;
    readonly selectDay: Locator;
    readonly selectMonth: Locator;
    readonly selectYear: Locator;
    readonly newsLetterCheckBox: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly address: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipCode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccount: Locator;
    readonly accountCreatedText: Locator;
    readonly continueButton: Locator;
    readonly deleteButton: Locator;

    constructor(page: Page) {
        this.signInLocator = page.locator('a').filter({ hasText: " Signup / Login" })
        this.nameLocator = page.getByPlaceholder('Name')
        this.emailLocator = page.getByPlaceholder('Email Address').nth(1)
        this.signUpButton = page.getByRole('button', { name: 'Signup' })
        this.titleCheckBox = page.getByLabel("Mr.")
        this.password = page.getByLabel("Password ")
        this.selectDay = page.locator('#days')
        this.selectMonth = page.locator('#months')
        this.selectYear = page.locator('#years')
        this.newsLetterCheckBox = page.getByRole("checkbox", { name: 'newsletter' })
        this.firstName = page.getByLabel('First name')
        this.lastName = page.getByLabel('Last name')
        this.company = page.locator('#company')
        this.address = page.locator('#address1')
        this.state = page.getByLabel('State')
        this.city = page.locator('#city')
        this.zipCode = page.locator('#zipcode')
        this.mobileNumber = page.getByLabel('Mobile Number')
        this.createAccount = page.getByRole('button', { name: 'Create Account' })
        this.accountCreatedText = page.locator(".title.text-center b")
        this.continueButton = page.getByRole('link', { name: "Continue" })
        this.deleteButton = page.getByText('Delete Account')
    }
}