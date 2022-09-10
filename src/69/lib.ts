// 69. Sqrt(x)
export default function mySqrt(x: number): number {
  let ans = x;
  while (ans * ans > x) {
    ans = Math.floor((ans + Math.floor(x / ans)) / 2);
  }
  return ans;
}
