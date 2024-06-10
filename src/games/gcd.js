import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
    if (b === 0) {
        return a;
    }
    return getGCD(b, a % b);
};

const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const gcdValue = getGCD(num1, num2);
    return [num1, num2, gcdValue];
};

const getQuestionAndAnswer = () => {
    const question = generateQuestion();
    const [num1, num2, gcdValue] = question;
    return { question: `${num1} ${num2}`, correctAnswer: gcdValue.toString() };
};

export default () => {
    game(description, getQuestionAndAnswer);
};