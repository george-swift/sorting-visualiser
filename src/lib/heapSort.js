import { swap } from '@/utils'

const heapify = (heap, currentIndex, max, result) => {
  let leftChild = 2 * currentIndex + 1

  while (leftChild <= max) {
    result.push([currentIndex, leftChild, heap[currentIndex], heap[leftChild]])
    result.push([currentIndex, leftChild, heap[currentIndex], heap[leftChild]])

    const rightChild = 2 * currentIndex + 2

    let swapIndex
    if (rightChild <= max && heap[rightChild] > heap[leftChild]) {
      swapIndex = rightChild
    } else {
      swapIndex = leftChild
    }

    if (heap[swapIndex] <= heap[currentIndex]) return

    result.push([currentIndex, swapIndex, heap[currentIndex], heap[swapIndex]])
    swap(heap, currentIndex, swapIndex)
    currentIndex = swapIndex
    leftChild = 2 * currentIndex + 1
  }
}

const buildMaxHeap = (arr, result) => {
  let middleIndex = Math.floor(arr.length / 2 - 1)

  while (middleIndex >= 0) {
    heapify(arr, middleIndex, arr.length - 1, result)
    middleIndex -= 1
  }
}

const heapSortHelper = (array, result) => {
  buildMaxHeap(array, result)

  let endIndex = array.length - 1
  for (endIndex; endIndex >= 1; endIndex -= 1) {
    result.push([0, endIndex, array[0], array[endIndex]])
    swap(array, 0, endIndex)
    heapify(array, 0, endIndex - 1, result)
  }
}

export const heapSort = array => {
  const result = []

  heapSortHelper(array, result)

  return result
}
