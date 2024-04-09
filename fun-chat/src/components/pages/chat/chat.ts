import { Page } from '../pages';

import './chat.css';

export class Chat extends Page {
  constructor(id: string) {
    super(id);
  }

  createPage() {
    const page = document.createElement('div');
    page.id = this.id;
    document.body.append(page);
  }
}
