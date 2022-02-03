import { gameParts, randomInteger, greatestCommonDivisor } from '../index.js';
import welcome from '../src/cli.js';

const brainGcd = () => {
  const correctAnswerList = [];
  console.log('Find the greatest common divisor of given numbers.');
  const name = welcome();
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomInteger(1, 100);
    const secondNum = randomInteger(1, 100);
    if (correctAnswerList[correctAnswerList.length - 1] !== 'finish') {
      const question = `${firstNum} ${secondNum}`;
      const correctAnswer = greatestCommonDivisor(firstNum, secondNum).toString();
      const result = gameParts(name, question, correctAnswer);
      correctAnswerList.push(result);
    }
    if (correctAnswerList[correctAnswerList.length - 1] !== 'finish') {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainGcd;
