import BasePage from "./BasePage";
import Logger from "../utils/Logger.js";

class InventoryPage extends BasePage {

    // Store inventory page locators for product and cart actions.
    constructor(page) {
        super(page);

        this.inventoryTitle = page.locator('.title');
        this.cartLink = page.locator('.shopping_cart_link');
    }


    // Add a specific product to the cart by locating its item card.
    async addProductToCart(productName) {
        Logger.step(1, `Adding product to cart: ${productName}`);
        const addToCartButton = this.page.locator(`//div[contains(text(),'${productName}')]/ancestor::div[@class="inventory_item_description"]//button`);
        await this.click(addToCartButton);
        Logger.info(`Product added to cart: ${productName}`);
    }

    // Open the cart page from the inventory page.
    async openCart() {
        Logger.step(2, 'Opening cart from inventory page');
        await this.click(this.cartLink);
        Logger.info('Cart page opened');
    }

    // Confirm that the inventory page heading is visible.
    async isLoaded() {
        Logger.step(3, 'Checking whether inventory page is loaded');
        const loaded = await this.inventoryTitle.isVisible();
        Logger.info(`Inventory page loaded status: ${loaded}`);
        return loaded;
    }
}


export default InventoryPage;
