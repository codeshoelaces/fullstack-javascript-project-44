import { question } from "readline-sync";

export let username;

export const greeting = () => {
    
    username = question("May I have your name? ");

    console.log(`Hello, ${username}!`);
};