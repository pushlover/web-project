// https://leetcode-cn.com/problems/path-sum/
// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

// 叶子节点 是指没有子节点的节点。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/path-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
