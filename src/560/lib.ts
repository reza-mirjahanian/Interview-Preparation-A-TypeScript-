// 560. Subarray Sum Equals K

export default function func(nums: number[], k: number): number {
  let [count, sum] = [0, 0];
  const occurrencesCount = new Map();

  occurrencesCount.set(0, 1);

  for (let num of nums) {
    sum += num;
    if (occurrencesCount.has(sum - k)) {
      count += occurrencesCount.get(sum - k)!;
    }
    occurrencesCount.set(sum, (occurrencesCount.get(sum) || 0) + 1);
  }
  return count;
}
