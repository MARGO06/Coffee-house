import { Element, ElementPage } from '../element';

import './wrapper.css';

const loginWrapper: ElementPage = {
  tag: 'div',
  class: 'login_wrapper',
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
