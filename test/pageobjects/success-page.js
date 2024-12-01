const Page = require("./page");
const BaseElement = require("../utilities/elements/base-element");
const Button = require("../utilities/elements/button");

class SuccessPage extends Page {
  open() {
    return super.open("");
  }

  get spanThankYouMessage() {
    return new BaseElement("//span[@class='base' and @data-ui-id='page-title-wrapper']");
  }

  get continueShoppingButton() {
    return new Button("a.action.primary.continue");
  }
}

module.exports = new SuccessPage();
