export type Car = {
  name: string;
  color: string;
  id: number;
};

export type Cars = Car[];

export const getCars = async function () {
  const response = await fetch('http://127.0.0.1:3000/garage');
  const cars: Cars = await response.json();
  return cars;
};
