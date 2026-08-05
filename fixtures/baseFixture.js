import { test as base, expect } from "@playwright/test"
import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage"
import CartPage from "../pages/CartPage";
import Logger from "../utils/Logger.js";

const test = base.extend({

    loginPage: async ({ page }, use) => {
        await use((new LoginPage(page)))
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page))
    },

    loggedInPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login("standard_user", 'secret_sauce');
        await page.waitForURL(/inventory/);
        await use(page);

    }
})

/**
 * Global afterEach hook.
 * On failure, capture a full-page screenshot and attach it to the report
 * (Allure / HTML) so debugging a failed run doesn't require re-running it.
 */
test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        logger.warn(`Test failed: "${testInfo.title}" — attaching screenshot`);
        try {
            const screenshot = await page.screenshot({ fullPage: true });
            await testInfo.attach('failure-screenshot', {
                body: screenshot,
                contentType: 'image/png',
            });
        } catch (error) {
            logger.error(`Could not capture failure screenshot: ${error.message}`);
        }
    }
});
export { test, expect };

