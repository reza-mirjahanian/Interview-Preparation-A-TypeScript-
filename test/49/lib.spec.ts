import { expect } from 'chai';

import func from '../../src/49/lib';

suite('Testing 49 ...', () => {
  test('case 1', async () => {
    expect(func(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).to.deep.equal([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ]);
  });
});
