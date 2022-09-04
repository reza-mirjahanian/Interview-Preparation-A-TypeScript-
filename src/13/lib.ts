// 13. Roman to Integer
export default function func(s: string): number {
  const table: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (s.length < 1) {
    throw new Error('Roman can not be empty');
  }
  if (s.length === 1) {
    if (table[s]) {
      return table[s];
    } else {
      throw new Error('Invalid roman');
    }
  }
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    // check if invalid
    const currentRomanLetter = table[s[i]];
    const nextRomanLetter = table[s[i + 1]];
    if (!currentRomanLetter) {
      throw new Error('Invalid roman');
    }
    if (i < s.length - 1 && !nextRomanLetter) {
      throw new Error('Invalid roman');
    }

    if (nextRomanLetter && currentRomanLetter < nextRomanLetter) {
      result += nextRomanLetter - currentRomanLetter;
      i++;
    } else {
      result += currentRomanLetter;
    }
  }

  return result;
}
