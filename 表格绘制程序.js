/**
 *
 * @param {string[][][]} rows
 */
/*
  let rows = [
    [cell1, cell2, cell3],
    [cell4, cell5, cell6],
  ]
*/
function rowHeights(rows) {
  return rows.map(row => {
    return row.reduce((max, cell) => {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

/**
 *
 * @param {string[][][]} rows
 */
/*
  let rows = [
    [cell1, cell2, cell3],
    [cell4, cell5, cell6],
  ]
*/
function colWidths(rows) {
  return rows[0].map((_, i) => {
    return rows.reduce((max, row) => {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  let heights = rowHeights(rows);
  let widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(block => block[lineNo]).join(' ');
  }

  function drawRow(row, rowNum) {
    let blocks = row.map((cell, colNum) =>
      cell.draw(widths[colNum], heights[rowNum])
    );
    return blocks[0].map((_, lineNo) => drawLine(blocks, lineNo)).join('\n');
  }

  return rows.map(drawRow).join('\n');
}

function TextCell(text) {
  this.text = text.split('\n');
}

TextCell.prototype.minWidth = function () {
  return this.text.reduce((width, line) => Math.max(width, line.length));
};

TextCell.prototype.minHeight = function () {
  return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
  let result = [];
  for (let i = 0; i < height; i++) {
    let line = this.text[i] || '';
    result.push(line.padEnd(width));
  }
  return result;
};
