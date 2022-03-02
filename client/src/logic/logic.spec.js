/* eslint-disable folders/match-regex */
import { add } from './logic.js';

describe('Add strings to given array', () => {
  describe('Default values', () => {
    it('Default value', () => {
      const expected = [];
      const actual = add();
      expect(actual).toEqual(expected);
    });
  });
});
