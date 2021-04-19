import App from './App';
import Board from "./components/board/board";

import {shallow, mount} from "enzyme";

describe('App', () => {
  test('should be exist', () => {
    expect(App).toBeDefined();
  });

  test('should contain board', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Board)).toBeDefined();
  });

  test('should contain start game button', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.app-body__button--new')).toHaveLength(1);
  });

  test('should contain reset move button', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.app-body__button--reset')).toHaveLength(1);
  });

  test('should contain turn notice', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.app-body__turn')).toBeDefined();
  });

  test('should handle square click', () => {
    const wrapper = mount(<App />);
    let squares = wrapper.find(Board).props().squares;

    expect(squares.every(square => square === null)).toBe(true)
    wrapper.find('.square').at(0).simulate('click');

    squares = wrapper.find(Board).props().squares;

    expect(squares).toEqual(["X", null, null, null, null, null, null, null, null]);
  })

  test('should start new game', () => {
    const wrapper = mount(<App />);
    let squares = wrapper.find(Board).props().squares;

    expect(squares.every(square => square === null)).toBe(true);

    wrapper.find('.square').at(0).simulate('click'); // make first move
    squares = wrapper.find(Board).props().squares;

    expect(squares).toEqual(["X", null, null, null, null, null, null, null, null]);

    wrapper.find('.app-body__button--new').at(0).simulate('click');
    squares = wrapper.find(Board).props().squares;

    expect(squares).toEqual([null, null, null, null, null, null, null, null, null]);
  })

  test('avoid to click twice on the same element', () => {
    const wrapper = mount(<App />);
    let squares = wrapper.find(Board).props().squares;

    expect(squares.every(square => square === null)).toBe(true);

    wrapper.find('.square').at(0).simulate('click'); // make first move
    wrapper.find('.square').at(0).simulate('click'); // make second move on same square
    squares = wrapper.find(Board).props().squares;

    expect(squares).toEqual(["X", null, null, null, null, null, null, null, null]);
  })
})
