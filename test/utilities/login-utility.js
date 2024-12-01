const LoginPage = require("../pageobjects/login-page");
const HomePage = require("../pageobjects/home-page");
const testData = require("../data/test-data");

class LoginUtility {
  async loginUser(email, password) {
    await LoginPage.open();
    await LoginPage.inputEmail.setValue(email);
    await LoginPage.inputPassword.setValue(password);
    await LoginPage.signInButton.click();
  }

  async verifySuccessfulLogin() {
    const welcomeMessage = await HomePage.welcomeMessage.getText();
    expect(welcomeMessage).toBe(`Welcome, ${testData.existingUser.firstName} ${testData.existingUser.lastName}!`);
  }

  async verifyRequiredFieldErrors() {
    const emailErrorDisplayed = await LoginPage.isEmailErrorDisplayed();
    const passwordErrorDisplayed = await LoginPage.isPasswordErrorDisplayed();
    const errorMessage = "This is a required field.";
    
    if (emailErrorDisplayed) {
      await this.verifyErrorMessage(LoginPage.emailErrorMessage, errorMessage);
    }

    if (passwordErrorDisplayed) {
      await this.verifyErrorMessage(LoginPage.passwordErrorMessage, errorMessage);
    }

    return emailErrorDisplayed || passwordErrorDisplayed; 
  }

  async verifyInvalidEmailError() {
    expect(await LoginPage.isEmailErrorDisplayed()).toBe(true);
    await this.verifyErrorMessage(LoginPage.emailErrorMessage, "Please enter a valid email address");
  }

  async verifySignInError() {
    expect(await LoginPage.signUpErrorMessage.isDisplayed()).toBe(true);
    await this.verifyErrorMessage(LoginPage.signUpErrorMessage, "The account sign-in was incorrect");
  }

  async verifyErrorMessage(messageSelector, expectedMessage) {
    const message = await messageSelector.getText();
    expect(message).toContain(expectedMessage);
  }
}

module.exports = new LoginUtility();
