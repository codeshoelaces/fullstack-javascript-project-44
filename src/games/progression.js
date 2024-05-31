const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
    const progressLength = Math.floor(Math.random() * 10) + 5;
    const firstTerm = 1;
    const commonDifference = Math.floor(Math.random() * 10) + 1;
    let hiddenTermPosition = Math.floor(Math.random() * (progressLength - 1));

    let question = '';
    let answer = '';

    for (let i = 0; i < progressLength; i++) {
        if (i === hiddenTermPosition) {
            question += '.. ';
        } else {
            question += (firstTerm + i * commonDifference) + ' ';
        }
    }

    answer = firstTerm + hiddenTermPosition * commonDifference;

    return [question, answer];
}

export const game4 = () => {
    return {
        description,
        getQuestionAndAnswer
    };
};