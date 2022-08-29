import { expect } from 'chai';

import ListNode, { traverse } from '../../src/2/types';
import func from '../../src/2/lib';

suite.only('Testing 2 ...', () => {
  test('case 1', async () => {
    const head0 = new ListNode(9);
    const head1 = new ListNode(2);
    const head2 = new ListNode(3);
    // const head3 = new ListNode(4);

    const head4 = new ListNode(4);
    const head5 = new ListNode(5);
    const head6 = new ListNode(9);
    // const head7 = new ListNode(5);

    head0.next = head1;
    head1.next = head2;
    // head2.next = head3;
    // head3.next = head4;
    //////////////////////
    head4.next = head5;
    head5.next = head6;
    // head6.next = head7;

    console.log(traverse(func(head0, head4)));
    // expect(traverse(deleteDuplicates(head0))).to.deep.equal([2,4]);
  });
});
