const RegistrationPage = require("../pageobjects/registration-page");
const CommonUtility = require("./common-utility");

class RegistrationUtility extends CommonUtility {
  async registerUser({ firstName = "", lastName = "", email = "", password = "", confirmPassword = "" } = {}) {
    await RegistrationPage.open();
    await RegistrationPage.inputFirstName.setValue(firstName);
    await RegistrationPage.inputLastName.setValue(lastName);
    await RegistrationPage.inputEmail.setValue(email);
    await RegistrationPage.inputPassword.setValue(password);
    await RegistrationPage.inputConfirmPassword.setValue(confirmPassword);
    await RegistrationPage.buttonSubmit.click();
  }
  
  async verifySuccessfulRegistration() {
    const successMessageSelector = RegistrationPage.registrationSuccessMessage;
    const expectedMessage = "Thank you for registering with Main Website Store.";
    await this.verifyMessage(successMessageSelector, expectedMessage);
  }
  
  async verifyRequiredFieldErrors() {
    const requiredErrorMessage = "This is a required field.";

    const requiredFields = [
      { field: RegistrationPage.firstNameErrorMessage },
      { field: RegistrationPage.lastNameErrorMessage },
      { field: RegistrationPage.emailErrorMessage },
      { field: RegistrationPage.passwordErrorMessage },
      { field: RegistrationPage.passwordConfirmationErrorMessage },
    ];

    for (const { field } of requiredFields) {
      if (await field.isDisplayed()) {
        await this.verifyMessage(field, requiredErrorMessage);
      }
    }
  }

  async verifyInvalidEmailError() {
    await this.verifyMessage(RegistrationPage.emailErrorMessage, "Please enter a valid email address (Ex: johndoe@domain.com).");
  }

  async verifyPasswordLengthError() {
    await this.verifyMessage(RegistrationPage.passwordErrorMessage, "Minimum length of this field must be equal or greater than 8 symbols.");
  }

  async verifyPasswordCharacterClassError() {
    await this.verifyMessage(RegistrationPage.passwordErrorMessage, "Minimum of different classes of characters in password is 3.");
  }

  async verifyPasswordMismatchError() {
    await this.verifyMessage(RegistrationPage.passwordConfirmationErrorMessage, "Please enter the same value again.");
  }

  async verifyExistingEmailError() {
    await this.verifyMessage(RegistrationPage.registrationErrorMessage, "There is already an account with this email address.");
  }
}

module.exports = new RegistrationUtility();
