import { Car } from './get-cars';
export const createCars = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  const cars: Car = await response.json();
  console.log(cars);
  return cars;
};
//'http://127.0.0.1:3000/garage'
//car.showData()
