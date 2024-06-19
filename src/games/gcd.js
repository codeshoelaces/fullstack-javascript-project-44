import game from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const generateQuestion = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const gcdValue = getGCD(num1, num2);
  return { question: `${num1} ${num2}`, correctAnswer: gcdValue.toString() };
};

const getQuestionAndAnswer = () => {
  return generateQuestion();
};

export default () => {
  game(description, getQuestionAndAnswer);
};