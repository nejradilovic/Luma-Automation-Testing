const HomePage = require("../pageobjects/home-page");
const ProductUtility = require("../utilities/product-utility");
const HomeUtility = require("../utilities/home-utility");
const testData = require("../data/test-data");

describe("Product Page Tests", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("validate that we are able to choose a product", async () => {
    const { searchTerm, size, color, quantity } = testData.product;
    await HomeUtility.searchAndOpenProduct(searchTerm);
    await ProductUtility.addProductToCartAndProceedToCheckout(size, color, quantity);
  });
});
