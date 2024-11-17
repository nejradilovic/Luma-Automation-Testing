const { $ } = require("@wdio/globals");
const Page = require("./page");

class RegistrationPage extends Page {
  open() {
    return super.open("customer/account/create/");
  }

  get inputFirstName() {
    return $("//input[@name='firstname' and @title='First Name']");
  }

  get inputLastName() {
    return $("//input[@name='lastname' and @title='Last Name']");
  }

  get inputEmail() {
    return $("//input[@name='email' and @title='Email']");
  }

  get inputPassword() {
    return $("//input[@name='password' and @title='Password']");
  }

  get inputConfirmPassword() {
    return $("//input[@name='password_confirmation' and @title='Confirm Password']");
  }

  get buttonSubmit() {
    return $("//button[@class='action submit primary' and @title='Create an Account']/span[contains(text(), 'Create an Account')]");
  }
  
  get pageTitle() {
    return $("//h1[contains(text(), 'Create New Customer Account')]");
  }  

  get registrationSuccessMessage() {
    return $("//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']");
  }

  get registrationErrorMessage() {
    return $("div.message-error[data-ui-id='message-error']");
  }

  get emailErrorMessage() {
    return $("//div[@id='email_address-error']");
  }

  get passwordErrorMessage() {
    return $("//div[@id='password-error']");
  }

  get passwordConfirmationErrorMessage() {
    return $('//div[@id="password-confirmation-error"]');
  }

  get firstNameErrorMessage() {
    return $("//div[@id='firstname-error']");
  }

  get lastNameErrorMessage() {
    return $("//div[@id='lastname-error']");
  }
}

module.exports = new RegistrationPage();
