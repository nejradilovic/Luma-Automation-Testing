const { $ } = require("@wdio/globals");
const Page = require("./page");

class ShippingPage extends Page {
  get inputStreetAddress() {
    return $('//input[@name="street[0]"]');
  }
  get inputCity() {
    return $('//input[@name="city"]');
  }
  get inputPostalCode() {
    return $('//input[@name="postcode"]');
  }
  get inputPhoneNumber() {
    return $('//input[@name="telephone"]');
  }
  get dropdownCountry() {
    return $('//select[@name="country_id"]');
  }
  get dropdownState() {
    return $('//select[@name="region_id"]');
  }
  get buttonNext() {
    return $('//button[@data-role="opc-continue"]');
  }
  get inputFlatRate() {
    return $(`input[value='flatrate_flatrate']`);
  }
  get existingAddressOption() {
    return $(
      '//div[contains(@class, "shipping-address-item") and contains(@class, "selected-item")]'
    );
  }

  async fillShippingForm(
    streetAddress,
    city,
    postalCode,
    phoneNumber,
    country
  ) {
    const existingAddressSelected =
      await this.existingAddressOption.isDisplayed();

    if (!existingAddressSelected) {
      await this.inputStreetAddress.setValue(streetAddress);
      await this.inputCity.setValue(city);
      await this.inputPostalCode.setValue(postalCode);
      await this.inputPhoneNumber.setValue(phoneNumber);
      await this.dropdownCountry.selectByVisibleText(country);
      await this.inputFlatRate.waitForClickable();
      await this.inputFlatRate.click();
    }

    await this.buttonNext.waitForClickable();
    await this.buttonNext.click();
  }

  open() {
    return super.open("checkout/#shipping");
  }
}

module.exports = new ShippingPage();
