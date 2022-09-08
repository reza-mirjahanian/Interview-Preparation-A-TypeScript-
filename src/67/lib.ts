// 67. Add Binary
export default function addBinary(a: string, b: string): string {
  const n = a.length;
  const m = b.length;
  if (m > n) return addBinary(b, a);

  let carry = 0;
  const arr = [];
  let j = m - 1;

  for (let i = n - 1; i > -1; i--) {
    if (a[i] === '1') carry++;
    if (j > -1 && b[j--] === '1') carry++;

    carry % 2 === 0 ? arr.unshift('0') : arr.unshift('1');

    carry = Math.floor(carry / 2);
  }

  if (carry === 1) arr.unshift(1);

  return arr.join('');
}
