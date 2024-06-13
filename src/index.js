import readlineSync from 'readline-sync';
import makeWelcome from '../src/cli.js';

const game = (description, getQuestionAndAnswer) => {
  const roundsCount = 3;
  let correctAnswersCount = 0;
  const name = makeWelcome();

  console.log(description);

  while (correctAnswersCount < roundsCount) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      correctAnswersCount = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;