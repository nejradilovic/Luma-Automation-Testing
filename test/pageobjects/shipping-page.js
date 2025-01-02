const Page = require("./page");
const InputField = require("../utilities/elements/input-field");
const SelectField = require("../utilities/elements/select-field");
const Button = require("../utilities/elements/button");
const BaseElement = require("../utilities/elements/base-element");
const selectors = require("../utilities/selectors");

class ShippingPage extends Page {
  open() {
    return super.open("checkout/#shipping");
  }

  get inputStreetAddress() {
    return new InputField(selectors.shippingPage.inputStreetAddress);
  }

  get inputCity() {
    return new InputField(selectors.shippingPage.inputCity);
  }

  get inputPostalCode() {
    return new InputField(selectors.shippingPage.inputPostalCode);
  }

  get inputPhoneNumber() {
    return new InputField(selectors.shippingPage.inputPhoneNumber);
  }

  get dropdownCountry() {
    return new SelectField(selectors.shippingPage.dropdownCountry);
  }

  get dropdownState() {
    return new SelectField(selectors.shippingPage.dropdownState);
  }

  get buttonNext() {
    return new Button(selectors.shippingPage.buttonNext);
  }

  get inputFlatRate() {
    return new InputField(selectors.shippingPage.inputFlatRate);
  }

  get existingAddressOption() {
    return new BaseElement(selectors.shippingPage.existingAddressOption);
  }

  async fillShippingForm(streetAddress, city, postalCode, phoneNumber, country) {
    const existingAddressSelected = this.existingAddressOption.isDisplayed();

    if (!existingAddressSelected) {
      await this.inputStreetAddress.setValue(streetAddress);
      await this.inputCity.setValue(city);
      await this.inputPostalCode.setValue(postalCode);
      await this.inputPhoneNumber.setValue(phoneNumber);
      await this.dropdownCountry.selectByVisibleText(country);
      await this.inputFlatRate.click();
    }

    await this.buttonNext.click();
  }
}

module.exports = new ShippingPage();
