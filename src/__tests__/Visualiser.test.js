import React from 'react';
import renderer from 'react-test-renderer';
import Visualiser from '../components/Visualiser';

describe('Snapshot of the Visualiser component', () => {
  const mockRef = React.createRef();
  const array = Array(5).fill(6);

  it('should render correctly', () => {
    const tree = renderer.create(
      <Visualiser array={array} reference={mockRef} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
