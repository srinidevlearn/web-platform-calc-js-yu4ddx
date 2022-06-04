function numreicButton(key) {
  return ` <div>
  <button
    type="button"
    class="btn btn-outline-primary btn-lg calc-btn"
    onClick="loadInputs(event)"
  >
    ${key}
  </button>
</div>`;
}
function clearAllButton(key) {
  return `<div>
  <button
    type="button"
    class="btn btn-outline-primary btn-lg calc-btn"
    onClick="resetAll()"
  >
    ${key}
  </button>
</div>`;
}
function singleClearButton(key) {
  return ` <div>
  <button
    type="button"
    class="btn btn-outline-primary btn-lg calc-btn"
    onClick="clearInput()"
  >
    ${key}
  </button>
</div>`;
}

function operandButton(key) {
  return `  <div>
  <button
    type="button"
    class="btn btn-outline-primary btn-lg calc-btn"
    onClick="executeArithmeticOperation(event)"
  >
    ${key}
  </button>
</div>`;
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
