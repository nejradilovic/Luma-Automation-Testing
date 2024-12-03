const Page = require("./page");
const SelectField = require("../utilities/elements/select-field");
const Button = require("../utilities/elements/button");
const BaseElement = require("../utilities/elements/base-element");
const selectors = require("../utilities/selectors");

class SearchPage extends Page {

  get sizeFilter() {
    return new BaseElement(selectors.searchPage.sizeFilter);
  }

  get colorFilter() {
    return new BaseElement(selectors.searchPage.colorFilter);
  }

  getSizeFilterOption(size) {
    return new BaseElement(selectors.searchPage.sizeFilterOption(size));
  }

  getColorFilterOption(color) {
    return new BaseElement(selectors.searchPage.colorFilterOption(color));
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
    return new Button(selectors.searchPage.categoryMenu(category));
  }

  getFirstLevelSubCategoryMenu(category, subcategory) {
    return new Button(selectors.searchPage.firstLevelSubCategoryMenu(category, subcategory));
  }

  getSecondLevelSubCategoryMenu(category, subcategory, secondLevel) {
    return new Button(selectors.searchPage.secondLevelSubCategoryMenu(category, subcategory, secondLevel));
  }

  get sortByDropdown() {
    return new SelectField(selectors.searchPage.sortByDropdown);
  }

  get sortDirectionArrow() {
    return new Button(selectors.searchPage.sortDirectionArrow);
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