// 70. Climbing Stairs
export default function climbStairs(n: number): number {
  let R = [0, 1, 2, 3];
  for (let i = 4; i <= n; ++i) {
    R[i] = R[i - 1] + R[i - 2];
  }

  return R[n];
}
