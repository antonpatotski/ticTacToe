import Board from './board';

import { shallow } from 'enzyme';
import Square from "../square/square";

describe('Board', () => {
  test('should be exist', () => {
    expect(Board).toBeDefined();
  });

  test('should render exact numbers of squares', () => {
    const squares = [1, 2];
    const wrapper = shallow(<Square squares={squares}/>);

    expect(wrapper.find('Square')).toHaveLength(2);
  });
})
