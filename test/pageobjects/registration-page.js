const Page = require("./page");
const InputField = require("../utilities/elements/input-field");
const Button = require("../utilities/elements/button");
const BaseElement = require("../utilities/elements/base-element");
const selectors = require("../utilities/selectors");

class RegistrationPage extends Page {
    open() {
        return super.open("customer/account/create/");
    }

    get inputFirstName() {
        return new InputField(selectors.registrationPage.inputFirstName);
    }

    get inputLastName() {
        return new InputField(selectors.registrationPage.inputLastName);
    }

    get inputEmail() {
        return new InputField(selectors.registrationPage.inputEmail);
    }

    get inputPassword() {
        return new InputField(selectors.registrationPage.inputPassword);
    }

    get inputConfirmPassword() {
        return new InputField(selectors.registrationPage.inputConfirmPassword);
    }

    get buttonSubmit() {
        return new Button(selectors.registrationPage.buttonSubmit);
    }

    get pageTitle() {
        return new BaseElement(selectors.registrationPage.pageTitle);
    }

    get registrationSuccessMessage() {
        return new BaseElement(selectors.registrationPage.registrationSuccessMessage);
    }

    get registrationErrorMessage() {
        return new BaseElement(selectors.registrationPage.registrationErrorMessage);
    }

    get emailErrorMessage() {
        return new BaseElement(selectors.registrationPage.emailErrorMessage);
    }

    get passwordErrorMessage() {
        return new BaseElement(selectors.registrationPage.passwordErrorMessage);
    }

    get passwordConfirmationErrorMessage() {
        return new BaseElement(selectors.registrationPage.passwordConfirmationErrorMessage);
    }

    get firstNameErrorMessage() {
        return new BaseElement(selectors.registrationPage.firstNameErrorMessage);
    }

    get lastNameErrorMessage() {
        return new BaseElement(selectors.registrationPage.lastNameErrorMessage);
    }
}

module.exports = new RegistrationPage();