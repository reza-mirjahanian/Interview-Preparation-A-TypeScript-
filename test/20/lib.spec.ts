import { expect } from 'chai';

import func from '../../src/20/lib';

suite.only('Testing 20 ...', () => {
  test('case 1', async () => {
    expect(func('()')).to.equal(true);
    expect(func('()[]{}')).to.equal(true);
    expect(func('(]')).to.equal(false);
  });
});
