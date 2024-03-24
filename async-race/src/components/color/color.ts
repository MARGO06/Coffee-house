import { Element, Wrapper } from '../wrapper/wrapper';

import './color.css';
const colorCreate: Element = {
  tag: 'div',
  class: 'color color_create',
};

const colorUpdate: Element = {
  tag: 'div',
  class: 'color color_create',
};

export class Color extends Wrapper {
  constructor(element: Element) {
    super(element);
  }

  createElement() {
    return super.createElement();
  }
}

export const createColor = new Color(colorCreate);
export const updateColor = new Color(colorUpdate);
