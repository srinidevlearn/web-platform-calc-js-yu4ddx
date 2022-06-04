document.addEventListener('DOMContentLoaded', ready);

function ready() {
  // console.clear();
  console.log('DOM is ready');
  loadInputSlot1();
  loadInputSlot2();
  loadOutputSlot();
  loadKeys();
}
let keyPad = [
  [9, 8, 7, '&larr;'],
  [6, 5, 4, '-'],
  [3, 2, 1, '/'],
  ['CE', 0, '+', '*'],
];

function loadKeys() {
  let str = '';

  for (let keys of keyPad) {
    str += `<div class="d-flex justify-content-between my-2">`;

    for (let key of keys) {
      if (key === '&larr;') {
        str += singleClearButton(key);
      } else if (key === 'CE') {
        str += clearAllButton(key);
      } else if (
        key === '-' ||
        key === '+' ||
        key === '-' ||
        key === '/' ||
        key === '*'
      ) {
        str += operandButton(key);
      } else {
        str += numreicButton(key);
      }
    }
    str += `</div>`;
  }
  document.querySelector('#buttonContainer').innerHTML = str;
}
