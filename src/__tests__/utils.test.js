import * as utils from '../utils';

describe('Resilience of utility functions', () => {
  const vsxBars = [
    {
      style: {
        height: '10px',
        backgroundColor: utils.PRIMARY_COLOR,
      },
    },
    {
      style: {
        height: '20px',
        backgroundColor: utils.SECONDARY_COLOR,
      },
    },
  ];

  it('should change background color of bars correctly', () => {
    const details = [1, utils.SORTED_COLOR];
    utils.changeBgColor(vsxBars, details);
    const [, sortedBar] = vsxBars;
    expect(sortedBar.style.backgroundColor).toEqual(utils.SORTED_COLOR);
  });

  it('should reset background colors of bars correctly', () => {
    vsxBars.forEach((_, index, array) => {
      utils.changeBgColor(array, [index, utils.SECONDARY_COLOR]);
    });

    expect(vsxBars.every(({ style }) => style.backgroundColor)).toBeTruthy();

    utils.resetColors(vsxBars);

    expect(
      vsxBars.every(({ style }) => style.backgroundColor === utils.PRIMARY_COLOR),
    ).toBeTruthy();
  });

  it('should change heights of bars correctly', () => {
    const comparison = [0, 35];
    utils.changeHeight(vsxBars, comparison);
    const { style: barOneStyle } = vsxBars[0];
    expect(barOneStyle.height).toMatch('35px');
  });
});
