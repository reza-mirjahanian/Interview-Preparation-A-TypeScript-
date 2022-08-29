import ListNode, { traverse } from './types';
// 82. Remove Duplicates from Sorted List II

// Approach 1: Sentinel Head + Predecessor
export default function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let tmpNode = new ListNode(0);
  tmpNode.next = head;

  let prev = tmpNode;
  let cur: ListNode | null = head;

  while (cur != null) {
    while (cur.next != null && cur.val === cur.next.val) {
      cur = cur.next;
    }

    if (prev.next !== cur) {
      prev.next = cur.next;
    } else {
      prev = prev.next;
    }

    cur = cur.next;

  }

  return tmpNode.next;
}
