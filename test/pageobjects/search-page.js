const Page = require("./page");
const SelectField = require("../utilities/elements/select-field");
const Button = require("../utilities/elements/button");
const BaseElement = require("../utilities/elements/base-element");

class SearchPage extends Page {

  get sizeFilter() {
    return new BaseElement("//div[@data-role='title' and text()='Size']");
  }

  get colorFilter() {
    return new BaseElement("//div[@data-role='title' and text()='Color']");
  }

  getSizeFilterOption(size) {
    return new BaseElement(`.swatch-attribute-options a[aria-label='${size}'] .swatch-option.text`);
  }  

  getColorFilterOption(color) {
    return new BaseElement(`.swatch-attribute-options a[aria-label='${color}'] .swatch-option.color`);
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
    await sizeOption.click();  
  }

  async applyColorFilter(color) {
    await this.openColorFilter();  
    const colorOption = this.getColorFilterOption(color); 
    await colorOption.click();  
  }
  
  getCategoryMenu(category) {
    return new Button(`//a[@href="https://magento.softwaretestingboard.com/${category.toLowerCase()}.html"]`);
  }

  getFirstLevelSubCategoryMenu(category, subcategory) {
    return new Button(`//a[@href="https://magento.softwaretestingboard.com/${category.toLowerCase()}/${subcategory.toLowerCase()}-${category.toLowerCase()}.html"]`);
  }

  getSecondLevelSubCategoryMenu(category, subcategory, secondLevel) {
    return new Button(`//a[@href="https://magento.softwaretestingboard.com/${category.toLowerCase()}/${subcategory.toLowerCase()}-${category.toLowerCase()}/${secondLevel.toLowerCase()}-${category.toLowerCase()}.html"]`);
  }

  get sortByDropdown() {
    return new SelectField("//select[@data-role='sorter']");  
  }

  get sortDirectionArrow() {
    return new Button("a[data-role='direction-switcher']");
  }

  async selectSortOption(optionValue) {
    await this.sortByDropdown.setValue(optionValue);
  }

  async toggleSortDirection() {
    await this.sortDirectionArrow.click();
  }

  async isAscending() {
    const directionClass = await this.sortDirectionArrow.getAttribute("class");
    return directionClass.includes("sort-asc");
  }
}

module.exports = new SearchPage();
