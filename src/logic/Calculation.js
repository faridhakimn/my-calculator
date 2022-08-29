import operate from './Operate';

const calculate = (data, btnName) => {
  const { total, next, operation, tempOp } = data;
  console.log(data)
  switch (btnName) {
    case 'AC':
    case 'CE':
      return {
        total: 0,
        next: null,
        operation: null,
        tempOp: false,
      };
    case '+':
    case '-':
    case '/':
    case '×':
      return { total, next: null, operation: btnName, tempOp: false };
    case '=':
      if (operation)
        return {
          total: operate(total, next, operation),
          next: null,
          operation: null,
          tempOp: true,
        };
      return { total, next: null, operation: null, tempOp: true };
    case '.':
      if (next) {
        return { total, next: `${next}.`, operation, tempOp: false };
      }
      if (total) {
        return { total: `${total}.`, next, operation, tempOp: false };
      }
      return { total: '0.', next, operation };
    default:
      if (operation) return { total, next: next ? next + btnName : btnName, operation };
      if (tempOp) return { total: btnName, next, operation, tempOp: false };
      return { total: total ? total + btnName : btnName, next, operation };
  }
};

export default calculate;