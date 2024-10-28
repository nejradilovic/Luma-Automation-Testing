const { $ } = require("@wdio/globals");
const Page = require("./page");

class ProductPage extends Page {
  
  get productTitle() {
    return $("//span[@class='base' and @data-ui-id='page-title-wrapper']");
  }

  getProductSizeElement(size) {
    return $(
      `//div[contains(@class, 'swatch-option text') and @option-label='${size}']`
    );
  }

  getProductColorElement(color) {
    return $(
      `//div[contains(@class, 'swatch-option color') and @option-label='${color}']`
    );
  }

  get productQuantity() {
    return $('//input[@id="qty"]');
  }

  get addToCartButton() {
    return $('//button[@id="product-addtocart-button"]');
  }

  get cartSuccessMessage() {
    return $(".message-success");
  }

  get cartIcon() {
    return $(".action.showcart");
  }

  get proceedToCheckoutButton() {
    return $("#top-cart-btn-checkout");
  }

  async selectProductSize(size) {
    const sizeElement = this.getProductSizeElement(size);
    await sizeElement.click();
  }

  async selectProductColor(color) {
    const colorElement = this.getProductColorElement(color);
    await colorElement.click();
  }

  async setProductQuantity(quantity) {
    await this.productQuantity.setValue(quantity);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async isProductAddedToCart() {
    await this.cartSuccessMessage.waitForDisplayed();
    return this.cartSuccessMessage.getText();
  }
}

module.exports = new ProductPage();
