const ProductPage = require('../pageobjects/product-page');

class ProductUtility {
  async selectAllProductInformation(size, color, quantity) {
    await ProductPage.selectProductSize(size);
    await ProductPage.selectProductColor(color);
    await ProductPage.setProductQuantity(quantity);
    await ProductPage.addToCart();
  }
}

module.exports = new ProductUtility();