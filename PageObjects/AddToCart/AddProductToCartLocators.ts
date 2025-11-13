import { Locator, Page } from "@playwright/test";

export class AddProductToCartLocators{
    
    readonly productDetails:Locator;
    readonly viewProduct:Locator;
    readonly addToCart:Locator;
    readonly viewCart:Locator;
    readonly cartProduct:Locator;
    readonly price:Locator;
    readonly quantity:Locator;
    readonly totalAmount:Locator;

    constructor(page:Page){
        this.productDetails=page.locator(".col-sm-4")
        this.viewProduct=page.locator(".col-sm-4").filter({hasText:"Green Side Placket Detail T-Shirt"}).getByText("View Product")
        this.addToCart=page.getByRole("button",{name:'Add to cart'})
        this.viewCart = page.getByRole("link", { name: "View Cart" });
        this.cartProduct=page.locator("#product-29")
        this.price=page.locator(".cart_price p")
        this.quantity=page.locator(".cart_quantity .disabled")
        this.totalAmount=page.locator(".cart_total .cart_total_price")
    }
}