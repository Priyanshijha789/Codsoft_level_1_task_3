let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;

const display = document.getElementById('display');

function appendNumber(number) {
  if (operator && displayValue === '') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function chooseOperator(op) {
  if (firstOperand === null && displayValue !== '') {
    firstOperand = parseFloat(displayValue);
    operator = op;
    displayValue = '';
  } else if (operator) {
    calculate();
    operator = op;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  firstOperand = null;
  secondOperand = null;
  operator = null;
  updateDisplay();
}

function calculate() {
  if (firstOperand !== null && operator && displayValue !== '') {
    secondOperand = parseFloat(displayValue);
    switch (operator) {
      case '+':
        displayValue = firstOperand + secondOperand;
        break;
      case '-':
        displayValue = firstOperand - secondOperand;
        break;
      case '*':
        displayValue = firstOperand * secondOperand;
        break;
      case '/':
        displayValue = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
        break;
    }
    firstOperand = null;
    operator = null;
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = displayValue || '0';
}
