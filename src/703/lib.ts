// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
//     Implement KthLargest class:
//
// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
//     int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
export default class KthLargest {
  k: number;
  nums: number[];

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a);
  }

  add(val: number): number {
    // console.log(this.nums)
    let pos = this.nums.length;

    for (let i = 0; i < pos; i++) {
      if (this.nums[i] < val) {
        pos = i;
        break;
      }
    }

    this.nums.splice(pos, 0, val);

    return this.nums[this.k - 1];
  }
}
