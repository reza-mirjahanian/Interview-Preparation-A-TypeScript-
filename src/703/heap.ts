export default class MinHeap {
  // Min heaps can be represented as arrays. We can calculate an index's parent,
  // left and right child via simple math.
  numbers: number[];
  MAX_SIZE: number;

  constructor(maxSize: number) {
    this.numbers = [];
    this.MAX_SIZE = maxSize;
  }

  // Add the new value to the end of the array/tree. Heapify up. If our new heap is over capacity,
  // Remove the min value.
  insert(value: number) {
    this.numbers.push(value);
    this.minHeapifyUp();

    if (this.numbers.length > this.MAX_SIZE) {
      this.extract();
    }
  }

  // Remove the first (min) value from the array/tree. Move the last value to the front,
  // and heapify down.
  extract(): number {
    const min = this.numbers[0];
    const lastNode = this.numbers.pop();

    this.numbers[0] = lastNode!;
    this.minHeapifyDown();

    return min;
  }

  // Retrieve the min value without removing it.
  peek(): number {
    return this.numbers[0];
  }

  // Start from the last value in the array/tree. Compare it to its parent. If parent value is greater
  // than the current, it does not satisfy the min heap requirement (parent is less than either of
  // its children). If so, swap the values and move up the tree. Otherwise, we're done.
  minHeapifyUp() {
    for (let ind = this.numbers.length - 1; ind > 0; ) {
      const parentInd = this.getParent(ind);
      if (this.numbers[parentInd] > this.numbers[ind]) {
        this.swap(parentInd, ind);
        ind = parentInd;
      } else {
        return;
      }
    }
  }

  // Start at the top of the heap, comparing the current node to whichever child has a smaller value.
  // If the current value is greater than its smallest child, it does not satisfy the min heap
  // Requirment. Swap it with the child and move down the tree. Otherwise, we're done.
  minHeapifyDown() {
    const lastInd = this.numbers.length - 1;
    for (let ind = 0; ind < lastInd; ) {
      let [leftInd, rightInd] = this.getChildren(ind);
      let childInd = leftInd;

      if (leftInd > lastInd) {
        return;
      } else if (
        rightInd <= lastInd &&
        this.numbers[rightInd] < this.numbers[leftInd]
      ) {
        childInd = rightInd;
      }

      if (this.numbers[ind] > this.numbers[childInd]) {
        this.swap(ind, childInd);
        ind = childInd;
      } else {
        return;
      }
    }
  }

  // ES6 destructure assignment that swaps two variables.
  swap(indA: number, indB: number) {
    [this.numbers[indA], this.numbers[indB]] = [
      this.numbers[indB],
      this.numbers[indA],
    ];
  }

  // Calculation to get parent index
  getParent(ind: number): number {
    return Math.floor((ind - 1) / 2);
  }

  // Calculation to get left and right child indices, respectively.
  getChildren(ind: number): [number, number] {
    return [ind * 2 + 1, ind * 2 + 2];
  }
}
