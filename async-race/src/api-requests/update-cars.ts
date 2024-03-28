import { Car } from './get-cars';
export const updateCars = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  const cars: Car = await response.json();
  console.log(cars);
  return cars;
};
