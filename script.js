// if document ready was not used it will always return empty object
console.log(document.querySelectorAll('.calc-btn'));
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  // console.clear();
  console.log('DOM is ready');
  // this will always return valid object because it gets ready only when document is loaded
  console.log(document.querySelectorAll('.calc-btn'));
}

function clearInput() {
  // str.slice(0, -1);
  // str.substring(0, str.length - 1);
  if (document.querySelector('#inlineRadio1').checked) {
    myCalc.input1 = myCalc.input1.substring(0, myCalc.input1.length - 1);
    document.querySelector('#input1').value = myCalc.input1;
  }
  if (document.querySelector('#inlineRadio2').checked) {
    myCalc.input2 = myCalc.input2.substring(0, myCalc.input2.length - 1);
    document.querySelector('#input2').value = myCalc.input2;
  }
}

function resetAll() {
  myCalc.input1 = '';
  myCalc.input2 = '';
  myCalc.result = '';
  myCalc.currentOperation = '';
  document.querySelector('#input1').value = myCalc.input1;
  document.querySelector('#input2').value = myCalc.input2;
  this.updateResultInUI();
  console.log(myCalc);
}

function loadInputs(event) {
  let key = '';
  if (event) key = event.target.innerText;
  if (document.querySelector('#inlineRadio1').checked) {
    myCalc.input1 += key;
    document.querySelector('#input1').value = myCalc.input1;
  }
  if (document.querySelector('#inlineRadio2').checked) {
    myCalc.input2 += key;
    document.querySelector('#input2').value = myCalc.input2;
  }
}

// arithmetic calc performance code
function executeArithmeticOperation(event) {
  let key = '';

  if (event) operand = event.target.innerText;

  console.log(operand);

  myCalc.currentOperation = operand;
  switch (operand) {
    case '+':
      myCalc.add();
      break;
    case '-':
      myCalc.sub();
      break;
    case '*':
      myCalc.mul();
      break;
    case '/':
      myCalc.div();
      break;
    default:
      break;
  }
  this.updateResultInUI();
}

function updateResultInUI() {
  document.querySelector('#operand').innerText = myCalc.currentOperation;
  document.querySelector('#result').value =
    myCalc.result !== 'NaN' ? myCalc.result : '0';
}
