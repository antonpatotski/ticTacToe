import { findWinner } from './helper';

describe('findWinner', () => {
  describe('should return name of winner for all win cases', () => {
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

  describe('should return undefined if no winner', () => {
    const squaresWithoutWinner = ["test name", "test name", null, null, null, null, null, null, null];

    expect(findWinner(squaresWithoutWinner)).toBe(null);
  });

  describe('should return "draw" for draw', () => {
    const squaresWithoutWinner = ["X", "O", "X", "O", "X", "O", "X", "X", "O"];

    expect(findWinner(squaresWithoutWinner)).toBe("draw");
  });
})
