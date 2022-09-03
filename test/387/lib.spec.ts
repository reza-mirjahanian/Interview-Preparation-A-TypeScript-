import { expect } from 'chai';

import func from '../../src/387/lib';

suite('Testing 387 ...', () => {
  test.only('case 1', async () => {
    expect(func('loveleetcode')).to.deep.equal(2);
    expect(func('aabb')).to.deep.equal(-1);
  });
});
