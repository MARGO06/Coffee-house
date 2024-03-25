import { Element, Wrapper } from '../wrapper/wrapper';

import './button.css';

const garageBut: Element = {
  tag: 'button',
  class: 'btn btn_garage',
};

const winnersBut: Element = {
  tag: 'button',
  class: 'btn btn_winners',
};

const createBut: Element = {
  tag: 'button',
  class: 'btn-view btn_create',
};

const updateBut: Element = {
  tag: 'button',
  class: 'btn-view btn_update',
};

const raceBut: Element = {
  tag: 'button',
  class: 'btn btn_race',
};

const resetBut: Element = {
  tag: 'button',
  class: 'btn btn_reset',
};

const generateBut: Element = {
  tag: 'button',
  class: 'btn-view btn_generate',
};

const selectBut: Element = {
  tag: 'button',
  class: 'btn-view btn_select',
};

const removeBut: Element = {
  tag: 'button',
  class: 'btn-view btn_remove',
};

const startBut: Element = {
  tag: 'button',
  class: 'btn-move btn_start',
};

const backBut: Element = {
  tag: 'button',
  class: 'btn-move btn_back',
};

export class Button extends Wrapper {
  text: string;

  constructor(element: Element, text: string) {
    super(element);
    this.text = text;
  }
  createElement() {
    const button = super.createElement();
    button.textContent = this.text;
    return button;
  }
}

export const btnGarage = new Button(garageBut, 'TO GARAGE');
export const btnWinners = new Button(winnersBut, 'TO WINNERS');
export const btnCreate = new Button(createBut, 'CREATE');
export const btnUpdate = new Button(updateBut, 'UPDATE');
export const btnReset = new Button(resetBut, 'RESET');
export const btnRace = new Button(raceBut, 'RACE');
export const btnGenerate = new Button(generateBut, 'GENERATE');
export const btnSelect = new Button(selectBut, 'SELECT');
export const btnRemove = new Button(removeBut, 'REMOVE');
export const btnStart = new Button(startBut, 'A');
export const btnBack = new Button(backBut, 'B');
