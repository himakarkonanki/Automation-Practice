import { expect, Locator, Page } from "@playwright/test";
import { AddProductToCartLocators } from "./AddProductToCartLocators";

export class AddProductToCart{

    readonly page
    readonly cart: AddProductToCartLocators

    constructor(page:Page){
        this.page=page
        this.cart=new AddProductToCartLocators(page)

    }

    async getListofProducts(){
        const productCount = await this.cart.productDetails.count();
        for(let i=0; i<productCount; i++){
            const product=this.cart.productDetails.nth(i)
            console.log(await product.textContent())
        }
    }

    async addProductToCart(){
        await this.cart.viewProduct.click()
        await this.cart.addToCart.click()
        // this.page.on('dialog', dialog=>dialog.accept)
        await this.cart.viewCart.click()
    }

    async verifyCartDetails(cartProd:string, price:string, quantity:string, amount:string){
        await expect(this.cart.cartProduct.locator(".cart_description h4")).toHaveText(cartProd)
        await expect(this.cart.price).toHaveText(price)
        await expect(this.cart.quantity).toHaveText(quantity)
        await expect(this.cart.totalAmount).toHaveText(amount)
    }
}