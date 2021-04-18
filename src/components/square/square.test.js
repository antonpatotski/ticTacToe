import Square from './square';

import { shallow } from 'enzyme';

describe('square', () => {
  test('should be exist', () => {
    expect(Square).toBeDefined();
  });

  test('should contain button', () => {
    const wrapper = shallow(<Square />);
    // const input = wrapper.find('button');

    expect(wrapper.find('button')).toHaveLength(1);
  });
})
