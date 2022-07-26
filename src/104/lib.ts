import ListNode from './types';
// 141. Linked List Cycle
export default function hasCycle(head: ListNode | null): boolean {
  let fast = head; // moves 2 Nodes at a time
  let slow = head; // moves 1 Node  at a time

  while (fast != null && slow != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true; // since "slow" and "fast" collided
    }
  }
  return false;
}
