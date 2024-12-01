const Page = require("./page");
const Button = require("../utilities/elements/button");
const InputField = require("../utilities/elements/input-field");
const BaseElement = require("../utilities/elements/base-element");

class HomePage extends Page {
  open() {
    return super.open("");
  }

  get signInButton() {
    return new Button('//li[@class="authorization-link"]/a[contains(text(), "Sign In")]');
  }

  get createAccountLink() {
    return new Button("/html/body/div[2]/header/div[1]/div/ul/li[3]/a");
  }

  get welcomeMessage() {
    return new BaseElement(".logged-in");
  }

  get welcomeDropdownButton() {
    return new Button('button[data-action="customer-menu-toggle"]');
  }

  get signOutButton() {
    return new Button('a[href*="customer/account/logout"]');
  }

  get searchBar() {
    return new InputField('//input[@name="q"]');
  }

  get searchButton() {
    return new Button('//button[@type="submit" and @aria-label="Search"]');
  }

  get searchResults() {
    return new BaseElement(".product-item-link");
  }

  async navigateToLoginPage() {
    await this.signInButton.click();
  }

  async navigateToCreateAccountPage() {
    await this.createAccountLink.click();
  }

  async signOut() {
    await this.welcomeDropdownButton.click();
    await this.signOutButton.click();
  }

  async searchForProduct(productName, clickButton = false) {
    await this.searchBar.setValue(productName);
    if (clickButton) 
      await this.searchButton.click();
    else 
      await browser.keys("Enter");
  }

  async openProductDetail(index) {
    const results = await this.searchResults.getElements();
    if (results.length > index) {
      await results[index].click();
    }
  }
}

module.exports = new HomePage();
