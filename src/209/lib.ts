// 209. Minimum Size Subarray Sum
export default function minSubArrayLen(target: number, nums: number[]): number {
  if (nums.length === 0) return 0;

  let start: number = 0;
  let end: number = 0;
  let windowSum: number = 0;
  let min: number = Infinity;

  while (start < nums.length) {
    if (windowSum < target && end < nums.length) {
      windowSum += nums[end];
      end++;
    } else if (windowSum >= target) {
      windowSum -= nums[start];
      min = Math.min(min, end - start);
      start++;
    } else break;
  }

  return min === Infinity ? 0 : min;
}
