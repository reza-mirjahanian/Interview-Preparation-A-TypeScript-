// 78. Subsets
export default function func(nums: number[]): number[][] {
  const subsets: number[][] = [];
  const subset: number[] = [];
  const _calcSubset = (i: number): void => {
    if (i >= nums.length) {
      subsets.push([...subset])
      return;
    }
    subset.push(nums[i]); // include current number
    _calcSubset(i + 1); // find all combinations with current number
    subset.pop(); // remove current number
    _calcSubset(i + 1); // find all combinations without current number
  };
  _calcSubset(0);
  return subsets;
}
