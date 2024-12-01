const BaseElement = require("./base-element");

class SelectField extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async setValue(value) {
    await this.element.selectByAttribute("value", value);  
  }

  async getSelectedOption() {
    return await this.element.getText();
  }

  async selectByVisibleText(text) {
    await this.element.selectByVisibleText(text);
  }
  
}

module.exports = SelectField;
