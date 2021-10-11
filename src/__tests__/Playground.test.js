import renderer from 'react-test-renderer';
import Playground from '../components/Playground';

describe('Snapshot of the Playground component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Playground />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
