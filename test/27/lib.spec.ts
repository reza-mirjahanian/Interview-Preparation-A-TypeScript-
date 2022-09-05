import { expect } from 'chai';

import func from '../../src/27/lib';

suite('Testing 27 ...', () => {
  test('case 1', async () => {
    // [2,2]
    expect(func([3, 2, 2, 3], 3)).to.deep.equal(2);
  });
});
