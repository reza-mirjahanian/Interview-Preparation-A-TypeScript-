import { expect } from 'chai';

import func from '../../src/46/lib';

suite('Testing 46 ...', () => {
  test('case 1', async () => {
    expect(func([1])).to.deep.equal([[1]]);
  });
});
