const {
  HomePage,
  LoginPage,
  ProductPage,
  ShippingPage,
  PaymentsPage,
  SuccessPage,
} = require("../pageobjects/page-objects");
const testData = require("../data/test-data");

describe("Smoke Test - Product Purchase Flow", () => {
  it("should log into a valid account", async () => {
    await HomePage.open();
    await HomePage.navigateToLoginPage();

    await LoginPage.login(testData.user.email, testData.user.password);

    const welcomeMessageExists = await HomePage.welcomeMessage.isExisting();
    expect(welcomeMessageExists).toBe(true);
  });

  it("should search for a product and open product details", async () => {
    await HomePage.searchForProduct(testData.product.searchTerm);

    await HomePage.openProductDetail(0);
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(testData.product.searchTerm);
  });

  it("should select product options and add product to cart", async () => {
    const { size, color, quantity } = testData.product;
    
    await ProductPage.productTitle.waitForDisplayed();
    await ProductPage.selectProductSize(size);
    await ProductPage.selectProductColor(color);
    await ProductPage.setProductQuantity(quantity);
    await ProductPage.addToCart();

    const successMessage = await ProductPage.isProductAddedToCart();
    expect(successMessage).toContain("You added");

    await ProductPage.cartIcon.click();
    await ProductPage.proceedToCheckoutButton.click();
  });

  it("should input shipping details and complete the purchase", async () => {
    await ShippingPage.fillShippingForm(
      testData.user.streetAddress,
      testData.user.city,
      testData.user.postalCode,
      testData.user.phoneNumber,
      testData.user.country
    );

    await PaymentsPage.buttonPlaceOrder.waitForClickable();
    await PaymentsPage.buttonPlaceOrder.click();

    await SuccessPage.continueShoppingButton.waitForClickable();

    const confirmationMessage =
      await SuccessPage.spanThankYouMessage.getText();
    expect(confirmationMessage).toContain("Thank you for your purchase!");
  });
});
