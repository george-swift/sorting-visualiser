import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonPanel from '../components/ButtonPanel';

const ButtonPanelProps = {
  algorithm: () => {},
  sorted: false,
};

describe('Snapshot of the ButtonPanel component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <ButtonPanel
        randomize={ButtonPanelProps.algorithm}
        insertion={ButtonPanelProps.algorithm}
        merge={ButtonPanelProps.algorithm}
        quick={ButtonPanelProps.algorithm}
        heap={ButtonPanelProps.algorithm}
        sorted={ButtonPanelProps.sorted}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Funcitonality of buttons in panel', () => {
  beforeAll(() => {
    render(
      <ButtonPanel
        randomize={ButtonPanelProps.algorithm}
        insertion={ButtonPanelProps.algorithm}
        merge={ButtonPanelProps.algorithm}
        quick={ButtonPanelProps.algorithm}
        heap={ButtonPanelProps.algorithm}
        sorted={ButtonPanelProps.sorted}
      />,
    );
  });

  it('should change button state to disabled when sorting', () => {
    const mergeSortButton = screen
      .getAllByRole('button')
      .find((button) => button.textContent === 'Merge Sort');

    fireEvent.click(mergeSortButton);
    screen.getAllByRole('button').forEach((button) => {
      expect(button).toHaveAttribute('disabled');
    });
  });
});
