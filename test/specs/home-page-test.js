const { expect } = require("@wdio/globals");
const HomePage = require("../pageobjects/home-page");
const HomeUtility = require("../utilities/home-utility");
const LoginUtility = require("../utilities/login-utility");
const CommonUtility = require("../utilities/common-utility");
const testData = require("../data/test-data");

describe("Home Page Tests", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("should navigate to Sign In page from Home Page", async () => {
    await HomePage.navigateToLoginPage();
    await CommonUtility.checkUrlContains("customer/account/login");
  });

  it("should navigate to Create Account page from Home Page", async () => {
    await HomePage.navigateToCreateAccountPage();
    await CommonUtility.checkUrlContains("customer/account/create");
  });

  it("should successfully search and open product detail page", async () => {
    await HomeUtility.searchAndOpenProduct(testData.product.searchTerm);
  });

  it("should successfully sign out and display Sign In button", async () => {
    await LoginUtility.loginUser(testData.existingUser.email, testData.existingUser.password);
    
    await HomePage.signOut();
    await HomePage.signInButton.waitForDisplayed();
    expect(await HomePage.signInButton.isDisplayed()).toBe(true);
  });
});
