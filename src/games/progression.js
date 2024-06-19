import game from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'What number is missing in the progression?';

const generateQuestion = () => {
  const progressLength = getRandomInRange(5, 10);
  const firstTerm = getRandomInRange(1, 9);
  const commonDifference = getRandomInRange(1, 10);
  const hiddenTermPosition = getRandomInRange(0, progressLength - 1);

  let question = '';
  let answer = firstTerm + hiddenTermPosition * commonDifference;

  for (let i = 0; i < progressLength; i++) {
    question += i === hiddenTermPosition ? '.. ' : `${firstTerm + i * commonDifference} `;
  }

  return { question, answer };
};

const getQuestionAndAnswer = () => {
  const { question, answer } = generateQuestion();
  return { question, correctAnswer: String(answer) };
};

export default () => {
  game(description, getQuestionAndAnswer);
};