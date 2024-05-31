const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

const getQuestionAndAnswer = () => {
  const operand1 = Math.floor(Math.random() * 10);
  const operatorIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorIndex];
  const operand2 = Math.floor(Math.random() * 10);

  let correctAnswer;
  switch (operator) {
      case '+':
          correctAnswer = add(operand1, operand2);
          break;
      case '-':
          correctAnswer = subtract(operand1, operand2);
          break;
      case '*':
          correctAnswer = multiply(operand1, operand2);
          break;
      default:
          correctAnswer = null;
          break;
  }

  return [`${operand1} ${operator} ${operand2}`, correctAnswer];
}

export const game2 = () => {
    return {
        description,
        getQuestionAndAnswer
    };
};