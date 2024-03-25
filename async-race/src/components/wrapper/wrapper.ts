import './wrapper.css';

export type Element = {
  tag: string;
  class: string;
};

const element: Element = {
  tag: 'div',
  class: 'wrapper',
};

const container: Element = {
  tag: 'div',
  class: 'car-container',
};

const containerImgs: Element = {
  tag: 'div',
  class: 'car-images',
};

const containerPagination: Element = {
  tag: 'div',
  class: 'button-pagination',
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
export const containerCar = new Wrapper(container);
export const containerImages = new Wrapper(containerImgs);
export const paginationContainer = new Wrapper(containerPagination);
