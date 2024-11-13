const {HomePage, LoginPage, ProductPage, ShippingPage, PaymentsPage, SuccessPage} = require("../pageobjects/page-objects");
const {HomeUtility, LoginUtility, ProductUtility} = require("../utilities/utilities");
const testData = require("../data/test-data");

const {searchTerm, size, color, quantity} = testData.product;
const {firstName, lastName, email, password, streetAddress, city, postalCode, phoneNumber, country} = testData.existingUser;

describe("Smoke Test - Product Purchase Flow", () => {
  it("should log into a valid account", async () => {
    await HomePage.open();
    await LoginUtility.loginUser(email, password);
    await LoginUtility.verifySuccessfulLogin();
  });

  it("should search for a product and open product details", async () => {
    await HomeUtility.searchAndOpenProduct(searchTerm);
  });

  it("should select product options and add product to cart", async () => {
    await ProductUtility.selectAllProductInformation(size, color, quantity);
    const productAdded = await ProductPage.isProductAddedToCart();
    expect(productAdded).toBe(true);
    await ProductPage.cartIcon.click();
    await ProductPage.proceedToCheckoutButton.click();
  });

  it("should input shipping details and complete the purchase", async () => {
    await ShippingPage.fillShippingForm(streetAddress, city, postalCode, phoneNumber, country);
    await PaymentsPage.buttonPlaceOrder.waitForClickable();
    await PaymentsPage.buttonPlaceOrder.click();
    await SuccessPage.continueShoppingButton.waitForClickable();
    const confirmationMessage = await SuccessPage.spanThankYouMessage.getText();
    expect(confirmationMessage).toContain("Thank you for your purchase!");
  });
});
