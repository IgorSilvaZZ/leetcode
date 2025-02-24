class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head) {
    let aux = head;

    let oldHead = null;
    let currentHead = null;

    while (aux !== null) {
      if (currentHead === null) {
        currentHead = new ListNode();

        currentHead.val = aux.val;
      } else {
        oldHead = new ListNode();

        oldHead.val = currentHead.val;
        oldHead.next = currentHead.next;

        currentHead.val = aux.val;
        currentHead.next = oldHead;
      }

      aux = aux.next;
    }

    return currentHead;
  }

  return null;
}

/* const node5 = new ListNode(5, null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2); */

const node3 = new ListNode(3, null);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

reverseList(node1);
