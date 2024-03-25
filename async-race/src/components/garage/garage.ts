import { Element, Wrapper } from '../wrapper/wrapper';
import { carFooter, carHeader } from '../car-header/car_parts';
import { getCars } from '../../api-requests/get-cars';
const placeCar: Element = {
  tag: 'div',
  class: 'place',
};

class Place extends Wrapper {
  constructor(element: Element) {
    super(element);
  }

  /*async createElem() {
    // const element = super.createElement();
    return getCars().then((cars) => {
      cars.forEach((car) => {
        const elem = document.createElement('div');
        elem.className = `${car}`;
        console.log(elem);
        return elem;
      });
    });
  }*/

  collectElements() {
    // const place = this.createElement();
    getCars().then((cars) => {
      cars.forEach((car) => {
        const header = carHeader.collectElements();
        const name = document.createElement('p');
        name.className = `${car.name}`;
        name.textContent = `${car.name}`;
        header.append(name);
        const footer = carFooter.collectElements();
        header.append(footer);
        return header;
      });
    });
  }
}

export const carPlace = new Place(placeCar);
