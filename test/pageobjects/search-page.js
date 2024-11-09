const { $ } = require("@wdio/globals");
const Page = require("./page");

class SearchPage extends Page {

  get sizeFilter() {
    return $("//div[@data-role='title' and text()='Size']");
  }

  get colorFilter() {
    return $("//div[@data-role='title' and text()='Color']");
  }

  getSizeFilterOption(size) {
    return $(`.swatch-attribute-options a[aria-label='${size}'] .swatch-option.text`);
  }  

  getColorFilterOption(color) {
    return $(`.swatch-attribute-options a[aria-label='${color}'] .swatch-option.color`);
  }

  async openSizeFilter() {
    await this.sizeFilter.click();
  }

  async openColorFilter() {
    await this.colorFilter.click();
  }

  async applySizeFilter(size) {
    await this.openSizeFilter();  
    const sizeOption = this.getSizeFilterOption(size); 
    await sizeOption.waitForClickable(); 
    await sizeOption.click();  
  }

  async applyColorFilter(color) {
    await this.openColorFilter();  
    const colorOption = this.getColorFilterOption(color); 
    await colorOption.waitForClickable(); 
    await colorOption.click();  
  }
  
  getCategoryMenu(category) {
    return $(`//a[@href="https://magento.softwaretestingboard.com/${category.toLowerCase()}.html"]`);
  }

  getFirstLevelSubCategoryMenu(category, subcategory) {
    return $(`//a[@href="https://magento.softwaretestingboard.com/${category.toLowerCase()}/${subcategory.toLowerCase()}-${category.toLowerCase()}.html"]`);
  }

  getSecondLevelSubCategoryMenu(category, subcategory, secondLevel) {
    return $(`//a[@href="https://magento.softwaretestingboard.com/${category.toLowerCase()}/${subcategory.toLowerCase()}-${category.toLowerCase()}/${secondLevel.toLowerCase()}-${category.toLowerCase()}.html"]`);
  }
}

module.exports = new SearchPage();
