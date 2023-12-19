/**
 * 数组转链表
 * @param {[]} arr
 */
function createNode(val) {
  return {
    val,
    next: null
  };
}

function arrayToList(arr) {
  let dummy = createNode(0);
  let prev = dummy;

  for (let i = 0; i < arr.length; i++) {
    let node = createNode(arr[i]);
    prev.next = node;
    prev = node;
  }

  return dummy.next;
}

function arrayToList2(arr, start) {
  if (start === arr.length) return null;
  let head = createNode(arr[start]);
  head.next = arrayToList2(arr, start + 1);
  return head;
}
