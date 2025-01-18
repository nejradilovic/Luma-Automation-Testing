class BaseElement {
  constructor(selector) {
    this.selector = selector;
  }

  get element() {
    return $(this.selector);
  }

  async getElements() {
    return await $$(`${this.selector}`);
  }

  async click() {
    await this.element.waitForClickable();
    await this.element.click();
  }

  async getText() {
    await this.element.waitForDisplayed();
    return await this.element.getText();
  }

  async isDisplayed() {
    await this.element.waitForDisplayed();
    return await this.element.isDisplayed();
  }

  async isExisting() {
    await this.element.waitForExist();
    return await this.element.isExisting();
  }

  async waitForClickable() {
    await this.element.waitForClickable();
  }

  async waitForDisplayed() {
    await this.element.waitForDisplayed();
  }

  async getAttribute(attributeName) {
    return await this.element.getAttribute(attributeName);
  }

  async waitForExist() {
    await this.element.waitForExist();
  }
}

module.exports = BaseElement;
