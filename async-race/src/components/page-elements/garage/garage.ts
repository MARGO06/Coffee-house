import { Element, Wrapper } from '../../elements/wrapper/wrapper';
import { carFooter, carHeader } from '../../elements/car-header/car_parts';
import { getCars } from '../../../api-requests/get-cars';
const placeCar: Element = {
  tag: 'div',
  class: 'place',
};

class Place extends Wrapper {
  constructor(element: Element) {
    super(element);
  }

  collectElements() {
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
