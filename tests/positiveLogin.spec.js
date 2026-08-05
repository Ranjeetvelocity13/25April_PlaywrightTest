//https://www.saucedemo.com/

//Login -- see Prodcuts -- Add to cart -- Checkout --> Order complete

// import { test, expect } from "@playwright/test";
import { test, expect } from '../fixtures/baseFixture'
import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import Logger from "../utils/Logger.js";
import { loggers } from 'winston';

test("Valid use can log in", async ({ loginPage, inventoryPage }) => {

    Logger.testStart("Valid use can log in");
    Logger.step(1, "Starting login validation test");

    await loginPage.open();
    await loginPage.login("standard_user", 'secret_sauce');
    expect(await inventoryPage.isLoaded()).toBeTruthy();

    Logger.step(2, "Login validation completed successfully");
    Logger.testPass("Valid use can log in");

})

test("Valid user can log in with", async ({ page, loggedInPage, inventoryPage }) => {

    Logger.testStart("Valid user can log in with");
    Logger.step(1, "Adding Sauce Labs Backpack to cart");

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await page.waitForTimeout(5000);

    Logger.step(2, "Cart action completed");
    Logger.testPass("Valid user can log in with");

})

test.skip("Failure Check", async () => {

    Logger.testStart("Failure check");
    Logger.step(1, "Executing failing assertion");
    expect(1).toBe(2);

})
