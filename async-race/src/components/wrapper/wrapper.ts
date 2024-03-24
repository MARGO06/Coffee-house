import './wrapper.css';

export type Element = {
  tag: string;
  class: string;
};

const element: Element = {
  tag: 'div',
  class: 'wrapper',
};

export class Wrapper {
  tag: string;
  class: string;
  constructor(element: Element) {
    this.tag = element.tag;
    this.class = element.class;
  }

  createElement() {
    const element = document.createElement(this.tag);
    element.className = this.class;
    return element;
  }
}
export const wrap = new Wrapper(element);
