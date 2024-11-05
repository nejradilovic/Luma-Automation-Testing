const { expect } = require("@wdio/globals");
const LoginUtility = require("../utilities/login-utility");
const testData = require("../data/test-data");

describe("Negative Login Test Cases", () => {
  it("should show error messages for empty email and password fields", async () => {
    await LoginUtility.loginUser(testData.negativeUserCases.emptyEmail, testData.negativeUserCases.emptyPassword);
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for empty password", async () => {
    await LoginUtility.loginUser(testData.user.email, testData.negativeUserCases.emptyPassword);
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for empty email", async () => {
    await LoginUtility.loginUser(testData.negativeUserCases.emptyEmail, testData.user.password);
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for invalid email format", async () => {
    await LoginUtility.loginUser(testData.negativeUserCases.invalidEmailFormat, testData.user.password);
    await LoginUtility.verifyInvalidEmailError();
  });

  it("should show error message for incorrect password", async () => {
    await LoginUtility.loginUser(testData.user.email, testData.negativeUserCases.incorrectPassword);
    await LoginUtility.verifySignInError();
  });

  it("should show error messages for unregistered email and incorrect password", async () => {
    await LoginUtility.loginUser(testData.negativeUserCases.unregisteredEmail, testData.negativeUserCases.incorrectPassword);
    await LoginUtility.verifySignInError();
  });
});
