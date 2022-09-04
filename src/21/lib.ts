import ListNode, { traverse } from './types';
// 21. Merge Two Sorted Lists
export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // if (!list2) return list1;
  // if (!list1) return list2;
  //
  //
  // if (list1.val < list2.val) {
  //   list1.next = mergeTwoLists(list1.next, list2);
  //   return list1;
  // } else {
  //   list2.next = mergeTwoLists(list1, list2.next);
  //   return list2;
  // }
  ////////////////////////////////////////////////////////////
  let list = new ListNode(),
    head = list;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      list.next = list1;
      list1 = list1.next;
    } else {
      list.next = list2;
      list2 = list2.next;
    }
    list = list.next;
  }

  list.next = list1 || list2;
  return head.next;
}
