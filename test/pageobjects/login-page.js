const Page = require("./page");
const BaseElement = require("../utilities/elements/base-element");
const Button = require("../utilities/elements/button");
const InputField = require("../utilities/elements/input-field");
const selectors = require("../utilities/selectors");

class LoginPage extends Page {
    open() {
        return super.open("customer/account/login/");
    }

    get inputEmail() {
        return new InputField(selectors.loginPage.emailInput);
    }

    get inputPassword() {
        return new InputField(selectors.loginPage.passwordInput);
    }

    get signInButton() {
        return new Button(selectors.loginPage.signInButton);
    }

    get signUpErrorMessage() {
        return new BaseElement(selectors.loginPage.signUpErrorMessage);
    }

    get emailErrorMessage() {
        return new BaseElement(selectors.loginPage.emailErrorMessage);
    }

    get passwordErrorMessage() {
        return new BaseElement(selectors.loginPage.passwordErrorMessage);
    }

    async isEmailErrorDisplayed() {
        return await this.emailErrorMessage.isDisplayed();
    }

    async isPasswordErrorDisplayed() {
        return await this.passwordErrorMessage.isDisplayed();
    }
}

module.exports = new LoginPage();
