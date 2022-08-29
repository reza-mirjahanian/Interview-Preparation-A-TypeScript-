/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export default class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function traverse(head: ListNode | null): number[]{
  if (!head) return [];
  const result = [];

  let pointer: null | ListNode = head;
  while (pointer) {
    result.push(pointer.val)

    pointer = pointer.next;
  }

  return result;

}
