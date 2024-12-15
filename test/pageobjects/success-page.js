const Page = require("./page");
const BaseElement = require("../utilities/elements/base-element");
const Button = require("../utilities/elements/button");
const selectors = require("../utilities/selectors");

class SuccessPage extends Page {
  open() {
    return super.open("");
  }

  get spanThankYouMessage() {
    return new BaseElement(selectors.successPage.spanThankYouMessage);
  }

  get continueShoppingButton() {
    return new Button(selectors.successPage.continueShoppingButton);
  }
}

module.exports = new SuccessPage();