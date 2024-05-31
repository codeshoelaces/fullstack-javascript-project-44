const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getQuestionAndAnswer = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const isPrimeStatus = isPrime(number);
    return [number, isPrimeStatus ? 'yes' : 'no'];
}

export const game5 = () => {
    (description, getQuestionAndAnswer);
};