/**
 Definition for a binary tree node.

 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// 100. Same Tree
export default function isSameTree(
  p: TreeNode | null,
  q: TreeNode | null
): boolean {
  if (p == null && q == null) {
    return true;
  }
  if (p == null || q == null) {
    return false;
  }

  if (p.val != q.val) {
    return false;
  }

  if (p.left?.val == q.left?.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  if (p.left?.val == q.right?.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.left);
  }

  return false;
}
