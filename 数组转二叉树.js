/**
 * 数组转二叉树
 * @param {[]} array
 * @param {number} rootPos
 */
// 传入的 array 为完全二叉树形式的 顺序型数组
function createTreeNode(val) {
  return {
    val,
    left: null,
    right: null
  };
}

function arrayToTree(array, rootPos = 0) {
  if (array[rootPos] == null) return null;

  let root = createTreeNode(array[rootPos]);
  root.left = arrayToTree(array, rootPos * 2 + 1);
  root.right = arrayToTree(array, rootPos * 2 + 2);
  return root;
}

let array = [1, 2, 3, 4, 5, 6];
arrayToTree(array);

function treeToArray(tree) {
  let array = [];
  function fill(root, pos = 0) {
    if (!root) return;

    array[pos] = root.val;
    fill(root.left, pos * 2 + 1);
    fill(root.right, pos * 2 + 2);
  }
  fill(tree);

  return array;
}
