/* Feature Request -> 2 :
    Merge k Sorted Lists Script:
        - Create a script that includes a function to merge k sorted linked lists and logs the merged list.
*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].val >= this.heap[parentIndex].val) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.val < element.val) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.val < element.val) ||
          (swap !== null && rightChild.val < leftChild.val)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

const mergeKLists = (lists) => {
  const heap = new MinHeap();
  lists.forEach((list) => {
    if (list) heap.insert(list);
  });

  const dummy = new ListNode();
  let current = dummy;

  while (heap.heap.length > 0) {
    const minNode = heap.extractMin();
    current.next = minNode;
    current = current.next;
    if (minNode.next) heap.insert(minNode.next);
  }

  return dummy.next;
};

// Helper function to create a linked list from an array
const arrayToList = (arr) => {
  const dummy = new ListNode();
  let current = dummy;
  arr.forEach((val) => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return dummy.next;
};

// Helper function to convert a linked list to an array
const listToArray = (list) => {
  const result = [];
  while (list) {
    result.push(list.val);
    list = list.next;
  }
  return result;
};

// Test cases
const lists = [
  arrayToList([1, 4, 5]),
  arrayToList([1, 3, 4]),
  arrayToList([2, 6]),
];

const mergedList = mergeKLists(lists);
console.log(listToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4, 5, 6]

// Additional test cases
const lists2 = [arrayToList([]), arrayToList([]), arrayToList([1])];

const mergedList2 = mergeKLists(lists2);
console.log(listToArray(mergedList2)); // Output: [1]

const lists3 = [arrayToList([2]), arrayToList([3]), arrayToList([4])];

const mergedList3 = mergeKLists(lists3);
console.log(listToArray(mergedList3)); // Output: [2, 3, 4]
