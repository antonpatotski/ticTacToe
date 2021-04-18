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
    console.log(wrapper);

    expect(wrapper.find(Square)).toHaveLength(2);
  });
})
