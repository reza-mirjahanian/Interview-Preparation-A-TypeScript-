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
// 94. Binary Tree Inorder Traversal
export default function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const l = root.left ? inorderTraversal(root.left) : [];
  const m = root.val;
  const r = root.val ? inorderTraversal(root.right) : [];

  return [...l, m, ...r];
}
