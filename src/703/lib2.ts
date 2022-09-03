// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
//     Implement KthLargest class:
//
// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
//     int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
import  MinHeap  from './heap';

export default class KthLargest {
  minHeap: MinHeap;

  constructor(k: number, nums: number[]) {
    this.minHeap = new MinHeap(k);

    for (const number of nums) {
      this.minHeap.insert(number);
    }
  }

  add(val: number): number {
    this.minHeap.insert(val);

    return this.minHeap.peek();
  }
}
