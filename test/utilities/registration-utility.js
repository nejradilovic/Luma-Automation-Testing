const RegistrationPage = require("../pageobjects/registration-page");

class RegistrationUtility {
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
    const successMessage = await RegistrationPage.registrationSuccessMessage.getText();
    expect(successMessage).toContain("Thank you for registering with Main Website Store.");
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
        await this.verifyErrorMessage(field, requiredErrorMessage);
      }
    }
  }

  async verifyInvalidEmailError() {
    await this.verifyErrorMessage(RegistrationPage.emailErrorMessage, "Please enter a valid email address (Ex: johndoe@domain.com).");
  }

  async verifyPasswordLengthError() {
    await this.verifyErrorMessage(RegistrationPage.passwordErrorMessage, "Minimum length of this field must be equal or greater than 8 symbols.");
  }

  async verifyPasswordCharacterClassError() {
    await this.verifyErrorMessage(RegistrationPage.passwordErrorMessage, "Minimum of different classes of characters in password is 3.");
  }

  async verifyPasswordMismatchError() {
    await this.verifyErrorMessage(RegistrationPage.passwordConfirmationErrorMessage, "Please enter the same value again.");
  }

  async verifyExistingEmailError() {
    await this.verifyErrorMessage(RegistrationPage.registrationErrorMessage, "There is already an account with this email address.");
  }

  async verifyErrorMessage(messageSelector, expectedMessage) {
    const message = await messageSelector.getText();
    expect(message).toContain(expectedMessage);
  }
}

module.exports = new RegistrationUtility();
