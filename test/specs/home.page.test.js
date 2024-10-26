const { expect } = require("@wdio/globals");
const HomePage = require("../pageobjects/home.page");
const LoginPage = require("../pageobjects/login.page");
const testData = require("../data/testData");

describe("Home Page Tests", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("should navigate to Sign In page from Home Page", async () => {
    await HomePage.navigateToLoginPage();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("customer/account/login");

    const pageTitle = await browser.getTitle();
    expect(pageTitle).toBe("Customer Login");
  });

  it("should successfully search and open product detail page", async () => {
    await HomePage.searchForProduct(testData.product.searchTerm);

    await HomePage.openProductDetail(0);
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(testData.product.searchTerm);
  });

  it("should successfully sign out and display Sign In button", async () => {
    await LoginPage.open();
    await LoginPage.login(testData.user.email, testData.user.password);
    await HomePage.signOut();

    await HomePage.signInButton.waitForDisplayed();
    expect(await HomePage.signInButton.isDisplayed()).toBe(true);
  });
});
