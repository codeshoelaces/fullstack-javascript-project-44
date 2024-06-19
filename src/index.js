import readlineSync from 'readline-sync';
import makeWelcome from '../src/cli.js';

const roundsCount = 3;

const game = (description, getQuestionAndAnswer) => {
  const name = makeWelcome();

  console.log(description);

  while (true) {
    let correctAnswersCount = 0;

    for (let i = 0; i < roundsCount; i++) {
      const { question, correctAnswer } = getQuestionAndAnswer();
      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === correctAnswer) {
        console.log('Correct!');
        correctAnswersCount++;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        correctAnswersCount = 0;
        break;
      }
    }

    if (correctAnswersCount === roundsCount) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default game;