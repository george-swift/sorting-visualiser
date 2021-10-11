/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { PRIMARY_COLOR } from '../utils';

const Visualiser = ({ array, reference }) => (
  <div className="visualiser" ref={reference}>
    {array.map((value, index) => (
      <div
        className="vsx-bar"
        key={index}
        style={{
          backgroundColor: PRIMARY_COLOR,
          height: `${value}px`,
        }}
      />
    ))}
  </div>
);

Visualiser.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
  reference: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Visualiser;
