const { $ } = require("@wdio/globals");
const Page = require("./page");

class HomePage extends Page {
  open() {
    return super.open("");
  }

  get signInButton() {
    return $(
      '//li[@class="authorization-link"]/a[contains(text(), "Sign In")]'
    );
  }

  get welcomeMessage() {
    return $(".logged-in");
  }

  get welcomeDropdownButton() {
    return $('button[data-action="customer-menu-toggle"]');
  }

  get signOutButton() {
    return $('a[href*="customer/account/logout"]');
  }

  get searchBar() {
    return $('//input[@name="q"]');
  }

  get searchButton() {
    return $('//button[@type="submit" and @aria-label="Search"]');
  }

  get searchResults() {
    return $$(".product-item-link");
  }

  async navigateToLoginPage() {
    await this.signInButton.click();
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
    const results = await this.searchResults;
    if (results.length > index) await results[index].click();
  }
}

module.exports = new HomePage();
