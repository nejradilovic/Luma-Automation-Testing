const Page = require("./page");
const InputField = require("../utilities/elements/input-field");
const Button = require("../utilities/elements/button");
const BaseElement = require("../utilities/elements/base-element");

class RegistrationPage extends Page {
  open() {
    return super.open("customer/account/create/");
  }

  get inputFirstName() {
    return new InputField("//input[@name='firstname' and @title='First Name']");
  }

  get inputLastName() {
    return new InputField("//input[@name='lastname' and @title='Last Name']");
  }

  get inputEmail() {
    return new InputField("//input[@name='email' and @title='Email']");
  }

  get inputPassword() {
    return new InputField("//input[@name='password' and @title='Password']");
  }

  get inputConfirmPassword() {
    return new InputField("//input[@name='password_confirmation' and @title='Confirm Password']");
  }

  get buttonSubmit() {
    return new Button("//button[@class='action submit primary' and @title='Create an Account']/span[contains(text(), 'Create an Account')]");
  }

  get pageTitle() {
    return new BaseElement("//h1[contains(text(), 'Create New Customer Account')]");
  }

  get registrationSuccessMessage() {
    return new BaseElement("//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']");
  }

  get registrationErrorMessage() {
    return new BaseElement("div.message-error[data-ui-id='message-error']");
  }

  get emailErrorMessage() {
    return new BaseElement("//div[@id='email_address-error']");
  }

  get passwordErrorMessage() {
    return new BaseElement("//div[@id='password-error']");
  }

  get passwordConfirmationErrorMessage() {
    return new BaseElement('//div[@id="password-confirmation-error"]');
  }

  get firstNameErrorMessage() {
    return new BaseElement("//div[@id='firstname-error']");
  }

  get lastNameErrorMessage() {
    return new BaseElement("//div[@id='lastname-error']");
  }
}

module.exports = new RegistrationPage();
