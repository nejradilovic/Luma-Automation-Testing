const ShippingPage = require("../pageobjects/shipping-page");
const PaymentsPage = require("../pageobjects/payments-page");
const SuccessPage = require("../pageobjects/success-page");

class ShippingUtility {
  async completePurchase(streetAddress, city, postalCode, phoneNumber, country) {
    await ShippingPage.fillShippingForm(streetAddress, city, postalCode, phoneNumber, country);
    await PaymentsPage.placeOrder();
    await SuccessPage.continueShoppingButton.waitForClickable();
    const confirmationMessage = await SuccessPage.spanThankYouMessage.getText();
    expect(confirmationMessage).toContain("Thank you for your purchase!");
  }
}

module.exports = new ShippingUtility();
