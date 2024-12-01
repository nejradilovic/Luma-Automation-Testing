const ProductPage = require('../pageobjects/product-page');
const CommonUtility = require("../utilities/common-utility");

class ProductUtility {
  async selectAllProductInformation(size, color, quantity) {
    await ProductPage.selectProductSize(size);
    await ProductPage.selectProductColor(color);
    await ProductPage.setProductQuantity(quantity);
    await ProductPage.addToCart();
  }
  async addProductToCartAndProceedToCheckout(size, color, quantity) {
    await this.selectAllProductInformation(size, color, quantity);
    const productAdded = await ProductPage.isProductAddedToCart();
    expect(productAdded).toBe(true); 

    await ProductPage.goToCart();
    await ProductPage.proceedToCheckout();
    await CommonUtility.checkUrlContains("/checkout");
  } 
}

module.exports = new ProductUtility();