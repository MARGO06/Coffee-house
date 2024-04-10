import './label-input.css';

export type FormElements = {
  tag: string[];
  text: string;
  type: string;
  id: string;
  pattern: string;
  requirement: string;
};

export const nameInput: FormElements = {
  tag: ['label', 'input'],
  id: 'name',
  text: 'Name',
  type: 'text',
  pattern: '(^[A-Z][a-z\\-]{2,}$)',
  requirement: "The first letter is in uppercase, min length is 3 characters, use english letters and '-'",
};

export const passwordInput: FormElements = {
  tag: ['label', 'input'],
  id: 'password',
  text: 'Password',
  type: 'password',
  pattern: '(^[A-Z][a-z\\-]{3,}$)',
  requirement: "The first letter is in uppercase, min length is 4 characters, use english letters and '-'",
};

class LabelInput {
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
    const requirements = document.createElement('div');
    requirements.className = 'requirement';
    requirements.textContent = this.requirement;
    return requirements;
  }
}

const firstName = new LabelInput(nameInput);
const label1 = firstName.createLabel();
const input1 = firstName.createInput();
const requirement1 = firstName.createRequirements();

const lastName = new LabelInput(passwordInput);
const label2 = lastName.createLabel();
const input2 = lastName.createInput();
const requirement2 = lastName.createRequirements();

export { label1, input1, requirement1, label2, input2, requirement2 };
