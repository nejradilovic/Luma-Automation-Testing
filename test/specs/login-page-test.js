const { expect } = require("@wdio/globals");
const LoginUtility = require("../utilities/login-utility");
const testData = require("../data/test-data");

describe("Login Page Tests", () => {
  it("should login successfully with valid credentials", async () => {
    await LoginUtility.loginUser(testData.user.email, testData.user.password);
    await LoginUtility.verifySuccessfulLogin();
  });
});
