# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadrivern.spec.js >> Login Test - lockedOut
- Location: tests/datadrivern.spec.js:16:10

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('[data-test=\'error\']')
Expected: "Epic sadface: Sorry, this user has been out."
Received: "Epic sadface: Sorry, this user has been locked out."
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('[data-test=\'error\']')
    14 × locator resolved to <h3 data-test="error">…</h3>
       - unexpected value "Epic sadface: Sorry, this user has been locked out."

```

```yaml
- 'heading "Epic sadface: Sorry, this user has been locked out." [level=3]':
  - button
  - text: "Epic sadface: Sorry, this user has been locked out."
```

```
ReferenceError: logger is not defined
```

# Test source

```ts
  1  | import { test as base, expect } from "@playwright/test"
  2  | import LoginPage from "../pages/LoginPage";
  3  | import InventoryPage from "../pages/InventoryPage"
  4  | import CartPage from "../pages/CartPage";
  5  | import Logger from "../utils/Logger.js";
  6  | 
  7  | const test = base.extend({
  8  | 
  9  |     loginPage: async ({ page }, use) => {
  10 |         await use((new LoginPage(page)))
  11 |     },
  12 |     inventoryPage: async ({ page }, use) => {
  13 |         await use(new InventoryPage(page))
  14 |     },
  15 | 
  16 |     loggedInPage: async ({ page }, use) => {
  17 | 
  18 |         const loginPage = new LoginPage(page);
  19 |         await loginPage.open();
  20 |         await loginPage.login("standard_user", 'secret_sauce');
  21 |         await page.waitForURL(/inventory/);
  22 |         await use(page);
  23 | 
  24 |     }
  25 | })
  26 | 
  27 | /**
  28 |  * Global afterEach hook.
  29 |  * On failure, capture a full-page screenshot and attach it to the report
  30 |  * (Allure / HTML) so debugging a failed run doesn't require re-running it.
  31 |  */
  32 | test.afterEach(async ({ page }, testInfo) => {
  33 |     if (testInfo.status !== testInfo.expectedStatus) {
> 34 |         logger.warn(`Test failed: "${testInfo.title}" — attaching screenshot`);
     |         ^ ReferenceError: logger is not defined
  35 |         try {
  36 |             const screenshot = await page.screenshot({ fullPage: true });
  37 |             await testInfo.attach('failure-screenshot', {
  38 |                 body: screenshot,
  39 |                 contentType: 'image/png',
  40 |             });
  41 |         } catch (error) {
  42 |             logger.error(`Could not capture failure screenshot: ${error.message}`);
  43 |         }
  44 |     }
  45 | });
  46 | export { test, expect };
  47 | 
  48 | 
```