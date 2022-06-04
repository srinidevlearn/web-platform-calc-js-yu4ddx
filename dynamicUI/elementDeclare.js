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