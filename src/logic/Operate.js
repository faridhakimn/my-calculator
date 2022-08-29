import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  
  let firstNumber;
  let secondNumber;

  try {
    firstNumber = new Big(numOne);
    secondNumber = new Big(numTwo);
  } catch {
    return 0;
  }

  switch (operation) {
    case '+':
      return (firstNumber.plus(secondNumber)).toString();
    case '-':
      return (firstNumber.minus(secondNumber)).toString();
    case '×':
      return (firstNumber.times(secondNumber)).toString();
    case '/':
      if (numTwo === '0') {
        return '0';
      } else {
        return (firstNumber.div(secondNumber)).toString();
      }
    default:
      return 0;
  }
};

export default operate;