/* Feature Request -> 4 :
    Merge Two Sorted Lists Script:
        - Create a script that includes a function to merge two sorted linked lists and logs the merged list.
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode();
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
    let dummy = new ListNode();
    let current = dummy;
    arr.forEach(val => {
        current.next = new ListNode(val);
        current = current.next;
    });
    return dummy.next;
};

// Helper function to print a linked list
const printLinkedList = (head) => {
    let current = head;
    const result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
};

// Test cases
const testCases = [
    {
        list1: createLinkedList([1, 2, 4]),
        list2: createLinkedList([1, 3, 4])
    },
    {
        list1: createLinkedList([2, 3, 7]),
        list2: createLinkedList([1, 5, 6])
    },
    {
        list1: createLinkedList([]),
        list2: createLinkedList([0])
    }
];

testCases.forEach((testCase, index) => {
    const { list1, list2 } = testCase;
    const mergedList = mergeTwoLists(list1, list2);
    console.log(`Test Case ${index + 1}:`);
    printLinkedList(mergedList);
});

// Test Case 1:
// 1 -> 1 -> 2 -> 3 -> 4 -> 4
// Test Case 2:
// 1 -> 2 -> 3 -> 5 -> 6 -> 7
// Test Case 3:
// 0