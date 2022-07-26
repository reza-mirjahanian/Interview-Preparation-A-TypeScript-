import ListNode from './types';
// 141. Linked List Cycle
export default function detectCycle(head: ListNode | null): ListNode | null {
  let slowPtr = head;
  let fastPtr = head;
  if (fastPtr == null || fastPtr.next == null) return null;
  while (fastPtr && fastPtr.next) {
    fastPtr = fastPtr.next!.next!;
    if (fastPtr == null || fastPtr.next == null) return null;

    slowPtr = slowPtr!.next!;

    if (slowPtr === fastPtr) break;
  }

  fastPtr = head;
  while (fastPtr !== slowPtr) {
    fastPtr = fastPtr!.next!;
    slowPtr = slowPtr!.next!;
  }
  return slowPtr;
}
