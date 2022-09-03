import { expect } from 'chai';

import ListNode, { traverse } from '../../src/82/types';
import deleteDuplicates from '../../src/82/lib';

suite('Testing 82 ...', () => {
  test('case 1', async () => {
    const head0 = new ListNode(1);
    const head1 = new ListNode(1);
    const head2 = new ListNode(2);
    const head3 = new ListNode(3);
    const head4 = new ListNode(3);
    const head5 = new ListNode(4);
    const head6 = new ListNode(5);
    const head7 = new ListNode(5);

    head0.next = head1;
    head1.next = head2;
    head2.next = head3;
    head3.next = head4;
    head4.next = head5;
    head5.next = head6;
    head6.next = head7;

    expect(traverse(deleteDuplicates(head0))).to.deep.equal([2, 4]);
  });
});
