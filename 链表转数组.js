/**
 * 链表转数组
 * @param {object} list 为链表头节点
 */
function listToArray(list) {
  if (list === null) return [];
  let result = [list.val];
  let tail = list.next;
  let tailArray = listToArray(tail);

  return result.concat(tailArray);
}

function createNode(val) {
  return {
    val,
    next: null
  };
}

function listToArray2(list) {
  // if(list === null) return []
  let result = [];

  while (list) {
    result.push(list.val);
    list = list.next;
  }

  return result;
}

function prepend(val, head) {
  let node = createNode(val);
  node.next = head;

  return node;
}

function append(val, head) {
  let tail = createNode(val);

  if (head === null) {
    return tail;
  }
  let node = head;
  while (node.next) {
    node = node.next;
  }
  node.next = tail;

  return head;
}

function nth(l, idx) {
  let node = l;
  if (head === null) return undefined;

  for (let i = 0; node.next && i < idx; i++) {
    node = node.next;
  }

  if (i === idx) {
    return node.val;
  } else {
    return undefined;
  }
}

// 如果下标超出范围 将新增节点放入末尾
function insert(l, val, idx) {
  let pre = l;
  let currentNode = createNode(val);

  if (pre === null) return currentNode;

  if (idx === 0) return currentNode;

  // let count = 0 // 最后一位的节点位置
  // while (pre.next) {
  //   pre = pre.next
  //   count++
  // }
  // if(idx > count) {
  //   pre.next = currentNode
  //   return l
  // }

  for (let i = 1; i < idx; i++) {
    pre = pre.next;
  }
  let node = pre.next;
  currentNode.next = node;
  pre.next = currentNode;

  return l;
}
