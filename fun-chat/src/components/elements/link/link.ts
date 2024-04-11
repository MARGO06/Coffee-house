import { Element, ElementPage } from '../element';

import './link.css';

const nameGitHub: ElementPage = {
  tag: 'a',
  class: 'gitHub',
};

class Link extends Element {
  text: string;
  href: string;
  target: string;

  constructor(element: ElementPage, href: string, target: string, text: string) {
    super(element);
    this.text = text;
    this.href = href;
    this.target = target;
  }

  createElement() {
    const newText = super.createElement();
    newText.setAttribute('href', this.href);
    newText.setAttribute('target', this.target);
    newText.textContent = this.text;
    return newText;
  }
}

export const linkGitHub = new Link(nameGitHub, 'https://github.com/MARGO06', '_black', 'MARGO06');
