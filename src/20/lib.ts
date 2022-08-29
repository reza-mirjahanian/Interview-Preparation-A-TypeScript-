// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.r
export default function func(s: string): boolean {
  if (s == null || s.length == 0) return true;
  if (s.length == 1) return false;

  const open = ['(', '[', '{'];
  const table: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let stack = [];
  for (let x of s) {
    if (open.includes(x)) {
      stack.push(x);
    } else {
      if (stack.length != 0) {
        const test = stack.pop() as string;

        if (x !== table[test]) {
          return false;
        }
      } else return false;
    }
  }

  return stack.length == 0;
}
