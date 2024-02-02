import { swap } from '@/utils'

export const insertionSort = array => {
  const result = []
  const arrayLength = array.length

  for (let i = 1; i < arrayLength; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      result.push([[j, j + 1], false])
      if (array[j + 1] >= array[j]) break

      result.push([[j, array[j + 1]], true])
      result.push([[j + 1, array[j]], true])
      swap(array, j, j + 1)
    }
  }
  return result
}
