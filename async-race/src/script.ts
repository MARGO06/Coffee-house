// const request = fetch('http://127.0.0.1:3000/garage');
// console.log(request.json());
type Car = {
  name: string;
  color: string;
  id: number;
};

type Cars = Car[];
const bbbb = 'he';
console.log(bbbb);
const fetchMovies = async function () {
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

const hhh = getCar().then((car) => {
  const newCar = document.createElement('div');
  newCar.className = 'newCar';
  newCar.textContent = `${car.name}`;
  card.append(newCar);
});

console.log(hhh.call(button));
/* button.addEventListener('click', () => {
  getCar().then((car) => {
    const newCar = document.createElement('div');
    newCar.className = 'newCar';
    newCar.textContent = `${car.name}`;
    card.append(newCar);
  });
}); */
