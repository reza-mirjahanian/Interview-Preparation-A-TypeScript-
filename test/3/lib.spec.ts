import { expect } from 'chai';

import func from '../../src/3/lib';

suite('Testing 3 ...', () => {
  test('case 1', async () => {
    expect(func("abcabcbb")).to.deep.equal(3);
    expect(func("bbbbb")).to.deep.equal(1);
  });
});
