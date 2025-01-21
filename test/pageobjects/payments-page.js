const Page = require("./page");
const Button = require("../utilities/elements/button");
const selectors = require("../utilities/selectors");
const { is } = require("css-select");

class PaymentsPage extends Page {
    open() {
        return super.open("customer/#payment");
    }

    get buttonPlaceOrder() {
        return new Button(selectors.paymentsPage.placeOrderButton);
    }

    async placeOrder() {
        if(this.buttonPlaceOrder.isExisting()){
            const isDisplayed = await this.buttonPlaceOrder.isDisplayed();
            if(isDisplayed) await this.buttonPlaceOrder.click();
        }
    }
}

module.exports = new PaymentsPage();