import { buttonOut } from '../button/button';
import './header.css';

export class Header {
  header: string;

  constructor() {
    this.header = 'header';
  }

  createHeader() {
    const header = document.createElement(this.header);
    header.className = 'header';
    const nameGame = document.createElement('p');
    nameGame.className = 'header_name';
    nameGame.textContent = 'English Puzzle';
    header.append(nameGame);
    const outButton = buttonOut.createButton();
    header.append(outButton);
    return header;
  }
}
