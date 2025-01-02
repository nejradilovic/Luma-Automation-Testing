const { expect } = require("@wdio/globals");

class CommonUtility {
  async checkUrlContains(expectedSubstring) {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(expectedSubstring);
  }

  async verifyMessage(messageSelector, expectedMessage) {
    const actualMessage = await messageSelector.getText();
    expect(actualMessage).toContain(expectedMessage);
  }
}

module.exports = CommonUtility;
