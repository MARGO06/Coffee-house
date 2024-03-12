import './form.css';

export type FormElements = {
  tag: string[];
  text: string;
  type: string;
  id: string;
};

export const form1: FormElements = {
  tag: ['label', 'input'],
  id: 'fname',
  text: 'First name',
  type: 'text',
};

export const form2: FormElements = {
  tag: ['label', 'input'],
  id: 'lname',
  text: 'Surname',
  type: 'text',
};

export class LabelInput {
  tag1: string;
  tag2: string;
  text: string;
  type: string;
  id: string;

  constructor(label: FormElements) {
    const [label1, input1] = label.tag;
    this.tag1 = label1;
    this.tag2 = input1;
    this.text = label.text;
    this.type = label.type;
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
    input.setAttribute('required', '');
    return input;
  }
}
