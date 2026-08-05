import Logger from "../utils/Logger.js";

class BasePage {

    // Initialize the page object with the Playwright page instance.
    constructor(page) {
        this.page = page;
        Logger.info(`BasePage initialized for page: ${page.url()}`);
    }

    // Navigate the browser to a given path.
    async goto(path = '/') {
        Logger.step(1, `Navigating to: ${path}`);
        await this.page.goto(path);
        Logger.info(`Navigation completed to: ${path}`);
    }

    // Click a visible locator.
    async click(locator) {
        Logger.step(2, 'Clicking locator');
        await locator.waitFor({ 'state': 'visible' });
        await locator.click();
        Logger.info('Click action completed successfully');
    }

    // Fill a visible input field with the provided text.
    async fill(locator, text) {
        Logger.step(3, `Filling locator with provided text`);
        await locator.waitFor({ 'state': 'visible' });
        await locator.fill(text);
        Logger.info('Fill action completed successfully');
    }

    // Read the visible text content from a locator.
    async getText(locator) {
        Logger.step(4, 'Reading text from locator');
        await locator.waitFor({ 'state': 'visible' });
        const text = await locator.innerText();
        Logger.info(`Text retrieved: ${text}`);
        return text;
    }

    // Wait until a locator becomes visible on the page.
    async waitForVisible(locator) {
        Logger.step(5, 'Waiting for locator visibility');
        await locator.waitFor({ state: "visible" });
        Logger.info('Locator became visible');
    }
}

export default BasePage;


//STEP 1 - RAW Test - Without Framework - spec.js
//STPE 2 -  Page object model (POM) - Move locators out of test
//STEP 3 -  10 Page classes. - 
//STEP 4 - BASEPAGE : Stop repating actions - extends - other page classes
//STEP 5 - Constants - String comp 
//STEP 6 - Configuration  - Hardcoded url &user , diff env
//STEP 7 - Fixture - Automatic setup 
//STEP 8 - Uitlites - logger.js
//STEP 9 - Data driven testing

