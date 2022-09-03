import { expect } from 'chai';

import func from '../../src/560/lib';

suite('Testing 560 ...', () => {
  test.only('case 1', async () => {
    // expect(func([1,2,3],3)).to.be.equal(2);
    expect(func([1, 1, 1], 2)).to.be.equal(2);
  });
});
