import ListNode from './types';
import { sum } from 'lodash';
// 2. Add Two Numbers
// Approach 1: Sentinel Head + Predecessor
export default function func(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  const sumHead = new ListNode(0);
  let tmpNode = sumHead;

  while (l1 || l2) {
    let l1val = 0;
    let l2val = 0;
    if (l1) {
      l1val = l1.val;

      l1 = l1.next;
    }
    if (l2) {
      l2val = l2.val;

      l2 = l2.next;
    }
    let sum = l1val + l2val + tmpNode.val;

    tmpNode.val = sum % 10;
    if (l1 || l2 || sum > 9) {
      tmpNode.next = new ListNode(sum > 9 ? 1 : 0);
      tmpNode = tmpNode.next;
    }
  }

  return sumHead;
}
