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
    await HomeUtility.checkUrlContains("customer/account/login");
  });

  it("should navigate to Create Account page from Home Page", async () => {
    await HomePage.navigateToCreateAccountPage();
    await HomeUtility.checkUrlContains("customer/account/create");
  });

  it("should successfully search and open product detail page", async () => {
    await HomeUtility.searchAndOpenProduct(testData.product.searchTerm);
  });

  it("should successfully sign out and display Sign In button", async () => {
    await LoginUtility.loginUser({email: testData.existingUser.email, password: testData.existingUser.password});
    await HomeUtility.signOut();
  });
});
