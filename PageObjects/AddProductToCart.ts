import { expect, Page } from "@playwright/test";

export class AddProductToCart{

    readonly page
    readonly productDetails;
    readonly viewProduct;
    readonly addToCart;
    readonly viewCart;
    readonly cartProduct;
    readonly price;
    readonly quantity;
    readonly totalAmount;

    constructor(page:Page){
        this.page=page
        this.productDetails=page.locator(".col-sm-4")
        this.viewProduct=page.locator(".col-sm-4").filter({hasText:"Green Side Placket Detail T-Shirt"}).getByText("View Product")
        this.addToCart=page.getByRole("button",{name:'Add to cart'})
        this.viewCart = page.getByRole("link", { name: "View Cart" });
        this.cartProduct=page.locator("#product-29")
        this.price=page.locator(".cart_price p")
        this.quantity=page.locator(".cart_quantity .disabled")
        this.totalAmount=page.locator(".cart_total .cart_total_price")

    }

    async getListofProducts(){
        const productCount = await this.productDetails.count();
        for(let i=0; i<productCount; i++){
            const product=this.productDetails.nth(i)
            console.log(await product.textContent())
        }
    }

    async addProductToCart(){
        await this.viewProduct.click()
        await this.addToCart.click()
        // this.page.on('dialog', dialog=>dialog.accept)
        await this.viewCart.click()
    }

    async verifyCartDetails(cartProd:string, price:string, quantity:string, amount:string){
        await expect(this.cartProduct.locator(".cart_description h4")).toHaveText(cartProd)
        await expect(this.price).toHaveText(price)
        await expect(this.quantity).toHaveText(quantity)
        await expect(this.totalAmount).toHaveText(amount)
    }
}