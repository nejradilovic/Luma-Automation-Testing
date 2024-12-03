const BaseElement = require("./base-element");

class InputField extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async setValue(value) {
    await this.element.setValue(value);
  }

  async clearValue() {
    await this.element.clearValue();
  }

  async getValue() {
    return await this.element.getValue();
  }  
}

module.exports = InputField;
