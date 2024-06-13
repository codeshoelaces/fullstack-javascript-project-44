import game from '../index.js';
import getRandomInRange from '../utils.js';


const description = 'What is the result of the expression?';

const getRandomOperation = () => {
  return ['+', '-', '*'][Math.floor(Math.random() * 3)];
};

const generateQuestion = () => {
  let num1 = getRandomInRange(1, 100);
  let num2 = getRandomInRange(1, 100);
  const operation = getRandomOperation();

  switch (operation) {
    case '+':
      return `${num1} + ${num2}`;
    case '-':
      return `${num1} - ${num2}`;
    case '*':
      return `${num1} * ${num2}`;
  }
};

const getQuestionAndAnswer = () => {
  const question = generateQuestion();
  const [num1Str, operation, num2Str] = question.split(' ');

  let num1 = Number(num1Str);
  let num2 = Number(num2Str);

  switch (operation) {
    case '+':
      return { question, correctAnswer: (num1 + num2).toFixed(0) };
    case '-':
      return { question, correctAnswer: (num1 - num2).toFixed(0) };
    case '*':
      return { question, correctAnswer: (num1 * num2).toFixed(0) };
  }
};

export default () => {
  game(description, getQuestionAndAnswer);
};