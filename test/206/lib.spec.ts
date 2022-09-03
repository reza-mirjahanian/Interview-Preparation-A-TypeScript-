import { expect } from 'chai';

import ListNode, { traverse } from '../../src/206/types';
import func from '../../src/206/lib';

suite('Testing 206 ...', () => {
  test.only('case 1', async () => {
    const head0 = new ListNode(9);
    const head1 = new ListNode(2);
    const head2 = new ListNode(3);

    head0.next = head1;
    head1.next = head2;


    // console.log(traverse(func(head0, head4)));
    expect(traverse(func(head0))).to.deep.equal([3,2,9]);
  });
});
