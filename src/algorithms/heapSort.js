import { swap } from '../utils';

const heapify = (heap, currentIndex, max, animations) => {
  let swapIndex;
  let leftChild = 2 * currentIndex + 1;

  while (leftChild <= max) {
    animations.push([leftChild, max, -1]);
    animations.push([leftChild, max, -1]);
    const rightChild = currentIndex * 2 + 2 <= max ? currentIndex * 2 + 2 : -1;

    if (rightChild !== -1 && heap[rightChild] > heap[leftChild]) {
      swapIndex = rightChild;
    } else {
      swapIndex = leftChild;
    }

    if (heap[swapIndex] <= heap[currentIndex]) return;

    animations.push([currentIndex, swapIndex, heap[currentIndex], heap[swapIndex]]);
    swap(heap, currentIndex, swapIndex);
    // eslint-disable-next-line no-param-reassign
    currentIndex = swapIndex;
    leftChild = currentIndex * 2 + 1;
  }
};

const buildMaxHeap = (arr, animations) => {
  let middleIndex = Math.floor(arr.length / 2 - 1);

  while (middleIndex >= 0) {
    heapify(arr, middleIndex, arr.length - 1, animations);
    middleIndex -= 1;
  }
};

const heapSortHelper = (array, animations) => {
  buildMaxHeap(array, animations);

  let endIndex = array.length - 1;
  for (endIndex; endIndex >= 1; endIndex -= 1) {
    animations.push([0, endIndex, array[0], array[endIndex]]);
    swap(array, 0, endIndex);
    heapify(array, 0, endIndex - 1, animations);
  }
};

export default function heapSortAnimation(array) {
  const animations = [];
  heapSortHelper(array, animations);
  return {
    animations,
    length: animations.length,
  };
}
