const RegistrationUtility = require("../utilities/registration-utility");
const testData = require("../data/test-data");

const {firstName, lastName, email, password, confirmPassword} = testData.newUser;

describe("Registration Page Tests", () => {
  it("should create a new account successfully with valid credentials", async () => {
    await RegistrationUtility.registerUser(firstName, lastName, email, password, confirmPassword);
    await RegistrationUtility.verifySuccessfulRegistration();
  });
});
