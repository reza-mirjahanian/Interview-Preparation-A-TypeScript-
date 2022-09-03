import { expect } from 'chai';

import func from '../../src/1/lib';

suite('Testing 1 ...', () => {
  test('case 1', async () => {
    expect(func([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
  });
});
