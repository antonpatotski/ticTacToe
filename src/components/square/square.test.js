import Square from './square';

import { shallow } from 'enzyme';

describe('square', () => {
  test('should be exist', () => {
    expect(Square).toBeDefined();
  });

  test('should contain button', () => {
    const wrapper = shallow(<Square />);

    expect(wrapper.find('button')).toHaveLength(1);
  });

  test('should render value', () => {
    const wrapper = shallow(<Square value={'test value'}/>);
    expect(wrapper.find('button').text()).toEqual('test value');
  });

  test('should fire onClick', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Square value={'test value'} onClick={mockFn}/>);
    wrapper.find('button').simulate('click');

    expect(mockFn).toHaveBeenCalled();
  });
})
