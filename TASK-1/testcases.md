# SauceDemo - Manual Test Cases

## Test Scope

The following features are covered:

- FEAT-AUTH - Authentication & Session Management
- FEAT-CATALOG - Product Catalog & Discovery
- FEAT-CART - Cart & Badge Management
- FEAT-CHK - Checkout Flow & Order Processing
- FEAT-NAV - Navigation & System UI


# FEAT-AUTH - Authentication & Session Management

### TC-AUTH-001 - Login with valid credentials

- **Test Case ID:** TC-AUTH-001
- **Feature:** FEAT-AUTH
- **Test Scenario / Description:** Check whether the user can log in with valid credentials.
- **Pre-conditions:** User is on the SauceDemo login page.
- **Execution Steps:**
  1. Enter 'standard_user' in the Username field.
  2. Enter the valid password in the Password field.
  3. Click Login.
- **Expected Result:** User should be logged in successfully and the Products page should be displayed.

### TC-AUTH-002 - Login with invalid username

- **Test Case ID:** TC-AUTH-002
- **Feature:** FEAT-AUTH
- **Test Scenario / Description:** Check whether login is prevented when an invalid username is entered.
- **Pre-conditions:** User is on the login page.
- **Execution Steps:**
  1. Enter an invalid username.
  2. Enter a valid password.
  3. Click Login.
- **Expected Result:** Login should fail and the error message should be displayed.

### TC-AUTH-003 - Login with invalid password

- **Test Case ID:** TC-AUTH-003
- **Feature:** FEAT-AUTH
- **Test Scenario / Description:** Check whether login is prevented when an incorrect password is entered.
- **Pre-conditions:** User is on the login page.
- **Execution Steps:**
  1. Enter a valid username.
  2. Enter an incorrect password.
  3. Click Login.
- **Expected Result:** Login should fail and the user should remain on the login page.

### TC-AUTH-004 - Login with both fields empty

- **Test Case ID:** TC-AUTH-004
- **Feature:** FEAT-AUTH
- **Test Scenario / Description:** Check login behavior when username and password are not entered in the fields.
- **Pre-conditions:** User is on the login page.
- **Execution Steps:**
  1. Leave Username empty.
  2. Leave Password empty.
  3. Click Login.
- **Expected Result:** Login should not proceed and a required field message should be displayed.

### TC-AUTH-005 - Login with empty username

- **Test Case ID:** TC-AUTH-005
- **Feature:** FEAT-AUTH
- **Test Scenario / Description:** Check whether login is prevented when the username is empty.
- **Pre-conditions:** User is on the login page.
- **Execution Steps:**
  1. Leave the username field empty.
  2. Enter the valid password.
  3. Click Login.
- **Expected Result:** Login should not proceed and a username required message should be displayed.

### TC-AUTH-006 - Login with empty password

- **Test Case ID:** TC-AUTH-006
- **Feature:** FEAT-AUTH
- **Test Scenario / Description:** Check whether login is prevented when the password is empty.
- **Pre-conditions:** User is on the login page.
- **Execution Steps:**
  1. Enter a valid username.
  2. Leave Password empty.
  3. Click Login.
- **Expected Result:** Login should not proceed and a password required message should be displayed.


### TC-AUTH-007 - Password should be masked

- **Test Case ID:** TC-AUTH-007
- **Feature:** FEAT-AUTH
- **Test Scenario / Description:** Check whether the password is hidden while entering it.
- **Pre-conditions:** User is on the login page.
- **Execution Steps:**
  1. Click the Password field.
  2. Enter a password.
- **Expected Result:** Password characters should be displayed in masked form.

### TC-AUTH-008 - Logout from the application

- **Test Case ID:** TC-AUTH-008
- **Feature:** FEAT-AUTH
- **Test Scenario / Description:** Check whether a logged-in user can logout successfully.
- **Pre-conditions:** User is logged in and on the Products page.
- **Execution Steps:**
  1. Open the menu.
  2. Click Logout.
- **Expected Result:** User should be logged out and redirected to the login page.

### TC-AUTH-009 - Verify login page after logout

- **Test Case ID:** TC-AUTH-009
- **Feature:** FEAT-AUTH
- **Test Scenario / Description:** Check whether the user is taken back to the login page after logout.
- **Pre-conditions:** User is logged in.
- **Execution Steps:**
  1. Open the application menu.
  2. Click Logout.
- **Expected Result:** The login page should be displayed with the username and password fields.

# FEAT-CATALOG - Product Catalog & Discovery

### TC-CATALOG-001 - Verify products are displayed

- **Test Case ID:** TC-CATALOG-001
- **Feature:** FEAT-CATALOG
- **Test Scenario / Description:** Check whether products are displayed on the Products page.
- **Pre-conditions:** User is logged in successfully.
- **Execution Steps:**
  1. Open the Products page.
  2. Observe the available products.
- **Expected Result:** Products should be displayed with the product information.

### TC-CATALOG-002 - Verify product information

- **Test Case ID:** TC-CATALOG-002
- **Feature:** FEAT-CATALOG
- **Test Scenario / Description:** Check whether product name, description, image and price are displayed.
- **Pre-conditions:** User is on the Products page.
- **Execution Steps:**
  1. Select any product.
  2. Check the name, description, image and price of the selected product.
- **Expected Result:** All product information should be displayed correctly.

### TC-CATALOG-003 - Open product details

- **Test Case ID:** TC-CATALOG-003
- **Feature:** FEAT-CATALOG
- **Test Scenario / Description:** Check whether a product details page can be opened.
- **Pre-conditions:** User is on the Products page.
- **Execution Steps:**
  1. Click on a product name.
- **Expected Result:** The selected product details should be displayed.

### TC-CATALOG-004 - Verify product details match

- **Test Case ID:** TC-CATALOG-004
- **Feature:** FEAT-CATALOG
- **Test Scenario / Description:** Check whether the product details match the product selected from the Products page.
- **Pre-conditions:** User is on the Products page.
- **Execution Steps:**
  1. Note the name and price of a product.
  2. Open the product details.
  3. Compare the displayed information.
- **Expected Result:** Product name and price should match the selected product.

### TC-CATALOG-005 - Sort products A to Z

- **Test Case ID:** TC-CATALOG-005
- **Feature:** FEAT-CATALOG
- **Test Scenario / Description:** Check whether products can be sorted alphabetically from A to Z.
- **Pre-conditions:** User is on the Products page.
- **Execution Steps:**
  1. Open the sort dropdown.
  2. Select Name (A to Z).
- **Expected Result:** Products should be displayed in alphabetical order from A to Z.

### TC-CATALOG-006 - Sort products Z to A

- **Test Case ID:** TC-CATALOG-006
- **Feature:** FEAT-CATALOG
- **Test Scenario / Description:** Check whether products can be sorted alphabetically from Z to A.
- **Pre-conditions:** User is on the Products page.
- **Execution Steps:**
  1. Open the sort dropdown.
  2. Select Name (Z to A).
- **Expected Result:** Products should be displayed in reverse alphabetical order.

### TC-CATALOG-007 - Sort products by low to high price

- **Test Case ID:** TC-CATALOG-007
- **Feature:** FEAT-CATALOG
- **Test Scenario / Description:** Check whether products are sorted from the lowest price to the highest price.
- **Pre-conditions:** User is on the Products page.
- **Execution Steps:**
  1. Open the sort dropdown.
  2. Select Price (low to high).
  3. Check the prices from top to bottom.
- **Expected Result:** Products should be displayed in ascending order of price.

### TC-CATALOG-008 - Sort products by high to low price

- **Test Case ID:** TC-CATALOG-008
- **Feature:** FEAT-CATALOG
- **Test Scenario / Description:** Check whether products are sorted from the highest price to the lowest price.
- **Pre-conditions:** User is on the Products page.
- **Execution Steps:**
  1. Open the sort dropdown.
  2. Select Price (high to low).
  3. Check the prices from top to bottom.
- **Expected Result:** Products should be displayed in descending order of price.

### TC-CATALOG-009 - Change sorting option multiple times

- **Test Case ID:** TC-CATALOG-009
- **Feature:** FEAT-CATALOG
- **Test Scenario / Description:** Check whether the product list updates correctly when different sorting options are selected one after another.
- **Pre-conditions:** User is on the Products page.
- **Execution Steps:**
  1. Select Name (A to Z).
  2. Check the product order.
  3. Select Price (low to high).
  4. Check the product order.
  5. Select Price (high to low).
- **Expected Result:** The product list should update correctly according to each selected sorting option.

### TC-CATALOG-010 - Verify sort option remains selected

- **Test Case ID:** TC-CATALOG-010
- **Feature:** FEAT-CATALOG
- **Test Scenario / Description:** Check whether the selected sorting option is shown in the sort dropdown.
- **Pre-conditions:** User is on the Products page.
- **Execution Steps:**
  1. Open the sort dropdown.
  2. Select Price (low to high).
  3. Open the dropdown again.
- **Expected Result:** Price (low to high) should be shown as the selected option.

# FEAT-CART - Cart & Badge Management

### TC-CART-001 - Add a product to cart

- **Test Case ID:** TC-CART-001
- **Feature:** FEAT-CART
- **Test Scenario / Description:** Check whether a product can be added to the cart.
- **Pre-conditions:** User is logged in and the cart is empty.
- **Execution Steps:**
  1. Select a product.
  2. Click Add to cart.
  3. Open the cart.
- **Expected Result:** The selected product should be displayed in the cart.

### TC-CART-002 - Add multiple products

- **Test Case ID:** TC-CART-002
- **Feature:** FEAT-CART
- **Test Scenario / Description:** Check whether multiple products can be added to the cart.
- **Pre-conditions:** User is logged in and the cart is empty.
- **Execution Steps:**
  1. Add one product to the cart.
  2. Add another product.
  3. Open the cart.
- **Expected Result:** Both selected products should be displayed in the cart.

### TC-CART-003 - Verify cart badge count

- **Test Case ID:** TC-CART-003
- **Feature:** FEAT-CART
- **Test Scenario / Description:** Check whether the cart badge shows the correct number of added products.
- **Pre-conditions:** User is logged in and the cart is empty.
- **Execution Steps:**
  1. Add one product.
  2. Check the cart badge.
  3. Add another product.
  4. Check the badge again.
- **Expected Result:** The badge should increase according to the number of products added.

### TC-CART-004 - Verify product details in cart

- **Test Case ID:** TC-CART-004
- **Feature:** FEAT-CART
- **Test Scenario / Description:** Check whether the product added from the Products page is shown correctly in the cart.
- **Pre-conditions:** User is logged in.
- **Execution Steps:**
  1. Note the name and price of a product.
  2. Add the product to the cart.
  3. Open the cart.
- **Expected Result:** The same product name and price should be displayed in the cart.

### TC-CART-005 - Remove product from cart

- **Test Case ID:** TC-CART-005
- **Feature:** FEAT-CART
- **Test Scenario / Description:** Check whether a product can be removed from the cart.
- **Pre-conditions:** At least one product is present in the cart.
- **Execution Steps:**
  1. Open the cart.
  2. Click Remove for a product.
- **Expected Result:** The selected product should be removed and the cart badge should be updated.

### TC-CART-006 - Remove all products from cart

- **Test Case ID:** TC-CART-006
- **Feature:** FEAT-CART
- **Test Scenario / Description:** Check whether the cart can be made empty by removing all products.
- **Pre-conditions:** More than one product is present in the cart.
- **Execution Steps:**
  1. Open the cart.
  2. Remove all the products one by one.
- **Expected Result:** The cart should contain no products now and the cart badge should be cleared.

### TC-CART-007 - Continue shopping from cart

- **Test Case ID:** TC-CART-007
- **Feature:** FEAT-CART
- **Test Scenario / Description:** Check whether the user can return to the Products page from the cart.
- **Pre-conditions:** User is on the Cart page.
- **Execution Steps:**
  1. Click Continue Shopping.
- **Expected Result:** User should be taken back to the Products page.

### TC-CART-008 - Verify cart badge after removing a product

- **Test Case ID:** TC-CART-008
- **Feature:** FEAT-CART
- **Test Scenario / Description:** Check whether the cart badge is updated after removing a product.
- **Pre-conditions:** At least two products are in the cart.
- **Execution Steps:**
  1. Open the cart.
  2. Remove one product.
  3. Check the cart badge.
- **Expected Result:** The cart badge should show the updated number of products.

### TC-CART-009 - Verify cart contents after continuing shopping

- **Test Case ID:** TC-CART-009
- **Feature:** FEAT-CART
- **Test Scenario / Description:** Check whether the existing cart contents remain after returning to the Products page.
- **Pre-conditions:** At least one product is already in the cart.
- **Execution Steps:**
  1. Open the Cart page.
  2. Click Continue Shopping.
  3. Open the cart again.
- **Expected Result:** Previously added products should still be present in the cart.

# FEAT-CHK - Checkout Flow & Order Processing

### TC-CHK-001 - Navigate to checkout

- **Test Case ID:** TC-CHK-001
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check whether the user can proceed from the cart to checkout.
- **Pre-conditions:** At least one product is present in the cart.
- **Execution Steps:**
  1. Open the cart.
  2. Click Checkout.
- **Expected Result:** The Checkout Information page should be displayed.

### TC-CHK-002 - Checkout with valid information

- **Test Case ID:** TC-CHK-002
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check whether valid customer information allows the user to continue checkout.
- **Pre-conditions:** User is on the Checkout Information page.
- **Execution Steps:**
  1. Enter a valid first name.
  2. Enter a valid last name.
  3. Enter a valid postal code.
  4. Click Continue.
- **Expected Result:** User should be taken to the Checkout Overview page.

### TC-CHK-003 - First name left empty

- **Test Case ID:** TC-CHK-003
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check checkout validation when the First Name field is empty.
- **Pre-conditions:** User is on the Checkout Information page.
- **Execution Steps:**
  1. Leave First Name empty.
  2. Enter a valid last name.
  3. Enter a valid postal code.
  4. Click Continue.
- **Expected Result:** Checkout should not continue and a validation message should be displayed.

### TC-CHK-004 - Last name left empty

- **Test Case ID:** TC-CHK-004
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check checkout validation when the Last Name field is empty.
- **Pre-conditions:** User is on the Checkout Information page.
- **Execution Steps:**
  1. Enter a valid first name.
  2. Leave Last Name empty.
  3. Enter a valid postal code.
  4. Click Continue.
- **Expected Result:** Checkout should not continue and a validation message should be displayed.

### TC-CHK-005 - Postal code left empty

- **Test Case ID:** TC-CHK-005
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check checkout validation when the Postal Code field is empty.
- **Pre-conditions:** User is on the Checkout Information page.
- **Execution Steps:**
  1. Enter a valid first name.
  2. Enter a valid last name.
  3. Leave Postal Code empty.
  4. Click Continue.
- **Expected Result:** Checkout should not continue and a validation message should be displayed.

### TC-CHK-006 - Attempt checkout with empty cart

- **Test Case ID:** TC-CHK-006
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check whether the user can proceed to checkout when the cart is empty.
- **Pre-conditions:** User is logged in and the cart is empty.
- **Execution Steps:**
  1. Open the Cart page.
  2. Verify that no products are present in the cart.
  3. Click Checkout.
- **Expected Result:** The application should prevent checkout and display an appropriate message indicating that the cart is empty.

### TC-CHK-007 - Verify products in checkout overview

- **Test Case ID:** TC-CHK-007
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check whether the selected products are shown correctly on the checkout overview page.
- **Pre-conditions:** A product has been added to the cart and valid customer information is available.
- **Execution Steps:**
  1. Proceed to checkout.
  2. Enter valid customer information.
  3. Click Continue.
  4. Check the products displayed.
- **Expected Result:** The products shown should match the products selected in the cart.

### TC-CHK-008 - Verify order total

- **Test Case ID:** TC-CHK-008
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check whether the item total, tax and final total are calculated correctly.
- **Pre-conditions:** User is on the Checkout Overview page.
- **Execution Steps:**
  1. Note the prices of the selected products.
  2. Check the Item Total.
  3. Check the Tax.
  4. Check the final Total.
- **Expected Result:** The displayed totals should be calculated correctly based on the selected products and tax.

### TC-CHK-009 - Complete an order

- **Test Case ID:** TC-CHK-009
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check whether an order can be completed successfully.
- **Pre-conditions:** User is on the Checkout Overview page with at least one product.
- **Execution Steps:**
  1. Review the order details.
  2. Click Finish.
- **Expected Result:** The order should be completed and the order confirmation page should be displayed.

### TC-CHK-010 - Enter letters in postal code

- **Test Case ID:** TC-CHK-010
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check whether the Postal Code field accepts characters other than digits.
- **Pre-conditions:** User is on the Checkout Information page.
- **Execution Steps:**
  1. Enter a valid first name.
  2. Enter a valid last name.
  3. Enter letters in the Postal Code field.
  4. Click Continue.
- **Expected Result:** The application should display a validation message and should not proceed to the Checkout Overview page.


### TC-CHK-011 - Verify cart is cleared after successful order

- **Test Case ID:** TC-CHK-011
- **Feature:** FEAT-CHK
- **Test Scenario / Description:** Check whether the cart is cleared after successfully completing an order.
- **Pre-conditions:** User has at least one product in the cart and is ready to complete checkout.
- **Execution Steps:**
  1. Complete the checkout with valid information.
  2. Click Finish.
  3. Check the cart.
- **Expected Result:** The order should be completed and the purchased products should no longer remain in the active cart.

# FEAT-NAV - Navigation & System UI

### TC-NAV-001 - Open the menu

- **Test Case ID:** TC-NAV-001
- **Feature:** FEAT-NAV
- **Test Scenario / Description:** Check whether the application menu opens correctly.
- **Pre-conditions:** User is logged in.
- **Execution Steps:**
  1. Click the menu icon.
- **Expected Result:** The navigation menu should open and display the available options.

### TC-NAV-002 - Navigate to All Items

- **Test Case ID:** TC-NAV-002
- **Feature:** FEAT-NAV
- **Test Scenario / Description:** Check whether the All Items option takes the user back to the Products page.
- **Pre-conditions:** User is logged in and the menu is open.
- **Execution Steps:**
  1. Click All Items.
- **Expected Result:** The Products page should be displayed.

### TC-NAV-003 - Navigate to About

- **Test Case ID:** TC-NAV-003
- **Feature:** FEAT-NAV
- **Test Scenario / Description:** Check whether the About option opens the correct page.
- **Pre-conditions:** User is logged in and the menu is open.
- **Execution Steps:**
  1. Click About.
- **Expected Result:** The appropriate About page should open successfully.

### TC-NAV-004 - Navigate to Cart

- **Test Case ID:** TC-NAV-004
- **Feature:** FEAT-NAV
- **Test Scenario / Description:** Check whether the cart icon opens the Cart page.
- **Pre-conditions:** User is logged in.
- **Execution Steps:**
  1. Click the shopping cart icon.
- **Expected Result:** The Cart page should be displayed with the current cart contents.

### TC-NAV-005 - Reset application state

- **Test Case ID:** TC-NAV-005
- **Feature:** FEAT-NAV
- **Test Scenario / Description:** Check whether Reset App State clears the current application state.
- **Pre-conditions:** User is logged in and at least one product has been added to the cart.
- **Execution Steps:**
  1. Open the menu.
  2. Click Reset App State.
  3. Check the cart.
- **Expected Result:** The application state should be reset and previously added products should be cleared from the cart.

### TC-NAV-006 - Close navigation menu

- **Test Case ID:** TC-NAV-006
- **Feature:** FEAT-NAV
- **Test Scenario / Description:** Check whether the navigation menu can be closed.
- **Pre-conditions:** User is logged in and the navigation menu is open.
- **Execution Steps:**
  1. Click the close icon on the navigation menu.
- **Expected Result:** The navigation menu should close and the Products page should be visible.


### TC-NAV-007 - Reset app state with products in cart

- **Test Case ID:** TC-NAV-007
- **Feature:** FEAT-NAV
- **Test Scenario / Description:** Check whether Reset App State removes products currently added to the cart.
- **Pre-conditions:** User is logged in and products are added to the cart.
- **Execution Steps:**
  1. Open the navigation menu.
  2. Click Reset App State.
  3. Open the cart.
- **Expected Result:** Previously added products should be removed from the cart.

