// one way of declaring objects

let myCalc = {
  input1: '',
  input2: '',
  currentOperation: '',
  result: '',
  // intentionally return to show ES6 way of writing JS methods
  strToNumConvert(val) {
    return parseInt(val);
  },
  add() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 + temp2);
  },
  mul() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 * temp2);
  },
  sub() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 - temp2);
  },
  div() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 / temp2);
  },
};

//other way of declaring object

function myCalcFunction() {
  this.input1 = '';
  this.input2 = '';
  this.currentOperation = '';
  this.result = '';
  this.strToNumConvert = function (val) {
    return parseInt(val);
  };
  this.add = function () {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 + temp2);
  };
  this.mul = function () {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 * temp2);
  };
  this.sub = function () {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 - temp2);
  };
  this.div = function () {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 / temp2);
  };
}

myCalc = new myCalcFunction();
