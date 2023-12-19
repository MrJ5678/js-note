function elt(tagName, attrs = {}, ...children) {
  let node = document.createElement(tagName);
  for (const key in attrs) {
    if (Object.hasOwnProperty.call(attrs, key)) {
      let val = attrs[key];
      node.setAttribute(key, val);
    }
  }
  for (const child of children) {
    if (typeof c === 'string') {
      c = document.createTextNode(c);
    }
    node.appendChild(child);
  }

  return node;
}

elt('div', { id: 'foo', class: 'bar' }, elt('span'));

function normalize(node) {
  let s = '';
  let nodes = Array.from(node.childNodes);
  for (let i = 0; i < nodes.length; i++) {
    let child = nodes[i];
    if (child.nodeType === document.ELEMENT_NODE) {
      node.insertBefore(document.createTextNode(s), child);
      s = '';
      normalize(child);
    } else if (child.nodeType === document.TEXT_NODE) {
      s += child.nodeValue;
      node.removeChild(child);
    }
  }
  node.appendChild(document.createTextNode(s));

  return node;
}
