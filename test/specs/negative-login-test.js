const { expect } = require("@wdio/globals");
const LoginUtility = require("../utilities/login-utility");

describe("Negative Login Test Cases", () => {
  it("should show error messages for empty email and password fields", async () => {
    await LoginUtility.loginUser("", "");
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for empty password", async () => {
    await LoginUtility.loginUser("nadilovic@test.com", "");
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for empty email", async () => {
    await LoginUtility.loginUser("", "Pass123!");
    await LoginUtility.verifyRequiredFieldErrors();
  });

  it("should show error message for invalid email format", async () => {
    await LoginUtility.loginUser("invalid-email-format", "somePassword");
    await LoginUtility.verifyInvalidEmailError();
  });

  it("should show error message for incorrect password", async () => {
    await LoginUtility.loginUser("nadilovic@test.com", "wrongPassword");
    await LoginUtility.verifySignInError();
  });

  it("should show error messages for unregistered email and incorrect password", async () => {
    await LoginUtility.loginUser("unregistered@testing.com", "wrongPassword");
    await LoginUtility.verifySignInError();
  });
});
