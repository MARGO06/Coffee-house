export type ElementPage = {
  tag: string;
  class: string;
  id?: number;
};

export abstract class Element {
  tag: string;
  class: string;
  id?: string;

  constructor(element: ElementPage) {
    this.tag = element.tag;
    this.class = element.class;
  }

  createElement() {
    const element = document.createElement(this.tag);
    element.className = this.class;
    return element;
  }
}
