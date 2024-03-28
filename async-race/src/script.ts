import { wrap, paginationContainer } from './components/elements/wrapper/wrapper';
import { allHeader } from './components/page-elements/header/header';
import { createView } from './components/page-elements/view/view';
import { garagePage } from './components/page-elements/one-page/one-page';
import { btnPrev, btnNext } from './components/elements/button/button';
import { pageWinner } from './components/page-elements/second-page/second-page';
import { partsPages } from './components/functions/change-pages';
import { car } from './components/functions/create-car';
import { carChange } from './components/functions/update-car';
import { carDelete } from './components/functions/delete-car';

import './style.css';

/*const card = document.createElement('div');
card.className = 'cars';
document.body.append(card);
fetchMovies().then((name) => {
  for (let i = 0; i < name.length; i += 1) {
    const cars = document.createElement('div');
    cars.className = `car{i}`;
    cars.textContent = `${name[i].name}`;
    card.append(cars);
  }
  console.log(name[0]);
});

const button = document.createElement('button');
button.className = 'click';
button.textContent = 'click';
card.append(button);

 getCar().then((car) => {
  const newCar = document.createElement('div');
  newCar.className = 'newCar';
  newCar.textContent = `${car.name}`;
  card.append(newCar);
});

console.log();
/* button.addEventListener('click', () => {
  getCar().then((car) => {
    const newCar = document.createElement('div');
    newCar.className = 'newCar';
    newCar.textContent = `${car.name}`;
    card.append(newCar);
  });
}); */

/*const data = {
  name: 'hello',
  color: 'red',
};

export const getCars = async function () {
  const response = await fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const cars: Cars = await response.json();
  return cars;
};*/

class Page {
  createPage() {
    const wrapper = wrap.createElement();
    document.body.append(wrapper);
    const header = allHeader.collectElements();
    wrapper.append(header);
    const view = createView.createElement();
    wrapper.append(view);
    const garage = garagePage.createPartPage();
    wrapper.append(garage);
    const winners = pageWinner.createPartPage();
    wrapper.append(winners);
    const pagination = paginationContainer.createElement();
    const buttonPrev = btnPrev.createElement();
    const buttonNext = btnNext.createElement();
    pagination.append(buttonPrev);
    pagination.append(buttonNext);
    wrapper.append(pagination);
  }
  createCar() {
    return car.getValues();
  }
  updateCar() {
    return carChange.choiceCar();
  }

  deleteCar() {
    return carDelete.choiceCar();
  }
}
export const page = new Page();
page.createPage();
page.createCar();
page.deleteCar();

page.updateCar();

partsPages.activeButton();
