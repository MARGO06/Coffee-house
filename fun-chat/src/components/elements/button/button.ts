import { Element, ElementPage } from '../element';

import './button.css';

const loginButton: ElementPage = {
  tag: 'button',
  class: 'login_button',
};

const infoButton: ElementPage = {
  tag: 'button',
  class: 'info_button',
};

class Button extends Element {
  type: string;
  text: string;

  constructor(element: ElementPage, type: string, text: string) {
    super(element);
    this.type = type;
    this.text = text;
  }

  createElement() {
    const button = super.createElement();
    button.setAttribute('type', this.type);
    button.textContent = this.text;
    return button;
  }
}

export const buttonLogin = new Button(loginButton, 'submit', 'Login');
export const buttonInfo = new Button(infoButton, 'button', 'Information');
