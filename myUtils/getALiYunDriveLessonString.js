function getTitle() {
  let arr = Array.from(document.querySelectorAll('p[class ^= text-primary]'))
    .map(item => item.title)
    .slice(0, -1);
  let reg = /(?<=-)([\u4e00-\u9fa5]|：|:|,|，|\w|;|；)*(?=.mkv)/;
  return arr.map(it => reg.exec(it)[0]);
}
