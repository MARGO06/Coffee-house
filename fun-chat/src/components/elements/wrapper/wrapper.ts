import { Element, ElementPage } from '../element';

import './wrapper.css';

const loginWrapper: ElementPage = {
  tag: 'div',
  class: 'login_wrapper',
};

const modalWrapper: ElementPage = {
  tag: 'div',
  class: 'modal_wrapper',
};

const modalWindow: ElementPage = {
  tag: 'div',
  class: 'modal_window',
};

const modalBackground: ElementPage = {
  tag: 'div',
  class: 'modal_background',
};

class Wrapper extends Element {
  constructor(element: ElementPage) {
    super(element);
  }
  createElement() {
    return super.createElement();
  }
}

export const wrapperLogin = new Wrapper(loginWrapper);
export const wrapperModal = new Wrapper(modalWrapper);
export const windowModal = new Wrapper(modalWindow);
export const backgroundModal = new Wrapper(modalBackground);
