const { expect } = require("@wdio/globals");
const HomePage = require("../pageobjects/home-page");
const HomeUtility = require("../utilities/home-utility");
const LoginUtility = require("../utilities/login-utility");
const testData = require("../data/test-data");

describe("Home Page Tests", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("should navigate to Sign In page from Home Page", async () => {
    await HomePage.navigateToLoginPage();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("customer/account/login");
  });

  it("should successfully search and open product detail page", async () => {
    await HomeUtility.searchAndOpenProduct(testData.product.searchTerm);
  });

  it("should successfully sign out and display Sign In button", async () => {
    await LoginUtility.loginUser(testData.user.email, testData.user.password);
    
    await HomePage.signOut();
    await HomePage.signInButton.waitForDisplayed();
    expect(await HomePage.signInButton.isDisplayed()).toBe(true);
  });
});
