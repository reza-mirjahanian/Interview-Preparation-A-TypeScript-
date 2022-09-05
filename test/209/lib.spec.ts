import { expect } from 'chai';

import func from '../../src/209/lib';

suite('Testing 209 ...', () => {
  test('case 1', async () => {
    expect(func(7, [2, 3, 1, 2, 4, 3])).to.deep.equal(2);
  });
});
