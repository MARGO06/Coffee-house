import {} from /*btnBack, /*btnSelect,*/ /*btnStart /* btnReset, Button */ '../button/button';
import { Element, Wrapper } from '../wrapper/wrapper';

import './car_parts.css';

const headerCar: Element = {
  tag: 'div',
  class: 'car car_header',
};

const footerCar: Element = {
  tag: 'div',
  class: 'car car_footer',
};

class PartCar extends Wrapper {
  constructor(element: Element) {
    super(element);
  }

  createElement() {
    return super.createElement();
  }
}

export const carHeader = new PartCar(headerCar);
export const carFooter = new PartCar(footerCar);
