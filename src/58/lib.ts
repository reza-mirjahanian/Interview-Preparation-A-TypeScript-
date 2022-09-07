// 66. Plus One
export default function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] <= 9) {
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
}
