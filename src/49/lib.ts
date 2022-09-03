// 1. Two Sum

export default function func(strs: string[]): string[][] {
  const table: Map<string, string[]> = new Map();
  strs.forEach((str) => {
    const sortedStr = str.split('').sort().join('');
    if (!table.has(sortedStr)) {
      table.set(sortedStr, []);
    }
    table.set(sortedStr, [...table.get(sortedStr)!, str]);
  });

  return [...table.values()];
}
