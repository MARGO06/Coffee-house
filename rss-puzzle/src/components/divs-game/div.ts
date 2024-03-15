//import { firstLevel } from '../interfaces/level_1';

export const divRows: string[] = Array.from({ length: 10 });

export class DivCards {
  tag: string;
  row: string[];

  constructor(rows: string[]) {
    this.tag = 'div';
    this.row = rows;
  }

  createMainDiv() {
    const divWrapper = document.createElement(this.tag);
    divWrapper.className = 'game_wrapper';
    for (let i = 0; i < this.row.length; i++) {
      const divRow = document.createElement(this.row[i]);
      divRow.className = `row${i}`;
      divWrapper.append(divRow);
    }
    return divWrapper;
  }
}
