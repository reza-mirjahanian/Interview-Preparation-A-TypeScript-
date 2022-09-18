// 4. Median of Two Sorted Arrays
export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const requiredMoves = Math.floor((len1 + len2) / 2) + 1;

  let cur: number;
  let indA = 0;
  let indB = 0;

  if (len2 === 0 || (len1 !== 0 && nums1[0] < nums2[0])) {
    cur = nums1[0];
    indA = 1;
  } else {
    cur = nums2[0];
    indB = 1;
  }

  let prev = 0;

  for (let i = 1; i < requiredMoves; i += 1) {
    if (
      (indA < len1 && indB < len2 && nums1[indA] < nums2[indB]) ||
      (indA < len1 && indB >= len2)
    ) {
      prev = cur;
      cur = nums1[indA++];
    } else {
      prev = cur;
      cur = nums2[indB++];
    }
  }

  if (cur + prev === 0) {
    return 0;
  }

  if ((len1 + len2) % 2 === 0) {
    return (cur + prev) / 2;
  } else {
    return cur;
  }
}
