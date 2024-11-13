const testData = {
  newUser: {
    firstName: "Nejra",
    lastName: "Adilović",
    email: `testuser${Date.now()}@example.com`,
    password: "NewPass123!",
    confirmPassword: "NewPass123!",
    streetAddress: "Milana Preloga 12A",
    city: "Sarajevo",
    postalCode: "71000",
    phoneNumber: "061123345",
    country: "Bosnia & Herzegovina",
  },
  existingUser: {
    firstName: "Nejra",
    lastName: "Adilović",
    email: "[valid_email]",
    password: "[valid_password]",
    streetAddress: "Milana Preloga 12A",
    city: "Sarajevo",
    postalCode: "71000",
    phoneNumber: "061123345",
    country: "Bosnia & Herzegovina",
  },
  negativeTestCases: {
    emptyField: "",
    invalidEmailFormat: "invalid-email-format",
    unregisteredEmail: "unregistered@testing.com",
    incorrectPassword: "wrongPassword",
    shortPassword: "1234",
    mismatchedConfirmPassword: "mismatchConfirmPassword"
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
    quantity: 1,
  }
};

module.exports = testData;
