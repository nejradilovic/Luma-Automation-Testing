const Page = require("./page");
const BaseElement = require("../utilities/elements/base-element");
const Button = require("../utilities/elements/button");
const InputField = require("../utilities/elements/input-field");

class LoginPage extends Page {
  open() {
    return super.open("customer/account/login/");
  }

  get inputEmail() {
    return new InputField("//input[@id='email']");
  }

  get inputPassword() {
    return new InputField("//input[@id='pass']");
  }

  get signInButton() {
    return new Button("//button[@id='send2']");
  }

  get signUpErrorMessage() {
    return new BaseElement("//div[contains(@class, 'page messages')]");
  }

  get emailErrorMessage() {
    return new BaseElement("//div[@id='email-error']");
  }

  get passwordErrorMessage() {
    return new BaseElement("//div[@id='pass-error']");
  }

  async isEmailErrorDisplayed() {
    return await this.emailErrorMessage.isDisplayed();
  }

  async isPasswordErrorDisplayed() {
    return await this.passwordErrorMessage.isDisplayed();
  }
}

module.exports = new LoginPage();
