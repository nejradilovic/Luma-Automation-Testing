const { expect } = require("@wdio/globals");

class CommonUtility {
  async checkUrlContains(expectedSubstring) {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(expectedSubstring);
  }

  async verifyMessage(messageSelector, expectedMessage) {
    await messageSelector.waitForDisplayed(); 
    const actualMessage = await messageSelector.getText();
    expect(actualMessage).toContain(expectedMessage);
  }
}

module.exports = CommonUtility;
