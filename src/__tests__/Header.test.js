import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Snapshot of  the Header component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
