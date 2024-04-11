import { Element, ElementPage } from '../element';

import './text.css';

const nameApp: ElementPage = {
  tag: 'p',
  class: 'main_app',
};

class Text extends Element {
  text: string;

  constructor(element: ElementPage, text: string) {
    super(element);
    this.text = text;
    console.log(this.text);
  }

  createElement() {
    const newText = super.createElement();
    newText.textContent = this.text;
    return newText;
  }
}

export const appName = new Text(nameApp, 'FUN CHAT');
