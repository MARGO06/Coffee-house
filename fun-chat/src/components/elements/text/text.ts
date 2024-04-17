import { Element, ElementPage } from '../element';

import './text.css';

const nameApp: ElementPage = {
  tag: 'p',
  class: 'main_app',
};

const nameSchool: ElementPage = {
  tag: 'p',
  class: 'footer_name-school',
};

const year: ElementPage = {
  tag: 'p',
  class: 'footer_year',
};

const destination: ElementPage = {
  tag: 'p',
  class: 'main_destination-name',
};

const destinationStatus: ElementPage = {
  tag: 'p',
  class: 'main_destination-status',
};

const notUser: ElementPage = {
  tag: 'p',
  class: 'main_not-user',
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
export const schoolName = new Text(nameSchool, 'RS School');
export const footerYear = new Text(year, '2024');
export const destinationName = new Text(destination, '');
export const statusDestination = new Text(destinationStatus, '');
export const mainNotUser = new Text(notUser, 'You need to check recipient');
