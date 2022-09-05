import { expect } from 'chai';

import func from '../../src/35/lib';

suite('Testing 35 ...', () => {
  test.only('case 1', async () => {

    expect(func([1,3,5,6,7], 5)).to.deep.equal(2);
    // expect(func([1,3,5,6], 2)).to.deep.equal(1);
  });
});
