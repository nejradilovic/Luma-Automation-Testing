const Page = require("./page");
const Button = require("../utilities/elements/button");
const InputField = require("../utilities/elements/input-field");
const BaseElement = require("../utilities/elements/base-element");

class ProductPage extends Page {
  get productTitle() {
    return new BaseElement("//span[@class='base' and @data-ui-id='page-title-wrapper']");
  }

  getProductSizeElement(size) {
    return new BaseElement(`//div[contains(@class, 'swatch-option text') and @option-label='${size}']`);
  }

  getProductColorElement(color) {
    return new BaseElement(`//div[contains(@class, 'swatch-option color') and @option-label='${color}']`);
  }

  get productQuantity() {
    return new InputField('//input[@id="qty"]');
  }

  get addToCartButton() {
    return new Button('//button[@id="product-addtocart-button"]');
  }

  get cartSuccessMessage() {
    return new BaseElement(".message-success");
  }

  get cartIcon() {
    return new BaseElement(".action.showcart");
  }

  get proceedToCheckoutButton() {
    return new Button("#top-cart-btn-checkout");
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

  async goToCart() {
    await this.cartIcon.click();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async isProductAddedToCart() {
    await this.cartSuccessMessage.waitForDisplayed();
    const messageText = await this.cartSuccessMessage.getText();
    const productTitle = await this.productTitle.getText();
    return messageText.includes(`You added ${productTitle} to your shopping cart.`);
  }
}

module.exports = new ProductPage();
