import { test, expect } from "../fixtures/baseFixture";
import { readJSON } from "../utils/dataReader.js";
import env from "../config/env.config.js";
import InventoryPage from "../pages/InventoryPage.js";
const users = readJSON("users.json");

const allusers = Object.entries(users);

for (const userData of allusers) {

    const key = userData[0];
    console.log(key)
    const user = userData[1];
    console.log(user);

    test.only(`Login Test - ${key}`, async ({ page, loginPage, inventoryPage }) => {

        await loginPage.open();
        await loginPage.login(user.username, env.password);

        if (user.canLogin) {
            expect(await inventoryPage.isLoaded()).toBeTruthy();
        }
        else {
            await expect(loginPage.errorMessage).toHaveText(user.errorMessage);
        }
    })
}