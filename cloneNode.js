function cloneNode(node) {
  if (node.nodeType === document.TEXT_NODE) {
    return document.createTextNode(node.nodeValue);
  } else if (node.nodeType === document.ELEMENT_NODE) {
    let copy = document.createElement(node.tagName);
    let attrNames = node.getAttributeNames();
    for (const attrName of attrNames) {
      let attrVal = node.getAttribute(attrName);
      copy.setAttribute(attrName, attrVal);
    }
    for (const child of node.childNodes) {
      copy.appendChild(cloneNode(child));
    }
    return copy;
  }
}
