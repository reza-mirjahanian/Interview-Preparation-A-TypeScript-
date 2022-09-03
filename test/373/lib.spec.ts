import { expect } from 'chai';

import func from '../../src/373/lib';

suite('Testing 373 ...', () => {
  test('case 1', async () => {
    expect(func([1, 7, 11], [2, 4, 6], 3)).to.deep.equal([
      [1, 2],
      [1, 4],
      [1, 6],
    ]);
    // expect(func([1], 1)).to.deep.equal([1]);
  });
});
