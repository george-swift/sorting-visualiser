export const MIN_HEIGHT = 5;
export const MAX_HEIGHT = 500;
export const ANIMATION_SPEED = 1;
export const PRIMARY_COLOR = 'turquoise';
export const SECONDARY_COLOR = 'red';
export const SORTED_COLOR = 'blue';

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

export const changeHeight = (vsxBars, comparison) => {
  const [k, newHeight] = comparison;
  const { style: barStyle } = vsxBars[k];
  barStyle.height = `${newHeight}px`;
};

export const animateIndex = (vsxBars, ...positions) => {
  positions.forEach((index) => {
    const { style: barStyle } = vsxBars[index];
    setTimeout(() => {
      barStyle.backgroundColor = SECONDARY_COLOR;
    }, ANIMATION_SPEED);
    setTimeout(() => {
      barStyle.backgroundColor = PRIMARY_COLOR;
    }, ANIMATION_SPEED * 3);
  });
};

export const resetColors = (vsxBars) => {
  for (let i = 0; i < vsxBars.length; i += 1) {
    const { style: vsxBarStyle } = vsxBars[i];
    vsxBarStyle.backgroundColor = PRIMARY_COLOR;
  }
};
