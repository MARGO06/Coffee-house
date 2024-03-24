import { Element, Wrapper } from '../wrapper/wrapper';
import { Input, createInput, updateInput } from '../input/input';
import { Color, createColor, updateColor } from '../color/color';
import { Button, btnCreate, btnGenerate, btnRace, btnReset, btnUpdate } from '../button/button';

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
    const part = this.createElement();
    const input = this.input.createElement();
    const color = this.color.createElement();
    const button = this.button.createElement();
    part.append(input);
    part.append(color);
    part.append(button);
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
export const part1 = new Part(viewPart1, createInput, createColor, btnCreate);
export const part2 = new Part(viewPart2, updateInput, updateColor, btnUpdate);
export const part3 = new Part3(viewPart3, btnRace, btnReset, btnGenerate);
