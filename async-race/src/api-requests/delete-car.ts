import { Car } from './get-cars';
export const deleteCar = async (url = '') => {
  const response = await fetch(url, {
    method: 'DELETE',
  });
  const cars: Car = await response.json();
  console.log(cars);
  return cars;
};
