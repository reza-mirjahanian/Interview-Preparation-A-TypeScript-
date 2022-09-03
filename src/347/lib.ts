// 347. Top K Frequent Elements
export default function func(nums: number[], k: number): number[] {
  const countTable = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let count = countTable.get(nums[i]) ?? 0;
    countTable.set(nums[i], count + 1);
  }
  const items = Array.from(countTable, ([number, count]) => ({
    number,
    count,
  }));
  return items
    .sort((a, b) => b.count - a.count)
    .splice(0, k)
    .map((v) => v.number);
}
