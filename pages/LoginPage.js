import BasePage from "./BasePage";
import { ROUTES } from "../utils/constants";
import Logger from "../utils/Logger.js";

class LoginPage extends BasePage {

    // Store reusable login locators for the page object.
    constructor(page) {

        super(page);

        //Locators - not in the test
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.locator("#password");
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator("[data-test='error']");
    }

    // Open the login page using the configured route.
    async open() {
        Logger.step(1, 'Opening Login page');
        await this.goto(ROUTES.LOGIN);
        Logger.info('Login page opened successfully');
    }

    // Complete the login flow by entering credentials and submitting.
    async login(username, passowrd) {
        Logger.step(2, 'Performing login flow');
        Logger.step(3, 'Performing  DashBoard flow');

        try {
            await this.fill(this.usernameInput, username);
            await this.fill(this.passwordInput, passowrd);
            await this.click(this.loginButton);
            Logger.info('Login submission completed');
        } catch (error) {
            Logger.error(`Login failed: ${error}`);
            throw error;
        }
    }
}

export default LoginPage;

