import ListNode from './types';
// 206. Reverse Linked List


export default function func(head: ListNode | null): ListNode | null {
  if(!head){
    return  null;
  }
  const stack = [];
  while (head){
    stack.push(head.val)
    head = head.next;
  }
  let reverseHead = new ListNode(stack.pop());

  let tmpNode = reverseHead;
  while (stack.length>0){
    tmpNode.next  = new ListNode(stack.pop());
    tmpNode = tmpNode.next;
  }

  return  reverseHead;
}
