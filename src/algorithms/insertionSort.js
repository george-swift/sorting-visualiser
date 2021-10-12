import { swap } from '../utils';

const insertionSortHelper = (array, animations) => {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      animations.push([[j, j + 1], false]);
      if (array[j + 1] >= array[j]) break;

      animations.push([[j, array[j + 1]], true]);
      animations.push([[j + 1, array[j]], true]);
      swap(array, j, j + 1);
    }
  }
};

export default function insertionSortAnimation(array) {
  const animations = [];
  insertionSortHelper(array, animations);
  return {
    animations,
    length: animations.length,
  };
}
