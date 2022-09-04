// 14. Longest Common Prefix
export default function func(strs: string[]): string {
  let result = '';
  if (strs.length < 1) {
    return result;
  }
  let minStr = strs[0].length;
  for (let str of strs) {
    if (str.length < minStr) {
      minStr = str.length;
    }
  }
  for (let i = 0; i < minStr; i++) {
    const firstChar = strs[0].charAt(i);
    for (let word of strs) {
      if (word.charAt(i) !== firstChar) {
        return result;
      }
    }
    result += firstChar;
  }

  return result;
}
