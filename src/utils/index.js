import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...classNames) => twMerge(clsx(classNames))

export const swap = (array, i, j) => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

export const rand = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const LESSONS = {
  Introduction: 'Introduction',
  InsertionSort: 'Insertion Sort',
  MergeSort: 'Merge Sort',
  QuickSort: 'Quick Sort',
  HeapSort: 'Heap Sort'
}
