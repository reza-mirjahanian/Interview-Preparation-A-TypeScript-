import {
  expect,
} from 'chai';

import ListNode from '../../src/104/types';
import hasCycle from '../../src/104/lib';

suite('Testing ...', () => {
  // suiteSetup(async () => {
  // });
  //
  // suiteTeardown(async () => {
  //
  // });

  suite('hasCycle ', () => {
    test('case 1', async () => {
      const head0 = new ListNode(3);
      const head1 = new ListNode(2);
      const head2 = new ListNode(0);
      const head3 = new ListNode(-4);

      head0.next = head1;
      head1.next = head2;
      head2.next = head3;
      head3.next = head1;

      expect(hasCycle(head0)).to.equal(true);
    });
  });

  test('case 2 a', () => {
    const head0 = new ListNode(1);
    const head1 = new ListNode(2);

    head0.next = head1;
    head1.next = head0;

    expect(hasCycle(head0)).to.equal(true);
  });
  test('case 2 b', () => {
    const head0 = new ListNode(1);
    const head1 = new ListNode(2);

    head0.next = head1;

    expect(hasCycle(head0)).to.equal(false);
  });

  test('case 3', () => {
    const head0 = new ListNode(1);

    expect(hasCycle(head0)).to.equal(false);
  });
});
