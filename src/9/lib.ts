// 9. Palindrome Number
export default function func(x: number): boolean {
  return x.toString().split('').reverse().join('') === x.toString();
}
