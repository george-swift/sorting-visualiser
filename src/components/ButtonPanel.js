import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ButtonPanel = ({
  randomize, insertion, merge, quick, heap, sorted,
}) => {
  const [visible, setVisible] = useState(false);

  const startSorting = (algorithm) => {
    if (sorted) return;
    algorithm();
    setVisible(true);
  };

  useEffect(() => {
    if (sorted) setVisible(false);
  }, [sorted]);

  return (
    <div className="container button-panel">
      <button
        type="button"
        className="btn vsx-btn"
        onClick={randomize}
        disabled={visible}
      >
        Generate New List
      </button>
      <button
        type="button"
        className="btn vsx-btn"
        title="Worst case: O(N^2)"
        onClick={() => startSorting(insertion)}
        disabled={visible}
      >
        Insertion Sort
      </button>
      <button
        type="button"
        className="btn vsx-btn"
        title="Worst case: O(NLogN)"
        onClick={() => startSorting(merge)}
        disabled={visible}
      >
        Merge Sort
      </button>
      <button
        type="button"
        className="btn vsx-btn"
        title="Worst case: O(N^2)"
        onClick={() => startSorting(quick)}
        disabled={visible}
      >
        Quick Sort
      </button>
      <button
        type="button"
        className="btn vsx-btn"
        title="Worst case: O(NLogN)"
        onClick={() => startSorting(heap)}
        disabled={visible}
      >
        Heap Sort
      </button>
    </div>
  );
};

ButtonPanel.propTypes = {
  randomize: PropTypes.func.isRequired,
  insertion: PropTypes.func.isRequired,
  merge: PropTypes.func.isRequired,
  quick: PropTypes.func.isRequired,
  heap: PropTypes.func.isRequired,
  sorted: PropTypes.bool.isRequired,
};

export default ButtonPanel;
