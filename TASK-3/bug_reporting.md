# Task 3 - Defect Reports

**Defect ID:** BUG-001

**Linked Test Case ID:** TC-CHK-010

**Target Feature ID:** FEAT-CHK

**Defect Summary:**  
Postal Code field accepts alphabetic characters during checkout and allows the user to proceed to the Checkout Overview page.

**Steps to Reproduce:**
1. Open the SauceDemo application.
2. Login using standard_user.
3. Add a product to the cart.
4. Open the Cart page.
5. Click Checkout.
6. Enter a valid First Name.
7. Enter a valid Last Name.
8. Enter alphabetic characters in the Postal Code field.
9. Click Continue.

**Expected Result:**  
The application should reject alphabetic characters in the Postal Code field, display a validation message, and prevent the user from proceeding to the Checkout Overview page.

**Actual Result:**  
The application accepts alphabetic characters in the Postal Code field and allows the user to proceed to the Checkout Overview page.

**Technical Proof & Attachments:** BUG_001.png


## BUG-002 - Checkout allowed with empty cart

- **Defect ID:** BUG-002
- **Linked Test Case ID:** TC-CHK-006
- **Target Feature ID:** FEAT-CHK
- **Defect Summary:** User can proceed to checkout when the cart is empty.
- **Steps to Reproduce:**
  1. Login using standard_user.
  2. Ensure the cart is empty.
  3. Open the Cart page.
  4. Click Checkout.
- **Expected Result:** Checkout should be prevented when the cart is empty.
- **Actual Result:** User is allowed to proceed to the Checkout Information page eventhough having an empty cart.
- **Technical Proof & Attachments:** BUG-002.png

## BUG-003 - Sort dropdown arrow is not clickable

- **Defect ID:** BUG-003
- **Linked Test Case ID:** TC-CATALOG-005
- **Target Feature ID:** FEAT-CATALOG
- **Defect Summary:** Sort dropdown arrow is not directly clickable for selecting a product sorting option.

- **Steps to Reproduce:**
  1. Open the SauceDemo application.
  2. Login using standard_user.
  3. Navigate to the Products page.
  4. Click directly on the dropdown arrow.

- **Expected Result:** The sort dropdown should open and allow the user to select a sorting option.

- **Actual Result:** The dropdown arrow is not directly clickable.

- **Technical Proof & Attachments:** BUG-003.png