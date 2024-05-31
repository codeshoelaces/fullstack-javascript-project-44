import { question } from "readline-sync";

export let username: string;

export const greeting = (): void => {
    username = question("May I have your name? ");
    console.log(`Hello, ${username}!`);
};