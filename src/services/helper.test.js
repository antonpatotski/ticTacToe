import { findWinner } from './helper';

describe('findWinner', () => {
  describe('should return symbol of winner for all win cases', () => {
    const squaresWithWinner = [
      ["test name", "test name", "test name", null, null, null, null, null, null],
      [null, null, null, "test name", "test name", "test name", null, null, null],
      [null, null, null, null, null, null, "test name", "test name", "test name"],
      ["test name", null, null, "test name", null, null, "test name", null, null],
      [null, "test name", null, null, "test name", null, null, "test name", null],
      [null, null, "test name", null, null, "test name", null, null, "test name"],
      ["test name", null, null, null, "test name", null, null, null, "test name"],
      [null, null, "test name", null, "test name", null, "test name", null, null],
    ];

    squaresWithWinner.forEach((currentCase, i) => {
      test(`Should return winner name for case number ${i}`, () => {
        expect(findWinner(currentCase)).toBe('test name');
      })
    })
  });
})
