import { Car } from './get-cars';
export const getCar = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const car: Car = await response.json();
  console.log(car);
  return car;
};
