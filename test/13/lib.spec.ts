import { expect } from 'chai';

import func from '../../src/13/lib';

suite('Testing 13 ...', () => {
  test('case 1', async () => {
    expect(func('III')).to.deep.equal(3);
    expect(func('MCMXCIV')).to.deep.equal(1994);
  });
});
