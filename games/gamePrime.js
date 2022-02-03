import { gameParts, isPrime, randomInteger } from '../index.js';
import welcome from '../src/cli.js';

const brainPrime = () => {
  const correctAnswerList = [];
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const name = welcome();
  for (let i = 0; i < 3; i += 1) {
    if (correctAnswerList[correctAnswerList.length - 1] !== 'finish') {
      const question = randomInteger(1, 100);
      const correctAnswer = isPrime(question) ? 'yes' : 'no';
      const result = gameParts(name, question, correctAnswer);
      correctAnswerList.push(result);
    }
    if (correctAnswerList[correctAnswerList.length - 1] !== 'finish') {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainPrime;
