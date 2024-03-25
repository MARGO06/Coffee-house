import { Page } from '../one-page/one-page';
import { namePage, nameNumber } from '../name/name';
import { resultWinner, nameCategory } from '../wrapper/wrapper';

const winnerPage: Page = {
  tag: 'div',
  id: 'winner',
};

const names: string[] = ['Number', 'Car', 'Name', 'Wins', 'Best time(seconds)'];

class Winner {
  tag: string;
  id: string;
  constructor(element: Page) {
    this.tag = element.tag;
    this.id = element.id;
  }

  createPartPage() {
    const element = document.createElement(this.tag);
    element.id = this.id;
    const winnerName = namePage.createElement();
    winnerName.textContent = 'Winners(4)';
    element.append(winnerName);
    const numberPage = nameNumber.createElement();
    numberPage.textContent = 'page#1';
    element.append(numberPage);
    const results = resultWinner.createElement();
    element.append(results);
    const categories = nameCategory.createElement();
    results.append(categories);
    names.forEach((name) => {
      const title = document.createElement('p');
      title.className = 'title';
      title.textContent = name;
      categories.append(title);
    });
    return element;
  }
}

export const pageWinner = new Winner(winnerPage);
