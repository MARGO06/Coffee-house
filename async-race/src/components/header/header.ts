import { Element, Wrapper } from '../wrapper/wrapper';
import { btnGarage, btnWinners } from '../button/button';

import './header.css';

export const header: Element = {
  tag: 'header',
  class: 'header',
};

class Header extends Wrapper {
  constructor(element: Element) {
    super(element);
  }
  createElement() {
    return super.createElement();
  }

  collectElements() {
    const head = this.createElement();
    const garageBtn = btnGarage.createElement();
    const winnerBtn = btnWinners.createElement();
    head.append(garageBtn);
    head.append(winnerBtn);
    return head;
  }
}

export const allHeader = new Header(header);
