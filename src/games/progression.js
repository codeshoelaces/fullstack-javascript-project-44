import game from '../index.js';

const description = 'What number is missing in the progression?';

const generateQuestion = () => {
    let question = '';
    let answer = '';

    const progressLength = Math.floor(Math.random() * 6) + 5;
    const firstTerm = Math.floor(Math.random() * 9) + 1;
    const commonDifference = Math.floor(Math.random() * 10) + 1;
    let hiddenTermPosition = Math.floor(Math.random() * progressLength);

    if (hiddenTermPosition === 0) {
        question += `${firstTerm}`;
    }

    for (let i = 0; i < progressLength; i++) {
        if (i === hiddenTermPosition) {
            question += '..';
        } else {
            question += `${firstTerm + i * commonDifference} `;
        }
    }

    answer = firstTerm + hiddenTermPosition * commonDifference;

    return { question, answer };
};

const getQuestionAndAnswer = () => {
    const { question, answer } = generateQuestion();
    const correctAnswer = String(answer);
    return { question, correctAnswer };
};

export default () => {
    game(description, getQuestionAndAnswer);
};