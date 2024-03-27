import { Element, Wrapper } from '../wrapper/wrapper';
import flags from '../../../assets/icons/flag.svg';

import './svg.css';
const flag: Element = {
  tag: 'img',
  class: 'image-finish',
};

const car: Element = {
  tag: 'div',
  class: 'image-car',
};

export class CarSvg extends Wrapper {
  constructor(element: Element) {
    super(element);
  }
  createElement() {
    return super.createElement();
  }
}

export class Flag extends Wrapper {
  alt: string;
  constructor(element: Element, alt: string) {
    super(element);
    this.alt = alt;
  }
  createElement() {
    const flag = super.createElement() as HTMLImageElement;
    flag.setAttribute('alt', this.alt);
    flag.src = `${flags}`;
    return flag;
  }
}

export const carImage = new CarSvg(car);
export const flagImage = new Flag(flag, 'flag');
