// 3. Longest Substring Without Repeating Characters
// https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples
export default function func(s: string): number {
  const table = new Map();
  let max = 0,
    i = 0,
    j = 0;
  while (j < s.length) {
    i = table.has(s[j]) ? Math.max(table.get(s[j]) + 1, i) : i;
    table.set(s[j], j++);
    max = Math.max(j - i, max);
  }
  return max;
}
