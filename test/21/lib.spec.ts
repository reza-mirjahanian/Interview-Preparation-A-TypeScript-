import { expect } from 'chai';

import ListNode, { traverse } from '../../src/21/types';
import func from '../../src/21/lib';

suite('Testing 21 ...', () => {
  test('case 1', async () => {
    const head0 = new ListNode(1);
    const head1 = new ListNode(2);
    const head2 = new ListNode(3);
    // const head3 = new ListNode(4);

    const head4 = new ListNode(4);
    const head5 = new ListNode(5);

    head0.next = head1;
    head1.next = head2;

    head4.next = head5;

    expect(traverse(func(head0, head4))).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
