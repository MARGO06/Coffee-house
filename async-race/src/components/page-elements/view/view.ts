import { Element, Wrapper } from '../../elements/wrapper/wrapper';
import { part1, part2, part3 } from '../../elements/view_part/view_part';

import './view.css';

const view: Element = {
  tag: 'div',
  class: 'view active',
};

export class View extends Wrapper {
  constructor(element: Element) {
    super(element);
  }

  createElement() {
    const view = super.createElement();
    const part_1 = part1.collectElements();
    const part_2 = part2.collectElements();
    const part_3 = part3.collectElements();
    view.append(part_1);
    view.append(part_2);
    view.append(part_3);
    return view;
  }
}

export const createView = new View(view);
