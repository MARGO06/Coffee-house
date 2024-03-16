//import { firstLevel } from '../interfaces/level_1';
import './div.css';

export const divRows: string[] = Array.from({ length: 10 });

export class DivCards {
  tag: string;
  row: string[];
  min: number;
  max: number;

  constructor(rows: string[], max: number) {
    this.tag = 'div';
    this.row = rows;
    this.min = 0;
    this.max = max;
  }

  createMainDiv() {
    const divWrapper = document.createElement(this.tag);
    divWrapper.className = 'game_wrapper';
    for (let i = 0; i < this.row.length; i++) {
      const divRow = document.createElement(this.row[i]);
      divRow.className = 'game_row';
      divWrapper.append(divRow);
    }
    return divWrapper;
  }
}
