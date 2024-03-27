import { Element, Wrapper } from '../wrapper/wrapper';
import { Color, createColor, updateColor } from '../color/color';
import { Input, createInput, updateInput } from '../input/input';
import { Button, btnCreate, btnUpdate } from '../button/button';
import { options } from '../option/option';

import './form.css';

const form: Element = {
  tag: 'form',
  class: 'form form_create',
};

const form2: Element = {
  tag: 'form',
  class: 'form form_update',
};

export class Form extends Wrapper {
  input: Input;
  color: Color;
  button: Button;
  constructor(element: Element, input: Input, color: Color, button: Button) {
    super(element);
    this.input = input;
    this.color = color;
    this.button = button;
  }

  createElement() {
    return super.createElement();
  }

  collectElements() {
    const form = this.createElement();
    const input = this.input.createElement();
    const datalist = options.collectElements();
    const color = this.color.createElement();
    const btn = this.button.createElement();
    form.append(input);
    form.append(datalist);
    form.append(color);
    form.append(btn);
    return form;
  }
}

export const formCreate = new Form(form, createInput, createColor, btnCreate);
export const formUpdate = new Form(form2, updateInput, updateColor, btnUpdate);
