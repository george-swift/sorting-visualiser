/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const mergeHalves = ({
  mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations,
}) => {
  let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;

  while (i <= middleIndex && j <= endIndex) {
    animations.push([[i, j], false]);

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([[k, auxiliaryArray[i]], true]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([[k, auxiliaryArray[j]], true]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIndex) {
    animations.push([[i, i], false]);
    animations.push([[k, auxiliaryArray[i]], true]);
    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIndex) {
    animations.push([[j, j], false]);
    animations.push([[k, auxiliaryArray[j]], true]);
    mainArray[k++] = auxiliaryArray[j++];
  }
};

const mergeSortHelper = ({
  mainArray, startIndex, endIndex, auxiliaryArray, animations,
}) => {
  if (endIndex <= startIndex) return;

  const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

  const leftTopLevelSubList = {
    mainArray: auxiliaryArray,
    startIndex,
    endIndex: middleIndex,
    auxiliaryArray: mainArray,
    animations,
  };

  const rightTopLevelSublist = {
    mainArray: auxiliaryArray,
    startIndex: middleIndex + 1,
    endIndex,
    auxiliaryArray: mainArray,
    animations,
  };

  mergeSortHelper(leftTopLevelSubList);
  mergeSortHelper(rightTopLevelSublist);
  mergeHalves({
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    animations,
  });
};

export default function mergeSortAnimation(array) {
  const animations = [];
  const auxiliaryArray = [...array];
  const sortUtils = {
    mainArray: array,
    startIndex: 0,
    endIndex: array.length - 1,
    auxiliaryArray,
    animations,
  };

  mergeSortHelper(sortUtils);
  return {
    animations,
    length: animations.length,
  };
}
