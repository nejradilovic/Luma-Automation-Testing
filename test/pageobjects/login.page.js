const { $ } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  open() {
    return super.open("customer/account/login/");
  }

  get inputEmail() {
    return $("//input[@id='email']");
  }

  get inputPassword() {
    return $("//input[@id='pass']");
  }

  get signInButton() {
    return $("//button[@id='send2']");
  }

  get signUpErrorMessage() {
    return $("//div[contains(@class, 'page messages')]");
  }

  get emailErrorMessage() {
    return $("//div[@id='email-error']");
  }

  get passwordErrorMessage() {
    return $("//div[@id='pass-error']");
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.signInButton.click();
  }

  async isEmailErrorDisplayed() {
    return await this.emailErrorMessage.isDisplayed();
  }

  async isPasswordErrorDisplayed() {
    return await this.passwordErrorMessage.isDisplayed();
  }

  async checkErrorMessage(messageSelector, expectedMessage) {
    const message = await messageSelector.getText();
    expect(message).toContain(expectedMessage);
  }
}

module.exports = new LoginPage();
