import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, getQuestionAndAnswer) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(description);

    let correctAnswersCount = 0;
    let currentQuestionIndex = 0;

    let answer;

    for (let i = 0; i < roundsCount; i++) {
        const [question, correctAnswer] = getQuestionAndAnswer();
        console.log(`Question: ${question}`);
        answer = readlineSync.question(`Your answer: `);
    }

    if (answer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
        console.log(`Let's try again, ${name}!`);
    }
    console.log(`Congratulations ${name}!`);
}