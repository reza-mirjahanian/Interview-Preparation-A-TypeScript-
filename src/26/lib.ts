// 26. Remove Duplicates from Sorted Array
function removeDuplicates(nums: number[]): number {
  const size = nums.length;

  if (size === 1 || size === 0) {
    return size;
  }

  let index = 0;
  for (let pointer = 1; pointer < size; pointer++) {
    if (nums[index] === nums[pointer]) {
    } else {
      nums[++index] = nums[pointer];
    }
  }

  return index + 1;
}
