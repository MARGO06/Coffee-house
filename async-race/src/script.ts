import { wrap } from './components/wrapper/wrapper';
import { allHeader } from './components/header/header';
import { createView } from './components/view/view';

import './style.css';
// import { part1 } from './components/view_part/view_part';
/*type Car = {
  name: string;
  color: string;
  id: number;
};*/

// type Cars = Car[];
const bbbb = 'hello';
console.log(bbbb);
/*const fetchMovies = async function () {
  const response = await fetch('http://127.0.0.1:3000/garage');
  const movies: Cars = await response.json();
  console.log(movies);
  return movies;
};

const getCar = async function () {
  const response = await fetch('http://127.0.0.1:3000/garage/1');
  const movies: Car = await response.json();
  console.log(movies);
  return movies;
};

const card = document.createElement('div');
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

class Page {
  createPage() {
    const wrapper = wrap.createElement();
    document.body.append(wrapper);
    const header = allHeader.collectElements();
    wrapper.append(header);
    const view = createView.createElement();
    wrapper.append(view);
  }
}
const page = new Page();
page.createPage();
