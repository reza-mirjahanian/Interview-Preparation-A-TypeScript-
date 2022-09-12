// 88. Merge Sorted Array
// Do not return anything, modify nums1 in-place instead.
export default function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let a = m - 1;
  let b = n - 1;
  let c = m + n - 1;
  while (a >= 0 && b >= 0) {
    if (nums1[a] > nums2[b]) {
      nums1[c] = nums1[a];
      a--;
      c--;
    } else {
      nums1[c] = nums2[b];
      b--;
      c--;
    }
  }

  while (b >= 0) {
    nums1[c] = nums2[b];
    b--;
    c--;
  }
}
