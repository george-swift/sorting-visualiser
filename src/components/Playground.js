import { useEffect, useState, useRef } from 'react';
import insertionSortAnimation from '../algorithms/insertionSort';
import mergeSortAnimation from '../algorithms/mergeSort';
import quickSortAnimation from '../algorithms/quickSort';
import heapSortAnimation from '../algorithms/heapSort';
import {
  ANIMATION_SPEED, MAX_HEIGHT, MIN_HEIGHT, SORTED_COLOR,
  getTotalBars, randomFromInterval, changeHeight,
  animateIndex, animateHeap, resetColors,
} from '../utils';
import useWindowDimensions from '../utils/customHook';
import ButtonPanel from './ButtonPanel';
import Visualiser from './Visualiser';

const Playground = () => {
  const [array, setArray] = useState([]);
  const [sorted, setSorted] = useState(false);
  const totalBars = getTotalBars(useWindowDimensions());
  const containerRef = useRef(null);
  const vsxBars = containerRef.current?.children;

  const animateSortedList = () => {
    for (let i = 0; i < vsxBars.length; i += 1) {
      const { style: vsxBarStyle } = vsxBars[i];
      setTimeout(() => {
        vsxBarStyle.backgroundColor = SORTED_COLOR;
      }, i * ANIMATION_SPEED);
    }
    setTimeout(() => {
      setSorted(true);
    }, vsxBars.length * ANIMATION_SPEED);
  };

  const visualise = ({ animations, length }) => {
    animations.forEach(([comparison, swapped], index) => {
      setTimeout(() => {
        if (!swapped) {
          if (comparison.length === 2) {
            const [i, j] = comparison;
            animateIndex(vsxBars, i, j);
          } else {
            const [idx] = comparison;
            animateIndex(vsxBars, idx);
          }
        } else changeHeight(vsxBars, comparison);
      }, index * ANIMATION_SPEED);
    });
    setTimeout(() => animateSortedList(), length * ANIMATION_SPEED);
  };

  const generateNewList = () => {
    if (sorted) resetColors(vsxBars);

    setSorted(false);
    const list = [];
    for (let i = 0; i < totalBars; i += 1) {
      list.push(randomFromInterval(MIN_HEIGHT, MAX_HEIGHT));
    }
    setArray(list);
  };

  useEffect(() => generateNewList(), []);

  const insertionSort = () => visualise(insertionSortAnimation(array));

  const mergeSort = () => visualise(mergeSortAnimation(array));

  const quickSort = () => visualise(quickSortAnimation(array));

  const heapSort = () => {
    const { animations, length } = heapSortAnimation(array);
    animations.forEach((heap, index) => animateHeap(vsxBars, heap, index));
    setTimeout(() => animateSortedList(), length * ANIMATION_SPEED);
  };

  return (
    <section className="container-fluid playground">
      <Visualiser array={array} reference={containerRef} />
      <ButtonPanel
        randomize={generateNewList}
        insertion={insertionSort}
        merge={mergeSort}
        quick={quickSort}
        heap={heapSort}
        sorted={sorted}
      />
    </section>
  );
};

export default Playground;
