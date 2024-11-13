const { expect } = require("@wdio/globals");
const LoginUtility = require("../utilities/login-utility");
const testData = require("../data/test-data");

describe("Negative Login Test Cases", () => {
  it("should show error messages for empty email and password fields", async () => {
    await LoginUtility.loginUser(testData.negativeTestCases.emptyField, testData.negativeTestCases.emptyField);
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for empty password", async () => {
    await LoginUtility.loginUser(testData.existingUser.email, testData.negativeTestCases.emptyField);
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for empty email", async () => {
    await LoginUtility.loginUser(testData.negativeTestCases.emptyField, testData.existingUser.password);
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for invalid email format", async () => {
    await LoginUtility.loginUser(testData.negativeTestCases.invalidEmailFormat, testData.existingUser.password);
    await LoginUtility.verifyInvalidEmailError();
  });

  it("should show error message for incorrect password", async () => {
    await LoginUtility.loginUser(testData.existingUser.email, testData.negativeTestCases.incorrectPassword);
    await LoginUtility.verifySignInError();
  });

  it("should show error messages for unregistered email and incorrect password", async () => {
    await LoginUtility.loginUser(testData.negativeTestCases.unregisteredEmail, testData.negativeTestCases.incorrectPassword);
    await LoginUtility.verifySignInError();
  });
});
