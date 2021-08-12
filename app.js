"use strict";
const table = document.getElementById('table');
const row = document.getElementById('row');
const column = document.getElementById('column');
const runBtn = document.getElementById('btn');


function tableGenerator(column, row) {
  let tableTemplate;
  let td = Array(column).fill('<td></td>', 0, column).join('');
  let tr = Array(row).fill(`<tr>${td}</tr>`, 0, row).join('');
  tableTemplate = `<tbody>${tr}</tbody>`
  return tableTemplate
}

function tableRender(e) {
  e.preventDefault()
  table.innerHTML = tableGenerator(+column.value, +row.value);
}

runBtn.addEventListener("click", tableRender);
