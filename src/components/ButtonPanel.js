import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ButtonPanel = ({
  randomize, merge, quick, sorted,
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
    <div className="button-panel">
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
        onClick={() => startSorting(merge)}
        disabled={visible}
      >
        Merge Sort
      </button>
      <button
        type="button"
        className="btn vsx-btn"
        onClick={() => startSorting(quick)}
        disabled={visible}
      >
        Quick Sort
      </button>
    </div>
  );
};

ButtonPanel.propTypes = {
  randomize: PropTypes.func.isRequired,
  merge: PropTypes.func.isRequired,
  quick: PropTypes.func.isRequired,
  sorted: PropTypes.bool.isRequired,
};

export default ButtonPanel;
