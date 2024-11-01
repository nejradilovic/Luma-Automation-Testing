const { $ } = require("@wdio/globals");
const Page = require("./page");

class SuccessPage extends Page {
  open() {
    return super.open("");
  }

  get spanThankYouMessage() {
    return $("//span[@class='base' and @data-ui-id='page-title-wrapper']");
  }
  get continueShoppingButton() {
    return $("a.action.primary.continue");
  }
}

module.exports = new SuccessPage();
