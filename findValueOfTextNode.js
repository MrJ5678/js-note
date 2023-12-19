function hasValueOf(node, value) {
  if (node.nodeType === document.TEXT_NODE) {
    if (node.nodeValue.includes(value)) return true;
  }
  if (node.nodeType === document.ELEMENT_NODE) {
    for (const child of node.childNodes) {
      if (hasValueOf(child, value)) return true;
    }
    return false;
  }
}

function getElementsByTagname(node, tagname, result = []) {
  if (node.nodeType === document.ELEMENT_NODE) {
    for (const child of node.childNodes) {
      if (child.nodeName === tagname) {
        result.push(child);
      }
      getElementsByTagname(child, tagname, result);
    }
    return result;
  } else {
    return [];
  }
}

function getElementById(id, node = document.documentElement) {
  if (node.id === id) return node;
  for (const child of node.children) {
    let result = getElementById(id, child);
    if (result) return result;
  }
  return null;
}
