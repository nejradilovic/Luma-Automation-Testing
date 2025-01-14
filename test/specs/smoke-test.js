const HomePage = require("../pageobjects/home-page")
const {HomeUtility, LoginUtility, ProductUtility, ShippingUtility} = require("../utilities/utilities");
const testData = require("../data/test-data");

const {searchTerm, size, color, quantity} = testData.product;
const {email, password, firstName, lastName, streetAddress, city, postalCode, phoneNumber, country} = testData.existingUser;

describe("Smoke Test - Product Purchase Flow", () => {
  it("should log into a valid account", async () => {
    await HomePage.open();
    await LoginUtility.loginUser({email, password});
    await LoginUtility.verifySuccessfulLogin();
  });

  it("should search for a product and open product details", async () => {
    await HomeUtility.searchAndOpenProduct(searchTerm);
  });

  it("should select product options and add product to cart", async () => {
    await ProductUtility.addProductToCartAndProceedToCheckout(size, color, quantity);
  });

  it("should input shipping details and complete the purchase", async () => {
    await ShippingUtility.completePurchase(streetAddress, city, postalCode, phoneNumber, country);
  });
});
