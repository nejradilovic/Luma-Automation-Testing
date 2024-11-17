const { expect } = require("@wdio/globals");

class CommonUtility {
  async checkUrlContains(expectedSubstring) {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(expectedSubstring);
  }
}

module.exports = new CommonUtility();
