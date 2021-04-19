// https://leetcode-cn.com/problems/path-sum/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root == null) return false;                // 遍历到null节点
    if (root.left == null && root.right == null) { // 遍历到叶子节点
        return targetSum - root.val == 0;                  // 如果满足这个就返回true。否则返回false
    }
    // 当前递归问题 拆解成 两个子树的问题，其中一个true了就
    return hasPathSum(root.left,targetSum - root.val) || hasPathSum(root.right, targetSum - root.val); 


};
