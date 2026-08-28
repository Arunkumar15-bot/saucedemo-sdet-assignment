# SauceDemo SDET Technical Assignment

## Overview

This repository contains my submission for the SDET Technical Assignment based on the SauceDemo application.

The assignment covers:

* Manual test case design
* End-to-end test automation
* Defect discovery and documentation

## Application Under Test

* **Application:** SauceDemo
* **Test User:** `standard_user`

---

## Task 1 – Manual Test Case Design

Manual test cases are documented in:

`TASK-1/testcases.md`

The following features are covered:

* **FEAT-AUTH** – Authentication & Session Management
* **FEAT-CATALOG** – Product Catalog & Discovery
* **FEAT-CART** – Cart & Badge Management
* **FEAT-CHK** – Checkout Flow & Order Processing
* **FEAT-NAV** – Navigation & System UI

The test cases include positive and negative scenarios with:

* Test Case ID
* Feature
* Test Scenario / Description
* Pre-conditions
* Execution Steps
* Expected Result

---

## Task 2 – End-to-End Test Automation

The automation framework is implemented using:

* **Playwright**
* **JavaScript**
* **Node.js**
* **Playwright Test**
* **Page Object Model (POM)**


### Automation Coverage

A subset of the manual test cases from Task 1 has been automated.

### Run the Tests

Navigate to the Task 2 directory:

cd TASK-2

Install dependencies:

npm install

Run the complete test suite:

npx playwright test

Run tests in headed mode:

npx playwright test --headed


View the HTML report:

npx playwright show-report

---

## Task 3 – Defect Discovery & Bug Documentation

Defects were identified while testing the SauceDemo application using the `standard_user` account.

Bug reports and supporting screenshots are available in:

`TASK-3/bug_reporting.md`


Each defect includes:

* Defect ID
* Linked Test Case ID
* Target Feature ID
* Defect Summary
* Steps to Reproduce
* Expected Result
* Actual Result
* Technical Proof / Screenshot

---

## Summary

This project demonstrates:

* Functional and negative test case design
* Edge case analysis
* End-to-end test automation
* Page Object Model implementation
* Maintainable locator strategies
* Assertions
* Defect identification
* Defect documentation with screenshots
* Automated test execution using GitHub Actions
