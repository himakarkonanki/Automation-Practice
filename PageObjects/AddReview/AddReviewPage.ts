import { Page } from "@playwright/test"

export class AddReviewPage{

    readonly page
    readonly product;
    readonly viewProduct;
    readonly reviewerName;
    readonly reviewerEmail;
    readonly reviewText;

    constructor(page:Page){

        this.page=page
        this.product=page.locator('a').filter({hasText:"Products"})
        this.viewProduct=page.locator(".col-sm-4").filter({hasText:"Green Side Placket Detail T-Shirt"}).getByText("View Product")
        this.reviewerName=page.getByPlaceholder("Your Name")
        this.reviewerEmail=page.locator("#email")
        this.reviewText=page.getByPlaceholder("Add Review Here!")
    }

    async clickOnProduct(){
        await this.product.click()
    }

    async clickOnViewProduct(){
        await this.viewProduct.click()
    }

    async addingReview(name:string, email:string, reviewText:string){
        await this.reviewerName.fill(name)
        await this.reviewerEmail.fill(email)
        await this.reviewText.fill(reviewText)
    }
}