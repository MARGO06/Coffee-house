import { PageWinner } from '../../page-elements/second-page/second-page';

import './option.css';

const list: PageWinner = {
  tag: 'datalist',
  id: 'cars',
};

const namesCar: string[] = [
  'Honda',
  'Mazda',
  'Kia',
  'Toyota',
  'Hummer',
  'Tesla',
  'Porsche',
  'Ferrari',
  'Maserati',
  'Jaguar',
];

export class Option {
  tag: string;
  id: string;
  namesCar: string[];

  constructor(element: PageWinner, namesCar: string[]) {
    this.tag = element.tag;
    this.id = element.id;
    this.namesCar = namesCar;
  }

  createElement() {
    const element = document.createElement(this.tag);
    element.id = this.id;
    return element;
  }

  collectElements() {
    const datalist = this.createElement();
    namesCar.forEach((nameCar) => {
      const option = document.createElement('option');
      option.value = `${nameCar}`;
      datalist.append(option);
    });
    console.log(datalist);
    return datalist;
  }
}

export const options = new Option(list, namesCar);
