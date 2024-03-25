import { Element, Wrapper } from '../wrapper/wrapper';

import './name.css';
const carName: Element = {
  tag: 'p',
  class: 'name',
};

const pageName: Element = {
  tag: 'p',
  class: 'page page-name',
};

const pageNumber: Element = {
  tag: 'p',
  class: 'page page-number',
};

export class Name extends Wrapper {
  constructor(element: Element) {
    super(element);
  }
  createElement() {
    return super.createElement();
  }
}

export const nameCar = new Name(carName);
export const namePage = new Name(pageName);
export const nameNumber = new Name(pageNumber);
