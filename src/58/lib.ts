// 58. Length of Last Word
export default function lengthOfLastWord(s: string): number {
  let total = 0;
  let lastIndex = s.length - 1;
  while (s[lastIndex] === ' ') {
    lastIndex--;
  }
  while (s[lastIndex] !== ' ' && lastIndex >= 0) {
    lastIndex--;
    total++;
  }
  return total;
}
