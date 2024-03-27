import { Element, Wrapper } from '../wrapper/wrapper';

import './color.css';
const colorCreate: Element = {
  tag: 'input',
  class: 'color color_create',
};

const colorUpdate: Element = {
  tag: 'input',
  class: 'color color_update',
};

export class Color extends Wrapper {
  type: string;
  value: string;
  constructor(element: Element, type: string, value: string) {
    super(element);
    this.type = type;
    this.value = value;
  }

  createElement() {
    const color = super.createElement();
    color.setAttribute('type', this.type);
    color.setAttribute('value', this.value);
    console.log(color);
    return color;
  }
}

export const createColor = new Color(colorCreate, 'color', '#FFFFFF');
export const updateColor = new Color(colorUpdate, 'color', '#FFFFFF');
