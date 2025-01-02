const Page = require("./page");
const Button = require("../utilities/elements/button");
const InputField = require("../utilities/elements/input-field");
const BaseElement = require("../utilities/elements/base-element");
const selectors = require("../utilities/selectors");

class ProductPage extends Page {
  get productTitle() {
    return new BaseElement(selectors.productPage.productTitle);
  }

  getProductSizeElement(size) {
    return new BaseElement(selectors.productPage.productSize(size));
  }

  getProductColorElement(color) {
    return new BaseElement(selectors.productPage.productColor(color));
  }

  get productQuantity() {
    return new InputField(selectors.productPage.productQuantity);
  }

  get addToCartButton() {
    return new Button(selectors.productPage.addToCartButton);
  }

  get cartSuccessMessage() {
    return new BaseElement(selectors.productPage.cartSuccessMessage);
  }

  get cartIcon() {
    return new BaseElement(selectors.productPage.cartIcon);
  }

  get proceedToCheckoutButton() {
    return new Button(selectors.productPage.proceedToCheckoutButton);
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
