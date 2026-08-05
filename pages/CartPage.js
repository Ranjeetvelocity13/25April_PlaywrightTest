import BasePage from "./BasePage";
import { ROUTES, TITLES } from "../utils/constants";
import Logger from "../utils/Logger.js";

class CartPage extends BasePage {

    // Store cart-related locators for checkout and item checks.
    constructor(page) {
        super(page);

        this.pageTitle = page.locator('.title');
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
    }

    // Open the cart route.
    async open() {
        Logger.step(1, 'Opening cart page');
        await this.goto(ROUTES.CART);
        Logger.info('Cart page opened successfully');
    }

    // Verify the cart page title matches the expected checkout page state.
    async isLoaded() {
        Logger.step(2, 'Checking whether cart page is loaded');
        const title = await this.getText(this.pageTitle);
        const loaded = title === TITLES.YOUR_CART;
        Logger.info(`Cart page loaded status: ${loaded}`);
        return loaded;
    }

    // Click the checkout button to continue the purchase flow.
    async checkout() {
        Logger.step(3, 'Proceeding to checkout');
        await this.click(this.checkoutButton);
        Logger.info('Checkout button clicked');
    }

    // Read the number of cart items currently visible.
    async getCartItemCount() {
        Logger.step(4, 'Reading cart item count');
        const count = await this.cartItems.count();
        Logger.info(`Cart item count: ${count}`);
        return count;
    }
}

export default CartPage;
