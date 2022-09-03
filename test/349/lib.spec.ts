import { expect } from 'chai';

import func from '../../src/349/lib';

suite('Testing 349 ...', () => {
  test('case 1', async () => {

    expect(func( [4,9,5],[9,4,9,8,4])).to.deep.equal([
    9,4
    ]);
  });
});
