const { expect } = require("@wdio/globals");
const ProductPage = require("../pageobjects/product-page");
const HomeUtility = require('../utilities/home-utility')
const HomePage = require("../pageobjects/home-page");
const ProductUtility = require("../utilities/product-utility");
const testData = require("../data/test-data");

describe("Product Page Tests", () => {
  it("Validate that we are able to choose a product", async () => {
    const {searchTerm, size, color, quantity } = testData.product;

    await HomePage.open();
    await HomeUtility.searchAndOpenProduct(searchTerm);
    await ProductUtility.selectAllProductInformation(size, color, quantity);

    const productAdded = await ProductPage.isProductAddedToCart();
    expect(productAdded).toBe(true);  

    await ProductPage.cartIcon.click();
    await ProductPage.proceedToCheckoutButton.click();

    const title = await browser.getTitle();
    expect(title).toEqual("Checkout");
  });
});
