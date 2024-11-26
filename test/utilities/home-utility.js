const HomePage = require("../pageobjects/home-page");
const ProductPage = require("../pageobjects/product-page");
const CommonUtility = require("../utilities/common-utility");

class HomeUtility {
  async searchAndOpenProduct(searchTerm, productIndex = 0) {
    await HomePage.searchForProduct(searchTerm);
    await HomePage.openProductDetail(productIndex);

    await ProductPage.productTitle.waitForDisplayed();
    const productTitle = await ProductPage.productTitle.getText();
    await CommonUtility.checkUrlContains(productTitle.toLowerCase().replace(/\s+/g, '-'));
  }
}

module.exports = new HomeUtility;
