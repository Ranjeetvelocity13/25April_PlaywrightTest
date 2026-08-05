# Manual Test Cases — OrangeHRM Login

> Application Under Test (AUT): https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

---

## 1. Module: Login Page UI

### TC_UI_01 — Verify login page page title and branding
- Test Scenario: Confirm the OrangeHRM login page loads with correct branding and title.
- Preconditions: Browser is open.
- Test Steps:
  1. Navigate to `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`.
  2. Observe the page title and branding.
- Expected Result:
  - The page displays the OrangeHRM logo.
  - The page title or header shows **"Login"**.
  - The login form is visible.

### TC_UI_02 — Verify username and password fields are present
- Test Scenario: Confirm the login form fields are displayed.
- Preconditions: Login page is loaded.
- Test Steps:
  1. Open the login page.
  2. Inspect the form fields.
- Expected Result:
  - A **Username** input field is visible.
  - A **Password** input field is visible.
  - Each field has a label or placeholder.

### TC_UI_03 — Verify login button is present and enabled
- Test Scenario: Confirm the Login button is available on the login page.
- Preconditions: Login page is loaded.
- Test Steps:
  1. Open the login page.
  2. Locate the login button.
- Expected Result:
  - A **Login** button is visible.
  - The button is enabled when credentials are entered.

### TC_UI_04 — Verify "Forgot your password?" link is present
- Test Scenario: Confirm the password recovery link is shown.
- Preconditions: Login page is loaded.
- Test Steps:
  1. Open the login page.
  2. Locate the **Forgot your password?** link.
- Expected Result:
  - The password reset link is present and visible.
  - The link text reads **"Forgot your password?"**.

---

## 2. Module: Login Functionality

### TC_LOGIN_01 — Verify successful login with valid credentials
- Test Scenario: Validate that a valid user can log in successfully.
- Preconditions:
  - Login page is displayed.
  - Valid credentials are available.
- Test Steps:
  1. Enter **Username**: `Admin`.
  2. Enter **Password**: `admin123`.
  3. Click the **Login** button.
- Expected Result:
  - The user is redirected to the OrangeHRM dashboard or home page.
  - The dashboard header or welcome banner is displayed.

### TC_LOGIN_02 — Verify login fails with invalid username
- Test Scenario: Validate login is rejected when the username is incorrect.
- Preconditions: Login page is displayed.
- Test Steps:
  1. Enter **Username**: `invalid_user`.
  2. Enter **Password**: `admin123`.
  3. Click the **Login** button.
- Expected Result:
  - Login is blocked.
  - An error message is displayed explaining the credentials are invalid.

### TC_LOGIN_03 — Verify login fails with invalid password
- Test Scenario: Validate login is rejected when the password is incorrect.
- Preconditions: Login page is displayed.
- Test Steps:
  1. Enter **Username**: `Admin`.
  2. Enter **Password**: `wrong_password`.
  3. Click the **Login** button.
- Expected Result:
  - Login is blocked.
  - An error message is displayed explaining the credentials are invalid.

### TC_LOGIN_04 — Verify login fails with blank username
- Test Scenario: Validate login validation when username is empty.
- Preconditions: Login page is displayed.
- Test Steps:
  1. Leave the **Username** field empty.
  2. Enter **Password**: `admin123`.
  3. Click the **Login** button.
- Expected Result:
  - Login is blocked.
  - A validation message indicates the username is required.

### TC_LOGIN_05 — Verify login fails with blank password
- Test Scenario: Validate login validation when password is empty.
- Preconditions: Login page is displayed.
- Test Steps:
  1. Enter **Username**: `Admin`.
  2. Leave the **Password** field empty.
  3. Click the **Login** button.
- Expected Result:
  - Login is blocked.
  - A validation message indicates the password is required.

### TC_LOGIN_06 — Verify login fails when both fields are blank
- Test Scenario: Validate login validation when both credentials are missing.
- Preconditions: Login page is displayed.
- Test Steps:
  1. Leave the **Username** field empty.
  2. Leave the **Password** field empty.
  3. Click the **Login** button.
- Expected Result:
  - Login is blocked.
  - Validation messages indicate username and password are required.

### TC_LOGIN_07 — Verify password field masks input
- Test Scenario: Confirm the password field hides the entered characters.
- Preconditions: Login page is displayed.
- Test Steps:
  1. Enter any text into the **Password** field.
  2. Observe the characters displayed in the field.
- Expected Result:
  - The password input is masked (e.g., bullets or dots, not plain text).

---

## 3. Module: Forgot Password

### TC_FORGOTPASS_01 — Verify forgot password navigation
- Test Scenario: Confirm the forgot password link navigates to the recovery page.
- Preconditions: Login page is displayed.
- Test Steps:
  1. Click the **Forgot your password?** link.
- Expected Result:
  - The application navigates to the password recovery page.
  - The recovery page displays instructions for resetting the password.

### TC_FORGOTPASS_02 — Verify password recovery field is present
- Test Scenario: Confirm the forgot password page includes a username/email field.
- Preconditions: Forgot password page is displayed.
- Test Steps:
  1. Open the forgot password page.
  2. Inspect the recovery form fields.
- Expected Result:
  - A field to enter the username or email is visible.
  - A button to submit the recovery request is visible.

### TC_FORGOTPASS_03 — Verify navigation back to login from recovery page
- Test Scenario: Confirm the user can return to the login screen from the password recovery page.
- Preconditions: Forgot password page is displayed.
- Test Steps:
  1. Click the navigation element or back link to return to login.
- Expected Result:
  - The user is returned to the login page.
  - The login form is displayed again.

---

## 4. Module: Security & Session

### TC_SECURITY_01 — Verify secure login form submission
- Test Scenario: Confirm the login page uses HTTPS for secure form submission.
- Preconditions: Login page is loaded.
- Test Steps:
  1. Inspect the URL scheme in the browser address bar.
  2. Submit valid credentials.
- Expected Result:
  - The page URL begins with `https://`.
  - Credentials are submitted securely over HTTPS.

### TC_SECURITY_02 — Verify session persists after successful login
- Test Scenario: Confirm user remains logged in after landing on the dashboard.
- Preconditions: User logs in successfully.
- Test Steps:
  1. Complete a successful login.
  2. Verify the user sees the dashboard.
  3. Refresh the browser.
- Expected Result:
  - The user remains on the dashboard.
  - Session is preserved until logout.

### TC_SECURITY_03 — Verify logout returns to login page
- Test Scenario: Confirm logout clears the session and returns to login.
- Preconditions: User is logged in.
- Test Steps:
  1. Log in successfully.
  2. Use the application logout functionality.
- Expected Result:
  - The user is returned to the login page.
  - The login form is displayed.

---

## 5. Module: End-to-End Login Journey

### TC_E2E_01 — Verify end-to-end OrangeHRM login and dashboard access
- Test Scenario: Validate that a user can log in with valid credentials and reach the dashboard successfully.
- Preconditions:
  - Browser is open.
  - User can access `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`.
- Test Steps:
  1. Navigate to `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`.
  2. Enter **Username**: `Admin`.
  3. Enter **Password**: `admin123`.
  4. Click the **Login** button.
  5. Wait for the dashboard page to load.
- Expected Result:
  - The user is redirected to the dashboard page.
  - The dashboard shows a welcome message or top navigation bar indicating the user is logged in.
  - The user can see core dashboard elements such as **Quick Launch**, **Performance**, or **Time at Work**.

## Notes
- Use the default OrangeHRM demo credentials: **Username** `Admin`, **Password** `admin123`.
- Confirm any error message text exactly matches the application output.
- Run tests on the latest supported browser versions for accurate UI verification.

