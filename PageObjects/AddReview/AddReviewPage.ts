import { Page } from "@playwright/test"
import { AddReviewPageLocators } from "./AddReviewPageLocators"

export class AddReviewPage{

    readonly page
    readonly reviewPageLocator:AddReviewPageLocators
 

    constructor(page:Page){
        this.page=page
        this.reviewPageLocator = new AddReviewPageLocators(page)
       
    }

    async clickOnProduct(){
        await this.reviewPageLocator.product.click()
    }

    async clickOnViewProduct(){
        await this.reviewPageLocator.viewProduct.click()
    }

    async addingReview(name:string, email:string, reviewText:string){
        await this.reviewPageLocator.reviewerName.fill(name)
        await this.reviewPageLocator.reviewerEmail.fill(email)
        await this.reviewPageLocator.reviewText.fill(reviewText)
    }
}