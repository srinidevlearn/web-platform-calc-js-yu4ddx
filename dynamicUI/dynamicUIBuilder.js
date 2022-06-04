document.addEventListener('DOMContentLoaded', ready);

function ready() {
  // console.clear();
  console.log('DOM is ready');
  console.log(document.querySelector('#buttonContainer'));
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


function createDivTag(htmlClass) {
  let el = document.createElement('div');
  el.classList.add(htmlClass);
  return el;
}

function createInputTag(id, readonly = false) {
  let el = document.createElement('input');
  el.setAttribute('id', id);
  if (readonly) el.setAttribute('readonly', true);
  el.classList.add('form-control');
  return el;
}

function createLabel(label) {
  let el = document.createElement('label');
  el.innerText = label;
  return el;
}

function loadInputSlot1() {
  document.querySelector('#inputslot1').appendChild(createLabel('Input 1'));
  document
    .querySelector('#inputslot1')
    .appendChild(createInputTag('input1', true));
}
function loadInputSlot2() {
  document.querySelector('#inputslot2').appendChild(createLabel('Input 2'));
  document
    .querySelector('#inputslot2')
    .appendChild(createInputTag('input2', true));
}
function loadOutputSlot() {
  document.querySelector('#outputslot').appendChild(createLabel('Result'));

  document
    .querySelector('#outputslot')
    .appendChild(createInputTag('result', true));
}
