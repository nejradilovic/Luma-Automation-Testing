const { expect } = require("@wdio/globals");
const ProductPage = require("../pageobjects/product-page");
const HomePage = require("../pageobjects/home-page");
const testData = require("../data/test-data");

describe("Product Page Tests", () => {
  it("should select product size, color, set quantity, and add to cart", async () => {
    const { size, color, quantity } = testData.product;

    await HomePage.open();
    await HomePage.searchForProduct("jacket");
    await HomePage.openProductDetail(0);
    
    await ProductPage.productTitle.waitForDisplayed();
    await ProductPage.selectProductSize(size);
    await ProductPage.selectProductColor(color);
    await ProductPage.setProductQuantity(quantity);
    await ProductPage.addToCart();

    const successMessage = await ProductPage.isProductAddedToCart();
    expect(successMessage).toContain("You added");

    await ProductPage.cartIcon.click();
    await ProductPage.proceedToCheckoutButton.click();

    const title = await browser.getTitle();
    expect(title).toEqual("Checkout");
  });
});
