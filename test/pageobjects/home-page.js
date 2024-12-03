const Page = require("./page");
const Button = require("../utilities/elements/button");
const InputField = require("../utilities/elements/input-field");
const BaseElement = require("../utilities/elements/base-element");
const selectors = require("../utilities/selectors");

class HomePage extends Page {
    open() {
        return super.open("");
    }

    get signInButton() {
        return new Button(selectors.homePage.signInButton);
    }

    get createAccountLink() {
        return new Button(selectors.homePage.createAccountLink);
    }

    get welcomeMessage() {
        return new BaseElement(selectors.homePage.welcomeMessage);
    }

    get welcomeDropdownButton() {
        return new Button(selectors.homePage.welcomeDropdownButton);
    }

    get signOutButton() {
        return new Button(selectors.homePage.signOutButton);
    }

    get searchBar() {
        return new InputField(selectors.homePage.searchBar);
    }

    get searchButton() {
        return new Button(selectors.homePage.searchButton);
    }

    get searchResults() {
        return new BaseElement(selectors.homePage.searchResults);
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