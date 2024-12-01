const Page = require("./page");
const Button = require("../utilities/elements/button");

class PaymentsPage extends Page {
  open() {
    return super.open("customer/#payment");
  }

  get buttonPlaceOrder() {
    return new Button(`button[title='Place Order']`);
  }

  async placeOrder() {
    await this.buttonPlaceOrder.click();
  }
}
module.exports = new PaymentsPage();
