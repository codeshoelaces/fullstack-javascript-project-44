import { question } from 'readline-sync';

export let username;

const greeting = () => {
    username = question('May I have your name? ');
    console.log(`Hello, ${username}!`);
}

greeting();