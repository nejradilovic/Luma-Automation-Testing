const HomePage = require("../pageobjects/home-page");
const ProductPage = require("../pageobjects/product-page");

class HomeUtility {
  async searchAndOpenProduct(searchTerm, productIndex = 0) {
    await HomePage.searchForProduct(searchTerm);
    await HomePage.openProductDetail(productIndex);

    await ProductPage.productTitle.waitForDisplayed();
    const productTitle = await ProductPage.productTitle.getText();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(productTitle.toLowerCase().replace(/\s+/g, '-'));
  }
}

module.exports = new HomeUtility;
