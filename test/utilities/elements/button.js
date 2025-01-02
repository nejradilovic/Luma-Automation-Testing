const BaseElement = require("./base-element");

class Button extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async isEnabled() {
    return this.element.isEnabled();
  }

  async moveTo() {
    await this.element.moveTo();
  }
}

module.exports = Button;
