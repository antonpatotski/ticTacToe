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
})
