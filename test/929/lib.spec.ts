import { expect } from 'chai';

import func from '../../src/929/lib';

suite('Testing 929 ...', () => {
  test('case 1', async () => {
    expect(
      func([
        'test.email+alex@leetcode.com',
        'test.e.mail+bob.cathy@leetcode.com',
        'testemail+david@lee.tcode.com',
      ])
    ).to.deep.equal(2);
  });
});
