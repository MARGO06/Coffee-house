import './form.css';

export type FormElements = {
  tag: string[];
  text: string;
  type: string;
  id: string;
  pattern: string;
  requirement: string;
};

export const form1: FormElements = {
  tag: ['label', 'input'],
  id: 'fname',
  text: 'First name',
  type: 'text',
  pattern: '(^[A-Z]).{1}(?=.*[a-z\\-]).{1,}',
  requirement: "The first letter is in uppercase, min length is 3 characters, use english letters and '-'",
};

export const form2: FormElements = {
  tag: ['label', 'input'],
  id: 'lname',
  text: 'Surname',
  type: 'text',
  pattern: '(^[A-Z]).{1}(?=.*[a-z\\-]).{2,}',
  requirement: "The first letter is in uppercase, min length is 4 characters, use english letters and '-'",
};

export class LabelInput {
  tag1: string;
  tag2: string;
  text: string;
  type: string;
  id: string;
  pattern: string;
  requirement: string;

  constructor(label: FormElements) {
    const [label1, input1] = label.tag;
    this.tag1 = label1;
    this.tag2 = input1;
    this.text = label.text;
    this.type = label.type;
    this.id = label.id;
    this.pattern = label.pattern;
    this.requirement = label.requirement;
  }

  createLabel() {
    const label = document.createElement(this.tag1);
    label.setAttribute('for', this.id);
    label.textContent = this.text;
    return label;
  }

  createInput() {
    const input = document.createElement(this.tag2);
    input.setAttribute('pattern', this.pattern);
    input.id = this.id;
    input.setAttribute('type', this.type);
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('required', '');
    return input;
  }

  createRequirements() {
    const requir = document.createElement('div');
    requir.className = 'requirement';
    requir.textContent = this.requirement;
    return requir;
  }
}
