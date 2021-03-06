import Board from './board';
import Square from '../square/square';

import { shallow } from 'enzyme';

describe('Board', () => {
  test('should be exist', () => {
    expect(Board).toBeDefined();
  });

  test('should render exact numbers of squares', () => {
    const squares = [1, 2];
    const wrapper = shallow(<Board squares={squares}/>);

    expect(wrapper.find(Square)).toHaveLength(2);
  });

  test('should contain squares values', () => {
    const squares = ['test 1', 'test 2'];
    const wrapper = shallow(<Board squares={squares}/>);

    expect(wrapper.find(Square).at(0).props().value).toBe('test 1');
    expect(wrapper.find(Square).at(1).props().value).toBe('test 2');
  });

  test('should contain squares with callbacks', () => {
    const mockFn = jest.fn(value => value);
    const squares = [1, 2];
    const wrapper = shallow(<Board squares={squares} onClick={mockFn}/>);

    expect(wrapper.find(Square).at(0).props().onClick()).toEqual(0);
    expect(wrapper.find(Square).at(1).props().onClick()).toEqual(1);
  });
})
