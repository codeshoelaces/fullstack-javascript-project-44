import { question } from "readline-sync";

const roundsCount = 3;

export default (description, getQuestionAndAnswer) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(description);

    let correctAnswersCount = 0;
    let currentQuestionIndex = 0;

    for (let i = 0; i < roundsCount; i++) {
        const [question, correctAnswer] = getQuestionAndAnswer();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question(`Your answer: `);

        if (answer === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount++;
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
        }
    }

    console.log(`You got ${correctAnswersCount} out of ${roundsCount} correct answers.`);
    console.log(`Congratulations ${name}!`);
}