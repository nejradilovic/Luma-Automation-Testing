const SearchPage = require("../pageobjects/search-page");
const CommonUtility = require("../utilities/common-utility");

class SearchUtility {
  async navigateToCategory(category, subcategory = null, secondLevelSubcategory = null) {
    const mainCategory = await SearchPage.getCategoryMenu(category);
    await mainCategory.waitForExist();
    await mainCategory.moveTo();
  
    if (subcategory) {
      const firstLevelSubCategory = await SearchPage.getFirstLevelSubCategoryMenu(category, subcategory);
      await firstLevelSubCategory.waitForExist();
      await firstLevelSubCategory.moveTo();
  
      if (secondLevelSubcategory) {
        const secondLevelSubCategory = await SearchPage.getSecondLevelSubCategoryMenu(category, subcategory, secondLevelSubcategory);
        await secondLevelSubCategory.waitForExist();
        await secondLevelSubCategory.click();
        return;
      }
      await firstLevelSubCategory.click();
      return;
    }
    await mainCategory.click();
  }
  
  async verifyCategoryPage(category, subcategory = null, secondLevelSubcategory = null) {
    let expectedUrl = `https://magento.softwaretestingboard.com/${category.toLowerCase()}`;

    if (subcategory) {
      expectedUrl += `/${subcategory.toLowerCase()}-${category.toLowerCase()}`;
    }
    if (secondLevelSubcategory) {
      expectedUrl += `/${secondLevelSubcategory.toLowerCase()}-${category.toLowerCase()}`;
    }

    await CommonUtility.checkUrlContains(expectedUrl);
  }

  async applySizeFilter(size) {
    await SearchPage.applySizeFilter(size);
  }

  async applyColorFilter(color) {
    await SearchPage.applyColorFilter(color);
  }

  async verifySizeFilter(size) {
    const products = await $$("//div[@class='product-item']");
    for (let product of products) {
      const productSize = await product.$("//div[contains(@class, 'size')]").getText();
      if (!productSize.includes(size)) {
        return false;
      }
    }
    return true;
  }

  async verifyColorFilter(color) {
    const products = await $$("//div[@class='product-item']");
    for (let product of products) {
      const productColor = await product.$("//div[contains(@class, 'color')]").getText();
      if (!productColor.includes(color)) {
        return false;
      }
    }
    return true;
  }

  async applyFiltersAndVerify(size, color) {
    let isSizeCorrect = true;
    let isColorCorrect = true;

    if (size) {
      await this.applySizeFilter(size);
      isSizeCorrect = await this.verifySizeFilter(size);
    }
    if (color) {
      await this.applyColorFilter(color);
      isColorCorrect = await this.verifyColorFilter(color);
    }

    return isSizeCorrect && isColorCorrect;
  }
  
  async applySorting(option, ascending = true) {
    await SearchPage.selectSortOption(option);
    const isCurrentlyAscending = await SearchPage.isAscending();
    
    if (ascending !== isCurrentlyAscending) {
      await SearchPage.toggleSortDirection();
    }
  }

  async verifySorting(orderBy, ascending = true) {
    const products = await $$("//div[@class='product-item']");
    let values = [];

    for (let product of products) {
        let value;
        if (orderBy === "price") {
            value = await product.$(".price").getText();
            values.push(parseFloat(value.replace(/[^\d.]/g, "")));
        } else if (orderBy === "name") {
            value = await product.$(".product-name").getText();
            values.push(value.toLowerCase());
        }
    }

    const sortedValues = [...values].sort((a, b) => (orderBy === "price" ? a - b : a.localeCompare(b)));
    if (!ascending) sortedValues.reverse();

    return JSON.stringify(values) === JSON.stringify(sortedValues);
}

}

module.exports = new SearchUtility();
