import App from './App';
import Board from "./components/board/board";

import {shallow} from "enzyme";

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

    expect(wrapper.find('.start-button')).toBeDefined();
  });

  test('should contain reset move button', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.start-button')).toBeDefined();
  });
})
