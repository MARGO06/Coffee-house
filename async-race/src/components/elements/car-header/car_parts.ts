import { btnBack, btnSelect, btnStart, btnReset, Button } from '../button/button';
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
  button1: Button;
  button2: Button;
  constructor(element: Element, button1: Button, button2: Button) {
    super(element);
    this.button1 = button1;
    this.button2 = button2;
  }

  createElement() {
    return super.createElement();
  }

  collectElements() {
    const part = this.createElement();
    const button1 = this.button1.createElement();
    const button2 = this.button2.createElement();
    part.append(button1);
    part.append(button2);
    return part;
  }
}

export const carHeader = new PartCar(headerCar, btnSelect, btnReset);
export const carFooter = new PartCar(footerCar, btnStart, btnBack);
