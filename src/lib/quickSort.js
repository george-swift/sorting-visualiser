import { swap } from '@/utils'

const partition = ({ array, startIndex, endIndex, result }) => {
  let i = startIndex
  let j = endIndex + 1
  const pivot = array[startIndex]

  while (true) {
    while (array[++i] <= pivot) {
      if (i === endIndex) break
      result.push([[i], false])
    }
    while (array[--j] >= pivot) {
      if (j === startIndex) break
      result.push([[j], false])
    }
    if (j <= i) break
    result.push([[i, array[j]], true])
    result.push([[j, array[i]], true])
    swap(array, i, j)
  }

  result.push([[startIndex, array[j]], true])
  result.push([[j, array[startIndex]], true])
  swap(array, startIndex, j)
  return j
}

const quickSortHelper = ({ array, startIndex, endIndex, result }) => {
  if (startIndex >= endIndex) return

  const pivotIndex = partition({
    array,
    startIndex,
    endIndex,
    result
  })

  const leftHalf = {
    array,
    startIndex,
    endIndex: pivotIndex,
    result
  }

  const rightHalf = {
    array,
    startIndex: pivotIndex + 1,
    endIndex,
    result
  }

  quickSortHelper(leftHalf)
  quickSortHelper(rightHalf)
}

export const quickSort = array => {
  const result = []

  quickSortHelper({
    array,
    startIndex: 0,
    endIndex: array.length - 1,
    result
  })

  return result
}
