import { Element, Wrapper } from '../wrapper/wrapper';
import { Form, formCreate, formUpdate } from '../form/form';
import { Button, btnGenerate, btnRace, btnReset } from '../button/button';

import './view_part.css';

const viewPart1: Element = {
  tag: 'div',
  class: 'parts view_part1',
};

const viewPart2: Element = {
  tag: 'div',
  class: 'parts view_part2',
};

const viewPart3: Element = {
  tag: 'div',
  class: 'parts view_part3',
};

class Part extends Wrapper {
  form: Form;
  constructor(element: Element, form: Form) {
    super(element);
    this.form = form;
  }

  createElement() {
    return super.createElement();
  }

  collectElements() {
    const part = this.createElement();
    const input = this.form.collectElements();
    part.append(input);
    return part;
  }
}

class Part3 extends Wrapper {
  race: Button;
  reset: Button;
  generate: Button;
  constructor(element: Element, race: Button, reset: Button, generate: Button) {
    super(element);
    this.race = race;
    this.reset = reset;
    this.generate = generate;
  }

  createElement() {
    return super.createElement();
  }

  collectElements() {
    const part = this.createElement();
    const race = this.race.createElement();
    const reset = this.reset.createElement();
    const generate = this.generate.createElement();
    part.append(reset);
    part.append(race);
    part.append(generate);
    return part;
  }
}

export const part1 = new Part(viewPart1, formCreate);
export const part2 = new Part(viewPart2, formUpdate);
export const part3 = new Part3(viewPart3, btnRace, btnReset, btnGenerate);
