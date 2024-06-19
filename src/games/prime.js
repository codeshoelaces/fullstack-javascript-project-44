import game from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateQuestion = () => {
  const number = getRandomInRange(1, 100);
  const isPrimeStatus = isPrime(number);
  return { question: `${number}`, isPrimeStatus };
};

const getQuestionAndAnswer = () => {
  const { question, isPrimeStatus } = generateQuestion();
  return { question, correctAnswer: isPrimeStatus ? 'yes' : 'no' };
};

export default () => {
  game(description, getQuestionAndAnswer);
};