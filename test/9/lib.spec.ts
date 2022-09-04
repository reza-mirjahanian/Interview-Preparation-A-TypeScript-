import { expect } from 'chai';

import func from '../../src/9/lib';

suite('Testing 9 ...', () => {
  test('case 1', async () => {
    expect(func(121)).to.deep.equal(true);
  });
});
