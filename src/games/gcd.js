const description = 'Find the greatest common divisor of given numbers.';

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function generateQuestion() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const gcdValue = gcd(a, b);
    return [a, b, gcdValue];
}

const getQuestionAndAnswer = () => {
    const [a, b, gcdValue] = generateQuestion();
    return [a + ' ' + b + '?', gcdValue];
}

export const game3 = () => {
    return {
        description,
        getQuestionAndAnswer
    };
};