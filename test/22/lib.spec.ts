import { expect } from 'chai';

import func from '../../src/22/lib';

suite('Testing 22 ...', () => {
  test('case 1', async () => {
    expect(func(3)).to.deep.equal([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ]);
  });
});
