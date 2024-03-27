import { Element, Wrapper } from '../wrapper/wrapper';

const inputCreate: Element = {
  tag: 'input',
  class: 'input input_create',
};

const inputUpdate: Element = {
  tag: 'input',
  class: 'input input_update',
};

export class Input extends Wrapper {
  type: string;

  constructor(element: Element, type: string) {
    super(element);
    this.type = type;
  }

  createElement() {
    const input = super.createElement();
    input.setAttribute('type', this.type);
    input.setAttribute('list', 'cars');
    return input;
  }
}

export const createInput = new Input(inputCreate, 'text');
export const updateInput = new Input(inputUpdate, 'text');
