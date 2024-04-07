export type Element = {
  tag: string;
  class: string;
  id?: number;
};

const element: Element = {
  tag: 'div',
  class: 'wrapper',
};

export class Wrapper {
  tag: string;

  class: string;

  id?: string;

  constructor(elem: Element) {
    this.tag = elem.tag;
    this.class = elem.class;
  }

  createElement() {
    const el = document.createElement(this.tag);
    el.className = this.class;
    return el;
  }
}
export const wrap = new Wrapper(element);
