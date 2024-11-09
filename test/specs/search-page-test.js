const SearchUtility = require("../utilities/search-utility");
const HomePage = require("../pageobjects/home-page");
const testData = require("../data/test-data");

describe("Product Search Filter Tests", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it('should navigate to "Gear"', async () => {
    const category = testData.categories.gear;
    await SearchUtility.navigateToCategory(category.categoryName);
    await SearchUtility.verifyCategoryPage(category.categoryName);
  });

  it('should navigate to "Men" > "Tops"', async () => {
    const category = testData.categories.men;
    await SearchUtility.navigateToCategory(category.categoryName, category.subcategory);
    await SearchUtility.verifyCategoryPage(category.categoryName, category.subcategory);
  });

  it('should navigate to "Women" > "Bottoms" > "Shorts"', async () => {
    const category = testData.categories.women;
    await SearchUtility.navigateToCategory(category.categoryName, category.subcategory, category.secondLevelSubcategory);
    await SearchUtility.verifyCategoryPage(category.categoryName, category.subcategory, category.secondLevelSubcategory);
  });

  it('should filter products by selected size  and verify results', async () => {
    const category = testData.categories.women;
    await SearchUtility.navigateToCategory(category.categoryName, category.subcategory, category.secondLevelSubcategory);
    
    const size = '32';
    await SearchUtility.applySizeFilter(size);
    const allMatch = await SearchUtility.verifySizeFilter(size);
    expect(allMatch).toBe(true); 
  });

  it('should filter products by selected color  and verify results', async () => {
    const category = testData.categories.men;
    await SearchUtility.navigateToCategory(category.categoryName, category.subcategory, category.secondLevelSubcategory);
    
    const color = 'Blue';
    await SearchUtility.applyColorFilter(color);
    const allMatch = await SearchUtility.verifyColorFilter(color);
    expect(allMatch).toBe(true); 
  });

  it('validate that filters can be combined', async () => {
    const category = testData.categories.men;
    await SearchUtility.navigateToCategory(category.categoryName, category.subcategory, category.secondLevelSubcategory);
    
    const filtersApplied = await SearchUtility.applyFiltersAndVerify('L', 'Blue');
    expect(filtersApplied).toBe(true);
  });
});
