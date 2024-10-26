# Luma Automation Testing

Automated testing suite for the Luma web application, developed as part of the Atlantbh Internship 2024 program. This project utilizes JavaScript, Selenium, WebdriverIO, and Jasmine to ensure the reliability and performance of the Luma application.

## Project Structure

- **`test/`** - Main folder containing all test-related files.
  - **`specs/`** - Contains individual test scripts written with Jasmine for various functionalities of the Luma application.
  - **`pageobjects/`** - Holds Page Object files that represent different pages within the Luma application. Each file includes methods and elements for interacting with specific page elements.
  - **`data/`** - Contains test data files for scenarios, such as login credentials, product details, and other necessary inputs.
- **`allure-results/`** - Directory where Allure test result files are generated after running tests.

## Tools & Frameworks

- **JavaScript** - Programming language used for test scripts.
- **Selenium Webdriver** - Browser automation tool.
- **WebdriverIO** - WebDriver binding for Node.js, streamlining test script development.
- **Jasmine** - Testing framework providing a clean, readable syntax.
- **Allure Reports** - Reporting tool for generating visual reports after test runs.
