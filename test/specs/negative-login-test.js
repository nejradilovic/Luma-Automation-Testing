const LoginUtility = require("../utilities/login-utility");
const testData = require("../data/test-data");

const {email, password} = testData.existingUser;
const {password: {incorrectPassword}, email: {invalidFormat, unregisteredEmail}} = testData.negativeTestCases;

describe("Negative Login Test Cases", () => {
  it("should show error messages for empty email and password fields", async () => {
    await LoginUtility.loginUser();
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for empty password", async () => {
    await LoginUtility.loginUser({email: email});
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for empty email", async () => {
    await LoginUtility.loginUser({password: password});
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for invalid email format", async () => {
    await LoginUtility.loginUser({email: invalidFormat, password: password});
    await LoginUtility.verifyInvalidEmailError();
  });

  it("should show error message for incorrect password", async () => {
    await LoginUtility.loginUser({email: email, password: incorrectPassword});
    await LoginUtility.verifySignInError();
  });

  it("should show error messages for unregistered email and incorrect password", async () => {
    await LoginUtility.loginUser({email: unregisteredEmail, password: incorrectPassword});
    await LoginUtility.verifySignInError();
  });
});
