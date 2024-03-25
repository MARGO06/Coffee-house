import { Element, Wrapper } from '../wrapper/wrapper';

import './name.css';
const carName: Element = {
  tag: 'p',
  class: 'name',
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
