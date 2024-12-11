const LoginUtility = require("../utilities/login-utility");
const testData = require("../data/test-data");

describe("Login Page Tests", () => {
  it("should login successfully with valid credentials", async () => {
    const {email, password} = testData.existingUser;
    await LoginUtility.loginUser({email: email, password: password});
    await LoginUtility.verifySuccessfulLogin();
  });
});
