const { $ } = require("@wdio/globals");
const Page = require("./page");

class PaymentsPage extends Page {
  open() {
    return super.open("customer/#payment");
  }

  get buttonPlaceOrder() {
    return $(`button[title='Place Order']`);
  }
}
module.exports = new PaymentsPage();
