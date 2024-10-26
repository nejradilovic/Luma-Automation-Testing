const { $ } = require("@wdio/globals");
const Page = require("./page");

class SuccessPage extends Page {
  open() {
    return super.open("");
  }

  get spanThankYouMeassage() {
    return $("//span[@class='base' and @data-ui-id='page-title-wrapper']");
  }
}

module.exports = new SuccessPage();
