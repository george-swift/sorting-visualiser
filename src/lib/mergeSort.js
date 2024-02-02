const mergeHalves = ({
  mainArray,
  startIndex,
  middleIndex,
  endIndex,
  auxiliaryArray,
  result
}) => {
  let k = startIndex
  let i = startIndex
  let j = middleIndex + 1

  while (i <= middleIndex && j <= endIndex) {
    result.push([[i, j], false])

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      result.push([[k, auxiliaryArray[i]], true])
      mainArray[k++] = auxiliaryArray[i++]
    } else {
      result.push([[k, auxiliaryArray[j]], true])
      mainArray[k++] = auxiliaryArray[j++]
    }
  }

  while (i <= middleIndex) {
    result.push([[i, i], false])
    result.push([[k, auxiliaryArray[i]], true])
    mainArray[k++] = auxiliaryArray[i++]
  }

  while (j <= endIndex) {
    result.push([[j, j], false])
    result.push([[k, auxiliaryArray[j]], true])
    mainArray[k++] = auxiliaryArray[j++]
  }
}

const mergeSortHelper = ({
  mainArray,
  startIndex,
  endIndex,
  auxiliaryArray,
  result
}) => {
  if (endIndex <= startIndex) return

  const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)

  const leftTopLevelSubList = {
    mainArray: auxiliaryArray,
    startIndex,
    endIndex: middleIndex,
    auxiliaryArray: mainArray,
    result
  }

  const rightTopLevelSublist = {
    mainArray: auxiliaryArray,
    startIndex: middleIndex + 1,
    endIndex,
    auxiliaryArray: mainArray,
    result
  }

  mergeSortHelper(leftTopLevelSubList)
  mergeSortHelper(rightTopLevelSublist)
  mergeHalves({
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    result
  })
}

export const mergeSort = array => {
  const result = []

  mergeSortHelper({
    mainArray: array,
    startIndex: 0,
    endIndex: array.length - 1,
    auxiliaryArray: [...array],
    result
  })

  return result
}
