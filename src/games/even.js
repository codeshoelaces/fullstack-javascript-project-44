const description = 'Answer "yes" if the number is even, otherwise answer "no".'

function isEven(number) {
    return number % 2 === 0;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const getQuestionAndAnswer = () => {
    const question = randomInteger(1, 10);
    const correctAnswer = isEven(question) ? "yes" : "no";

    return [question, correctAnswer];
}

export const game1 = () => {
    return {
        description,
        getQuestionAndAnswer
    };
};