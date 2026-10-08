# SauceDemo Playwright E2E Automation

## Overview

This repository contains an end-to-end automated test for the SauceDemo e-commerce application.

The automation was created as part of an SQA Engineer Practical QA & AI Assessment.

## Tools

- Playwright
- TypeScript
- Chromium
- GitHub

## Automated Business Flow

The test covers the main customer purchase journey:

1. Open SauceDemo
2. Login as `standard_user`
3. Verify successful login
4. Add Sauce Labs Backpack to the cart
5. Open the cart
6. Verify the product and price
7. Proceed to checkout
8. Enter customer information
9. Continue to checkout overview
10. Verify the product and price
11. Verify the order total
12. Complete the order
13. Verify the order confirmation

## Business Value

This flow was selected because it represents the application's main business journey:

**Login → Product → Cart → Checkout → Order Completion**

A failure in this flow can directly prevent a customer from completing a purchase.

## AI Assistance

AI was used to assist with the initial test structure, locator suggestions, assertions and test organization.

The generated suggestions were manually reviewed against the actual SauceDemo application.

Human validation was performed to verify:

- Correct navigation
- Correct product selection
- Appropriate element locators
- Expected product price
- Checkout information
- Order total
- Order completion
- Meaningful assertions

AI-generated code was treated as a starting point and was not accepted without validation.

## Human Review

The automated test was reviewed for:

- Correct expected behavior
- Stable selectors
- Meaningful assertions
- Avoidance of unnecessary hard waits
- Maintainability
- Correct business flow

## Installation

Install project dependencies:

```bash
npm install
