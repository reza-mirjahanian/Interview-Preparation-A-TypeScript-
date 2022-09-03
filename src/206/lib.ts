import ListNode from './types';
// 206. Reverse Linked List


export default function func(head: ListNode | null): ListNode | null {
  // if(!head){
  //   return  null;
  // }
  // const stack = [];
  // while (head){
  //   stack.push(head.val)
  //   head = head.next;
  // }
  // let reverseHead = new ListNode(stack.pop());
  //
  // let tmpNode = reverseHead;
  // while (stack.length>0){
  //   tmpNode.next  = new ListNode(stack.pop());
  //   tmpNode = tmpNode.next;
  // }
  //
  // return  reverseHead;
 //////////////////////////////////////////////
  let pointer =null;
  let c = head ;


  while(c){
    let next = c.next;
    c.next =pointer;  //reverse link and break link between c and n
    pointer=c;  // move p
    c=next;  // move c

  }
  return pointer;
  ///////////////////////////////////////////////

  // if (head == null) return null;
  // if (head.next == null) return head;
  //
  // let next = head.next;
  //
  // let result = func(next);
  // head.next = null;
  // next.next = head;
  //
  // return result;
}
