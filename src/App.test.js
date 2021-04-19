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
})
