const Page = require("./page");
const Button = require("../utilities/elements/button");
const selectors = require("../utilities/selectors");

class PaymentsPage extends Page {
    open() {
        return super.open("customer/#payment");
    }

    get buttonPlaceOrder() {
        return new Button(selectors.paymentsPage.placeOrderButton);
    }

    async placeOrder() {
        await this.buttonPlaceOrder.waitForDisplayed();
        await this.buttonPlaceOrder.click();
    }
}

module.exports = new PaymentsPage();