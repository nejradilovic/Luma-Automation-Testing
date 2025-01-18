const ShippingPage = require("../pageobjects/shipping-page");
const PaymentsPage = require("../pageobjects/payments-page");
const SuccessPage = require("../pageobjects/success-page");
const CommonUtility = require("./common-utility");
const { is } = require("css-select");

class ShippingUtility extends CommonUtility {
  async completePurchase(streetAddress, city, postalCode, phoneNumber, country) {
    await ShippingPage.fillShippingForm(streetAddress, city, postalCode, phoneNumber, country);
    await PaymentsPage.placeOrder();
    await SuccessPage.continueShoppingButton.isExisting();
    const isDisplayed = await SuccessPage.continueShoppingButton.isDisplayed();
    if(isDisplayed) await SuccessPage.continueShoppingButton.waitForClickable();
    
    const confirmationMessageSelector = SuccessPage.spanThankYouMessage;
    const expectedMessage = "Thank you for your purchase!";
    
    await this.verifyMessage(confirmationMessageSelector, expectedMessage);
  }
}

module.exports = new ShippingUtility();
