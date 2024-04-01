import { namesCar } from '../elements/option/option';
const modelCar: string[] = ['Model X', 'Model S', 'H3', 'H2', 'City', 'Brio', 'X7', 'X6', 'Rio', 'RIO X'];

class GenerateCars {
  createAllCars() {
    const newArray: string[] = [];
    for (let i = 0; i < namesCar.length; i += 1) {
      for (let j = 0; j < modelCar.length; j += 1) {
        newArray.push(namesCar[i].concat(modelCar[j]));
        newArray.sort(() => Math.random() - 0.5);
      }
    }
    return newArray;
  }

  getRandomColor() {
    const colors: string[] = [];
    for (let j = 0; j <= 100; j += 1) {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 100);
      const lightness = Math.floor(Math.random() * 100);
      const randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      colors.push(randomColor);
    }
    return colors;
  }

  createCarsAndColors() {
    const allCars: string[] = [];
    const cars = this.createAllCars();
    const colors = this.getRandomColor();
    if (cars != undefined && colors != undefined) {
      for (let i = 0; i < cars.length; i += 1) {
        for (let j = 0; j < colors.length; j += 1) {
          if (j === i) {
            const cdd = `{ name: ${cars[j]}, color: ${colors[i]} }`;
            allCars.push(cdd);
          }
        }
      }
    }
    return allCars;
  }

  clickGenerateCars() {
    const generateButton = document.querySelector('.btn_generate');
    if (generateButton instanceof HTMLButtonElement) {
      generateButton.addEventListener('click', (e) => {
        e.preventDefault();
        const cars = this.createCarsAndColors();
        console.log(cars);
      });
    }
  }
}

export const carsGenerate = new GenerateCars();
