const LoginPage = require("../pageobjects/login-page");
const HomePage = require("../pageobjects/home-page");
const testData = require("../data/test-data");
const CommonUtility = require("./common-utility")

class LoginUtility extends CommonUtility {
  async loginUser({ email = "", password = "" } = {}) {
    await LoginPage.open();
    await LoginPage.inputEmail.setValue(email);
    await LoginPage.inputPassword.setValue(password);
    await LoginPage.signInButton.click();
  }

  async verifySuccessfulLogin() {
    const expectedMessage = `Welcome, ${testData.existingUser.firstName} ${testData.existingUser.lastName}!`;
    const actualMessage = await HomePage.welcomeMessage.waitForDisplayed();
    await this.verifyMessage(HomePage.welcomeMessage, expectedMessage);
  }

  async verifyRequiredFieldErrors() {
    const emailErrorDisplayed = await LoginPage.isEmailErrorDisplayed();
    const passwordErrorDisplayed = await LoginPage.isPasswordErrorDisplayed();
    const errorMessage = "This is a required field.";
    
    if (emailErrorDisplayed) {
      await this.verifyMessage(LoginPage.emailErrorMessage, errorMessage);
    }

    if (passwordErrorDisplayed) {
      await this.verifyMessage(LoginPage.passwordErrorMessage, errorMessage);
    }

    return emailErrorDisplayed || passwordErrorDisplayed; 
  }

  async verifyInvalidEmailError() {
    expect(await LoginPage.isEmailErrorDisplayed()).toBe(true);
    await this.verifyMessage(LoginPage.emailErrorMessage, "Please enter a valid email address");
  }

  async verifySignInError() {
    expect(await LoginPage.signUpErrorMessage.isDisplayed()).toBe(true);
    await this.verifyMessage(LoginPage.signUpErrorMessage, "The account sign-in was incorrect");
  }
}

module.exports = new LoginUtility();
