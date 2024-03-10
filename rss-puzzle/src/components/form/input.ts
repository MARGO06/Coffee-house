//import { LoginPage } from '../pages/entry/login-page';

export type FormElements = {
  tag: string[];
  text: string;
  type: string;
  value: string;
  id: string;
};

//type FormLabel = Pick<FormElements, 'tag' | 'text' | 'id'>;
//type FormInput = Omit<FormElements, 'text'>;

export const form1: FormElements = {
  tag: ['label', 'input'],
  id: 'fname',
  text: 'First name',
  type: 'text',
  value: ' ',
};

export const form2: FormElements = {
  tag: ['label', 'input'],
  id: 'lname',
  text: 'Last name',
  type: 'text',
  value: ' ',
};

export class LabelInput {
  tag1: string;
  tag2: string;
  text: string;
  type: string;
  value: string;
  id: string;

  constructor(label: FormElements) {
    const [label1, input1] = label.tag;
    this.tag1 = label1;
    this.tag2 = input1;
    this.text = label.text;
    this.type = label.type;
    this.value = label.value;
    this.id = label.id;
  }

  createLabel() {
    const label = document.createElement(this.tag1);
    label.setAttribute('for', this.id);
    label.textContent = this.text;
    return label;
  }

  createInput() {
    const input = document.createElement(this.tag2);
    input.id = this.id;
    input.setAttribute('type', this.type);
    input.setAttribute('value', this.value);
    return input;
  }
}
