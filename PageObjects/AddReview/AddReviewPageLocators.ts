import { Locator, Page } from "@playwright/test";

export class AddReviewPageLocators{

        readonly product:Locator;
        readonly viewProduct:Locator;
        readonly reviewerName:Locator;
        readonly reviewerEmail:Locator;
        readonly reviewText:Locator;

        constructor(page:Page){
            this.product=page.locator('a').filter({hasText:"Products"})
            this.viewProduct=page.locator(".col-sm-4").filter({hasText:"Green Side Placket Detail T-Shirt"}).getByText("View Product")
            this.reviewerName=page.getByPlaceholder("Your Name")
            this.reviewerEmail=page.locator("#email")
            this.reviewText=page.getByPlaceholder("Add Review Here!")
        }
}