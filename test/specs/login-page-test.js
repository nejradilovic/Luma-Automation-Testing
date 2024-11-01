const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login-page");
const HomePage = require("../pageobjects/home-page");
const testData = require("../data/test-data");

describe("Login Page Tests", () => {
  beforeAll(async () => {
    await LoginPage.open();
  });

  it("should show error messages for email and password fields when both are empty", async () => {
    await LoginPage.login("", "");

    expect(await LoginPage.isEmailErrorDisplayed()).toBe(true);
    expect(await LoginPage.isPasswordErrorDisplayed()).toBe(true);

    await LoginPage.checkErrorMessage(LoginPage.passwordErrorMessage, "This is a required field.");
    await LoginPage.checkErrorMessage(LoginPage.emailErrorMessage, "This is a required field.");
  });

  it("should show error message for empty password", async () => {
    await LoginPage.login("nadilovic@test.com", "");

    expect(await LoginPage.isPasswordErrorDisplayed()).toBe(true);
    await LoginPage.checkErrorMessage(LoginPage.passwordErrorMessage, "This is a required field.");
  });

  it("should show error message for empty email", async () => {
    await LoginPage.login("", "Pass123!.");

    expect(await LoginPage.isEmailErrorDisplayed()).toBe(true);
    await LoginPage.checkErrorMessage(LoginPage.emailErrorMessage, "This is a required field.");
  });

  it("should show error message for invalid email format", async () => {
    await LoginPage.login("invalid-email-format", "somepassword");

    expect(await LoginPage.isEmailErrorDisplayed()).toBe(true);
    await LoginPage.checkErrorMessage(LoginPage.emailErrorMessage, "Please enter a valid email address");
  });

  it("should show error message for incorrect password", async () => {
    await LoginPage.login(testData.user.email, "wrongPassword");

    await expect(LoginPage.signUpErrorMessage).toBeDisplayed();
    await LoginPage.checkErrorMessage(LoginPage.signUpErrorMessage, "The account sign-in was incorrect");
  });

  it("should show error messages for both fields invalid", async () => {
    await LoginPage.login("unregistered@testing.com", "wrongPassword");

    await expect(LoginPage.signUpErrorMessage).toBeDisplayed();
    await LoginPage.checkErrorMessage(LoginPage.signUpErrorMessage, "The account sign-in was incorrect");
  });

  it("should log in with valid credentials", async () => {
    const { email, password } = testData.user;
    await LoginPage.login(email, password);

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("customer/account");

    const pageTitle = await browser.getTitle();
    expect(pageTitle).toBe("My Account");

    await HomePage.welcomeMessage.waitForDisplayed();
    const welcomeMessage = await HomePage.welcomeMessage.getText();
    expect(welcomeMessage).toBe(
      `Welcome, ${testData.user.firstName} ${testData.user.lastName}!`
    );
    await HomePage.signOut();
  });
});
