require('dotenv').config();

const commonUserDetails = {
  firstName: "Nejra",
  lastName: "Adilović",
  streetAddress: "Milana Preloga 12A",
  city: "Sarajevo",
  postalCode: "71000",
  phoneNumber: "061123345",
  country: "Bosnia & Herzegovina"
};

const testData = {
  newUser: {
    ...commonUserDetails,
    email: `testuser${Date.now()}@example.com`,
    password: "NewPass123!",
    confirmPassword: "NewPass123!"
  },
  existingUser: {
    ...commonUserDetails,
    email: env.LOGIN_EMAIL,
    password: env.LOGIN_PASSWORD 
  },
  negativeTestCases: {
    email: {
      invalidFormat: "invalid-email-format",
      unregisteredEmail: "unregistered@testing.com"
    },
    password: {
      incorrectPassword: "wrongPassword",
      shortPassword: "1234",
      mismatchedConfirmPassword: "mismatchConfirmPassword"
    },
    emptyField: ""
  },
  categories: {
    women: {
      categoryName: 'Women',
      subcategory: 'Bottoms',
      secondLevelSubcategory: 'Shorts'
    },
    men: {
      categoryName: 'Men',
      subcategory: 'Tops',
      secondLevelSubcategory: 'Jackets'
    },
    gear: {
      categoryName: 'Gear',
    },
  },
  product: {
    searchTerm: "jacket",
    size: "S",
    color: "Purple",
    quantity: 1
  }
};

module.exports = testData;
