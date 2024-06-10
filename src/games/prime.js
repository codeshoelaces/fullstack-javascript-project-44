import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const generateQuestion = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const isPrimeStatus = isPrime(number);
    const question = `${number}`;
    return { question, isPrimeStatus };
  };

  const getQuestionAndAnswer = () => {
    const generated = generateQuestion();
    const question = generated.question;
    const correctAnswer = generated.isPrimeStatus ? 'yes' : 'no';
  
    return { question, correctAnswer };
  };

export default () => {
  game(description, getQuestionAndAnswer);
};