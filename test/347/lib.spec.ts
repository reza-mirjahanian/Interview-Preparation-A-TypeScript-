import { expect } from 'chai';

import func from '../../src/347/lib';

suite('Testing 347 ...', () => {
  test('case 1', async () => {
    expect(func([1, 1, 1, 2, 2, 3], 2)).to.deep.equal([1, 2]);
    expect(func([1], 1)).to.deep.equal([1]);
  });
});
