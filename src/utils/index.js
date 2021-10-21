export const MIN_HEIGHT = 5;
export const MAX_HEIGHT = 500;
export const ANIMATION_SPEED = 1;
export const PRIMARY_COLOR = 'turquoise';
export const SECONDARY_COLOR = 'red';
export const SORTED_COLOR = 'goldenrod';

export const randomFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getTotalBars = (width) => {
  if (width < 350) return Math.floor(width / 6.5);
  if (width < 500) return Math.floor(width / 6);
  if (width < 700) return 120;
  if (width < 990) return 150;
  if (width < 1200) return 200;
  if (width < 1400) return 250;
  return 300;
};

export const changeBgColor = (vsxBars, details) => {
  const [bar, color] = details;
  const { style: barStyle } = vsxBars[bar];
  barStyle.backgroundColor = color;
};

export const changeHeight = (vsxBars, comparison) => {
  const [k, newHeight] = comparison;
  const { style: barStyle } = vsxBars[k];
  barStyle.height = `${newHeight}px`;
};

export const animateIndex = (vsxBars, ...positions) => {
  positions.forEach((index) => {
    setTimeout(() => {
      changeBgColor(vsxBars, [index, SECONDARY_COLOR]);
    }, ANIMATION_SPEED);
    setTimeout(() => {
      changeBgColor(vsxBars, [index, PRIMARY_COLOR]);
    }, ANIMATION_SPEED * 3);
  });
};

export const animateHeap = (vsxBars, ...heap) => {
  const [
    [left, right, leftHeight, rightHeight],
    index,
  ] = heap;

  if (leftHeight >= 0) {
    setTimeout(() => {
      changeHeight(vsxBars, [left, rightHeight]);
      changeBgColor(vsxBars, [left, PRIMARY_COLOR]);
      changeHeight(vsxBars, [right, leftHeight]);
      changeBgColor(vsxBars, [right, SECONDARY_COLOR]);
    }, index * ANIMATION_SPEED);
  }

  setTimeout(() => {
    changeBgColor(vsxBars, [left, PRIMARY_COLOR]);
    changeBgColor(vsxBars, [right, SECONDARY_COLOR]);
  }, index * ANIMATION_SPEED);

  setTimeout(() => {
    changeBgColor(vsxBars, [left, PRIMARY_COLOR]);
    changeBgColor(vsxBars, [right, PRIMARY_COLOR]);
  }, index * ANIMATION_SPEED + 3);
};

export const resetColors = (vsxBars) => {
  for (let i = 0; i < vsxBars.length; i += 1) {
    const { style: vsxBarStyle } = vsxBars[i];
    vsxBarStyle.backgroundColor = PRIMARY_COLOR;
  }
};

export const swap = (array, i, j) => {
  // eslint-disable-next-line no-param-reassign
  [array[i], array[j]] = [array[j], array[i]];
};
