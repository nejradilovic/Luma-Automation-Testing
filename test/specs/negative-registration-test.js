const { expect } = require("@wdio/globals");
const RegistrationUtility = require("../utilities/registration-utility");
const testData = require("../data/test-data");
const RegistrationPage = require("../pageobjects/registration-page");

const {firstName, lastName, email, password, confirmPassword} = testData.newUser;

describe("Registration Page Negative Tests", () => {
  it("should display an error message for a password that is too short", async () => {
    await RegistrationUtility.registerUser(firstName, lastName, email, testData.negativeTestCases.shortPassword, testData.negativeTestCases.shortPassword);
    await RegistrationUtility.verifyPasswordLengthError();
  });

  it("should display an error message for an invalid email format", async () => {
    await RegistrationUtility.registerUser(firstName, lastName, testData.negativeTestCases.invalidEmailFormat, password, confirmPassword);
    await RegistrationUtility.verifyInvalidEmailError();
  });

  it("should display an error message when trying to create an account with an email that already exists", async () => {
    await RegistrationUtility.registerUser(firstName, lastName, testData.existingUser.email, password, confirmPassword);
    await RegistrationUtility.verifyExistingEmailError();

  });

  it("should display an error message when the password does not meet character class requirements", async () => {
    await RegistrationUtility.registerUser(firstName, lastName, email, testData.negativeTestCases.incorrectPassword, testData.negativeTestCases.incorrectPassword);
    await RegistrationUtility.verifyPasswordCharacterClassError();
  });

  it("should display an error message when the password and confirm password fields do not match", async () => {
    await RegistrationUtility.registerUser(firstName, lastName, email, password, testData.negativeTestCases.mismatchedConfirmPassword);
    await RegistrationUtility.verifyPasswordMismatchError();
  });

  it("should display an error message when one or more required fields are left blank", async () => {
    await RegistrationUtility.registerUser(testData.negativeTestCases.emptyField, lastName, testData.negativeTestCases.emptyField, password, confirmPassword);
    await RegistrationUtility.verifyRequiredFieldErrors();
  });
});
