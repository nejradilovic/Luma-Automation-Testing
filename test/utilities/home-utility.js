const HomePage = require("../pageobjects/home-page");
const ProductPage = require("../pageobjects/product-page");
const CommonUtility = require("./common-utility");

class HomeUtility extends CommonUtility {
  async searchAndOpenProduct(searchTerm, productIndex = 0) {
    await HomePage.searchForProduct(searchTerm);
    await HomePage.openProductDetail(productIndex);

    const productTitle = await ProductPage.productTitle.getText();
    await this.checkUrlContains(productTitle.toLowerCase().replace(/\s+/g, '-'));
  }

  async signOut() {
    await HomePage.signOut();
    await HomePage.signInButton.waitForDisplayed();
    expect(await HomePage.signInButton.isDisplayed()).toBe(true);
  }
}

module.exports = new HomeUtility;
