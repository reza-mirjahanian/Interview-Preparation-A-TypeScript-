import { expect } from 'chai';

import KthLargest from '../../src/703/lib2';

suite('Testing 703 ...', () => {
  test.only('case 1', async () => {
    const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    expect(kthLargest.add(3)).to.be.equal(4); // return 4
    expect(kthLargest.add(5)).to.be.equal(5); // return 5
    expect(kthLargest.add(10)).to.be.equal(5); // return 5
    expect(kthLargest.add(9)).to.be.equal(8); // return 8
    expect(kthLargest.add(4)).to.be.equal(8); // return 8
  });
});
