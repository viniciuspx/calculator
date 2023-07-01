function Calculate(valueA, valueB, operation) {
  let result;
  switch (operation) {
    case '+':
      result = valueA + valueB;
      break;
    case '-':
      result = valueA - valueB;
      break;
    case '/':
      result = valueA / valueB;
      break;
    case '*':
      result = valueA * valueB;
      break;
    default:
      break;
  }
  return result;
}

export default Calculate;
