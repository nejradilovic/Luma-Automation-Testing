const Page = require("./page");
const InputField = require("../utilities/elements/input-field");
const SelectField = require("../utilities/elements/select-field");
const Button = require("../utilities/elements/button");
const BaseElement = require("../utilities/elements/base-element");

class ShippingPage extends Page {
  open() {
    return super.open("checkout/#shipping");
  }

  get inputStreetAddress() {
    return new InputField('//input[@name="street[0]"]');
  }

  get inputCity() {
    return new InputField('//input[@name="city"]');
  }

  get inputPostalCode() {
    return new InputField('//input[@name="postcode"]');
  }

  get inputPhoneNumber() {
    return new InputField('//input[@name="telephone"]');
  }

  get dropdownCountry() {
    return new SelectField('//select[@name="country_id"]');
  }

  get dropdownState() {
    return new SelectField('//select[@name="region_id"]');
  }

  get buttonNext() {
    return new Button('//button[@data-role="opc-continue"]');
  }

  get inputFlatRate() {
    return new InputField(`input[value='flatrate_flatrate']`);
  }

  get existingAddressOption() {
    return new BaseElement('//div[contains(@class, "shipping-address-item") and contains(@class, "selected-item")]');
  }

  async fillShippingForm(streetAddress, city, postalCode, phoneNumber, country) {
    const existingAddressSelected = await this.existingAddressOption.isDisplayed();

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
