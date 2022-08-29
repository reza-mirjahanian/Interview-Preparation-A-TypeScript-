import ListNode from './types';
// 83. Remove Duplicates from Sorted List
export default function deleteDuplicates(
  head: ListNode | null
): ListNode | null {
  if (!head) return head;

  let pointer: null | ListNode = head;

  while (pointer) {
    while (pointer.next && pointer.next.val === pointer.val) {
      pointer.next = pointer.next.next;
    }

    pointer = pointer.next;
  }

  return head;
}
