/* eslint-disable no-plusplus */
import { swap } from '../utils';

const partition = ({
  array, startIndex, endIndex, animations,
}) => {
  let i = startIndex;
  let j = endIndex + 1;
  const pivot = array[startIndex];

  while (true) {
    while (array[++i] <= pivot) {
      if (i === endIndex) break;
      animations.push([[i], false]);
    }
    while (array[--j] >= pivot) {
      if (j === startIndex) break;
      animations.push([[j], false]);
    }
    if (j <= i) break;
    animations.push([[i, array[j]], true]);
    animations.push([[j, array[i]], true]);
    swap(array, i, j);
  }

  animations.push([[startIndex, array[j]], true]);
  animations.push([[j, array[startIndex]], true]);
  swap(array, startIndex, j);
  return j;
};

const quickSortHelper = ({
  array, startIndex, endIndex, animations,
}) => {
  if (startIndex >= endIndex) return;

  const pivotIndex = partition({
    array,
    startIndex,
    endIndex,
    animations,
  });

  const leftHalf = {
    array,
    startIndex,
    endIndex: pivotIndex,
    animations,
  };

  const rightHalf = {
    array,
    startIndex: pivotIndex + 1,
    endIndex,
    animations,
  };

  quickSortHelper(leftHalf);
  quickSortHelper(rightHalf);
};

export default function quickSortAnimation(array) {
  const animations = [];
  const sortUtils = {
    array,
    startIndex: 0,
    endIndex: array.length - 1,
    animations,
  };
  quickSortHelper(sortUtils);
  return {
    animations,
    length: animations.length,
  };
}
