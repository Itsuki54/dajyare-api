import { data } from '../data/dajyare';

export function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

export function getAllItems() {
  return data;
}
