function treeToCondensedArray(root) {
  let array = [];
  if (!root) return array;

  let nodes = [root];
  for (let i = 0; i < array.length; i++) {
    let node = nodes[i];
    if (node) {
      array.push(node.val);
      nodes.push(node.left);
      nodes.push(node.right);
    } else {
      array.push(null);
    }
  }

  return array;
}
