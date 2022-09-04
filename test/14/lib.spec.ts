import { expect } from 'chai';

import func from '../../src/14/lib';

suite('Testing 14 ...', () => {
  test('case 1', async () => {
    expect(func(['flower', 'flow', 'flight'])).to.deep.equal('fl');
    expect(func(['dog', 'racecar', 'car'])).to.deep.equal('');
    expect(func([])).to.deep.equal('');
  });
});
