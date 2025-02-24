package linked_list_cyrcle;

public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode current = head;
        ListNode next = current != null && current.next != null && current.next.next != null ? current.next.next : null;

        while (current != null && current.next != null && next != null) {
            if (next.next == null || next.next.next == null) {
                break;
            }

            System.out.println(current.val + " == " + next.val);

            if (current.val == next.val) {
                return true;
            }

            current = current.next;
            next = next.next.next;
        }

        return false;
    }
}

