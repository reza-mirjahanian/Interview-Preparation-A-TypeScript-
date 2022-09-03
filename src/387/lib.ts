// 387. First Unique Character in a String

export default function func(s: string): number {
  let pos = -1;
  const table = new Map();
  for (let char of s) {
    if (table.has(char)) {
      table.set(char, table.get(char) + 1);
    } else {
      table.set(char, 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (table.get(s[i]) === 1) {
      return i;
    }
  }

  return pos;
}
